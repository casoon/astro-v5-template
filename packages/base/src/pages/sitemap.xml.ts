import { createSitemapRoute } from '@astro-v5/shared/utils';
import { env } from '@/env';

const pageModules = import.meta.glob('./**/*.astro', { eager: true });

export const GET = createSitemapRoute({
  siteUrl: env.PUBLIC_SITE_URL,
  pageModules,
});
