import { type CollectionEntry, getCollection } from 'astro:content';

type BlogEntry = CollectionEntry<'blog'>;

/**
 * Get all blog posts sorted by date (newest first)
 * Optionally filter out draft posts in production
 */
export async function getSortedPosts(
  includeDrafts = false,
): Promise<BlogEntry[]> {
  const posts = await getCollection('blog', ({ data }: BlogEntry) => {
    // Filter out drafts in production unless explicitly requested
    if (!includeDrafts && import.meta.env.PROD) {
      return !data.draft;
    }
    return true;
  });

  return posts.sort(
    (a: BlogEntry, b: BlogEntry) =>
      new Date(b.data.date).getTime() - new Date(a.data.date).getTime(),
  );
}

/**
 * Get featured blog posts
 */
export async function getFeaturedPosts(): Promise<BlogEntry[]> {
  const posts = await getCollection('blog', ({ data }: BlogEntry) => {
    // Only return featured posts that are not drafts
    return data.featured && !data.draft;
  });

  return posts.sort(
    (a: BlogEntry, b: BlogEntry) =>
      new Date(b.data.date).getTime() - new Date(a.data.date).getTime(),
  );
}

/**
 * Get a specific blog post by slug
 * @throws {Error} if post is not found
 */
export async function getPostBySlug(slug: string): Promise<BlogEntry> {
  const posts = await getCollection('blog');
  const post = posts.find((post: BlogEntry) => post.slug === slug);

  if (!post) {
    throw new Error(`Blog post not found: ${slug}`);
  }

  return post;
}

/**
 * Get all blog posts for getStaticPaths
 * Filters out drafts in production
 */
export async function getAllPostsForPaths() {
  const posts = await getCollection('blog', ({ data }: BlogEntry) => {
    // Filter out drafts in production
    if (import.meta.env.PROD) {
      return !data.draft;
    }
    return true;
  });

  return posts.map((post: BlogEntry) => ({
    params: { slug: post.slug },
    props: { post },
  }));
}

/**
 * Get posts by tag
 */
export async function getPostsByTag(tag: string): Promise<BlogEntry[]> {
  const posts = await getCollection('blog', ({ data }: BlogEntry) => {
    // Filter by tag and exclude drafts in production
    const hasTag = data.tags.includes(tag);
    const isDraftInProd = import.meta.env.PROD && data.draft;
    return hasTag && !isDraftInProd;
  });

  return posts.sort(
    (a: BlogEntry, b: BlogEntry) =>
      new Date(b.data.date).getTime() - new Date(a.data.date).getTime(),
  );
}

/**
 * Get all unique tags from blog posts
 */
export async function getAllTags(): Promise<string[]> {
  const posts = await getCollection('blog', ({ data }: BlogEntry) => {
    // Exclude drafts in production
    if (import.meta.env.PROD) {
      return !data.draft;
    }
    return true;
  });

  const tags = new Set<string>();
  for (const post of posts) {
    for (const tag of post.data.tags) {
      tags.add(tag);
    }
  }

  return Array.from(tags).sort();
}
