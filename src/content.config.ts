import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    time: z.string().optional(),
    location: z.string().optional(),
    summary: z.string(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    author: z.string().default('Frères Capucins'),
    summary: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()).default(['Actualités']),
  }),
});

export const collections = { events, posts };
