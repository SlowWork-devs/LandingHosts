import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const hosts = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/hosts' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    cta: z.string(),
    videoTitle: z.string(),
    videoId: z.string(),
  }),
});

export const collections = { hosts };
