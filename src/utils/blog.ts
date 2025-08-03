import { getCollection } from 'astro:content';

/**
 * Holt alle Blog-Posts und sortiert sie nach Datum (neueste zuerst)
 */
export async function getSortedPosts() {
  const posts = await getCollection('blog');
  return posts.sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime(),
  );
}

/**
 * Holt einen spezifischen Blog-Post anhand des Slugs
 */
export async function getPostBySlug(slug: string) {
  const posts = await getCollection('blog');
  return posts.find((post) => post.slug === slug);
}

/**
 * Holt alle Blog-Posts für getStaticPaths
 */
export async function getAllPostsForPaths() {
  const posts = await getCollection('blog');
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: { post },
  }));
}
