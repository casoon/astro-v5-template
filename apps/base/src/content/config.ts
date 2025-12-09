import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().min(1).max(100),
    description: z.string().min(10).max(160),
    date: z.coerce.date(),
    author: z.string().default('Astro V5 Template'),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  blog,
};
