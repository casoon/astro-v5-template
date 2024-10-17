import { defineCollection } from 'astro:content';
import { z } from 'zod';

const blog = defineCollection({
    schema: z.object({
        title: z.string(),
        date: z.string(),
    }),
});

export const collections = {
    blog,
};
