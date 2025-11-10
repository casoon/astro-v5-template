import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { env } from '@/env';
import {
  generateSitemapPages,
  generateSitemapXML,
} from '@shared/utils/sitemap';

// Dynamically import all .astro pages
const pageModules = import.meta.glob('./**/*.astro', { eager: true });

export const GET: APIRoute = async () => {
  // Get blog posts from content collection
  const blogPosts = await getCollection('blog');

  // Generate sitemap pages
  const pages = generateSitemapPages({
    siteUrl: env.PUBLIC_SITE_URL,
    pageModules,
    blogPosts,
  });

  // Generate XML sitemap
  const sitemap = generateSitemapXML(pages, env.PUBLIC_SITE_URL);

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
