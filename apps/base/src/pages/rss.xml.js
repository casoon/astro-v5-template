import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { env } from '@/env';

export async function GET(context) {
  const posts = await getCollection('blog');
  return rss({
    title: env.PUBLIC_SITE_NAME,
    description: `Latest blog posts from ${env.PUBLIC_SITE_NAME}`,
    site: context.site,
    items: posts
      .sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime())
      .map((post) => ({
        title: post.data.title,
        pubDate: new Date(post.data.date),
        description: post.data.description || '',
        link: `/blog/${post.slug}/`,
        categories: post.data.tags || [],
        author: post.data.author || env.PUBLIC_SITE_NAME,
      })),
    customData: `<language>en-US</language>`,
  });
}
