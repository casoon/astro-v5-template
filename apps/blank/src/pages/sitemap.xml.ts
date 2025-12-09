import { createSitemapRoute } from '@astro-v5/utils';

const pageModules = import.meta.glob('./**/*.astro', { eager: true });

export const GET = createSitemapRoute({
  pageModules,
});
