import type { APIRoute } from "astro";
import type { CollectionEntry } from "astro:content";

export interface SitemapPage {
  url: string;
  lastmod: string;
  changefreq:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority: string;
}

export interface SitemapConfig {
  siteUrl: string;
  pageModules: Record<string, unknown>;
  blogPosts?: CollectionEntry<"blog">[];
}

/**
 * Generate sitemap pages from static pages and optional blog posts
 * @param config - Configuration for sitemap generation
 * @returns Array of sitemap pages
 */
export function generateSitemapPages(config: SitemapConfig): SitemapPage[] {
  const { siteUrl, pageModules, blogPosts } = config;

  // Get static pages
  const staticPages = Object.entries(pageModules)
    .map(([filePath, modRaw]) => {
      const mod = modRaw as { lastmod?: string | Date; draft?: boolean };

      // Skip draft pages
      if (mod.draft === true) return null;

      // Skip sitemap.xml itself and API routes
      if (filePath.includes("sitemap.xml") || filePath.includes("/api/"))
        return null;

      // Generate URL path
      let url = filePath
        .replace("./index.astro", "/")
        .replace(/\.astro$/, "")
        .replace(/\/index$/, "/")
        .replace("./", "/")
        .replace(/\/\//g, "/");

      // Skip dynamic routes (will handle blog separately if provided)
      if (url.includes("[")) return null;

      // Extract lastmod
      let lastmod = mod.lastmod;
      if (typeof lastmod === "string") {
        lastmod = new Date(lastmod);
      }
      const lastmodStr =
        lastmod instanceof Date && !isNaN(lastmod.getTime())
          ? lastmod.toISOString().split("T")[0]
          : new Date().toISOString().split("T")[0];

      // Priority and changefreq based on page
      let priority = "0.8";
      let changefreq: SitemapPage["changefreq"] = "monthly";

      if (url === "/") {
        priority = "1.0";
        changefreq = "weekly";
      } else if (url.match(/\/(blog|contact)\//)) {
        priority = "0.9";
        changefreq = "weekly";
      } else if (url.match(/\/(404)\//)) {
        priority = "0.1";
        changefreq = "yearly";
      }

      return { url, lastmod: lastmodStr, changefreq, priority };
    })
    .filter((page): page is SitemapPage => !!page);

  // Get blog posts if provided
  const blogPages: SitemapPage[] = blogPosts
    ? blogPosts
        .filter((post: CollectionEntry<"blog">) => !post.data.draft)
        .map((post: CollectionEntry<"blog">) => {
          const lastmodStr = new Date(post.data.date)
            .toISOString()
            .split("T")[0];

          return {
            url: `/blog/${post.slug}/`,
            lastmod: lastmodStr,
            changefreq: "monthly" as const,
            priority: "0.7",
          };
        })
    : [];

  // Combine all pages
  return [...staticPages, ...blogPages];
}

/**
 * Generate XML sitemap string from pages
 * @param pages - Array of sitemap pages
 * @param siteUrl - Base URL of the site
 * @returns XML sitemap string
 */
export function generateSitemapXML(
  pages: SitemapPage[],
  siteUrl: string,
): string {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  pages.forEach((page) => {
    sitemap += `
  <url>
    <loc>${siteUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  });

  sitemap += `
</urlset>`;

  return sitemap;
}

/**
 * Creates a sitemap API route handler
 * This is a factory function that generates the GET handler for sitemap.xml.ts
 *
 * @param options - Configuration options
 * @returns APIRoute GET handler
 *
 * @example
 * ```ts
 * // In packages/your-package/src/pages/sitemap.xml.ts
 * import { createSitemapRoute } from '@astro-v5/shared/utils';
 * import { env } from '@/env';
 *
 * const pageModules = import.meta.glob('./**\/*.astro', { eager: true });
 *
 * export const GET = createSitemapRoute({
 *   siteUrl: env.PUBLIC_SITE_URL,
 *   pageModules,
 * });
 * ```
 *
 * @example With blog posts
 * ```ts
 * import { getCollection } from 'astro:content';
 * import { createSitemapRoute } from '@astro-v5/shared/utils';
 * import { env } from '@/env';
 *
 * const pageModules = import.meta.glob('./**\/*.astro', { eager: true });
 *
 * export const GET = createSitemapRoute({
 *   siteUrl: env.PUBLIC_SITE_URL,
 *   pageModules,
 *   getBlogPosts: () => getCollection('blog'),
 * });
 * ```
 */
export function createSitemapRoute(options: {
  siteUrl: string;
  pageModules: Record<string, unknown>;
  getBlogPosts?: () => Promise<CollectionEntry<"blog">[]>;
}): APIRoute {
  return async () => {
    const { siteUrl, pageModules, getBlogPosts } = options;

    // Get blog posts if provided
    const blogPosts = getBlogPosts ? await getBlogPosts() : undefined;

    // Generate sitemap pages
    const pages = generateSitemapPages({
      siteUrl,
      pageModules,
      blogPosts,
    });

    // Generate XML sitemap
    const sitemap = generateSitemapXML(pages, siteUrl);

    return new Response(sitemap, {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
      },
    });
  };
}
