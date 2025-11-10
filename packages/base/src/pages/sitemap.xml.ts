import type { APIRoute } from 'astro';
import { env } from '@/env';
import {
  generateSitemapPages,
  generateSitemapXML,
} from '@shared/utils/sitemap';

// Dynamically import all .astro pages
const pageModules = import.meta.glob('./**/*.astro', { eager: true });

export const GET: APIRoute = async () => {
  // Generate sitemap pages (without blog posts for base package)
  const pages = generateSitemapPages({
    siteUrl: env.PUBLIC_SITE_URL,
    pageModules,
  });

  // Generate XML sitemap
  const sitemap = generateSitemapXML(pages, env.PUBLIC_SITE_URL);

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
