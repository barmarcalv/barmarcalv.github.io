import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    org: z.string(),
    role: z.string(),
    years: z.string(),
    order: z.number(),
    summary: z.string(),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    links: z
      .array(z.object({ label: z.string(), href: z.string() }))
      .default([]),
    draft: z.boolean().default(false),
  }),
});

const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    kind: z.enum(['Article', 'Talk', 'Podcast', 'Teaching']),
    venue: z.string(),
    date: z.string(),
    href: z.string(),
    blurb: z.string().optional(),
    lang: z.string().default('English'),
  }),
});

const gallery = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/gallery' }),
  schema: z.object({
    title: z.string(),
    section: z.enum(['illustration', 'other']),
    year: z.string().optional(),
    kind: z.string().optional(),
    image: z.string().optional(),
    alt: z.string().optional(),
    href: z.string().optional(),
    ratio: z.string().default('4 / 5'),
    order: z.number().default(50),
  }),
});

export const collections = { work, writing, gallery };
