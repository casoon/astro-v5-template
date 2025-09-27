import { type CollectionEntry, getCollection } from 'astro:content';

/**
 * Get all blog posts sorted by date (newest first)
 */
export async function getSortedPosts(): Promise<CollectionEntry<'blog'>[]> {
  const posts = await getCollection('blog');
  return posts.sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime(),
  );
}

/**
 * Get a specific blog post by slug
 */
export async function getPostBySlug(slug: string): Promise<CollectionEntry<'blog'> | undefined> {
  const posts = await getCollection('blog');
  return posts.find((post) => post.slug === slug);
}

/**
 * Get all blog posts for getStaticPaths
 */
export async function getAllPostsForPaths() {
  const posts = await getCollection('blog');
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: { post },
  }));
}
