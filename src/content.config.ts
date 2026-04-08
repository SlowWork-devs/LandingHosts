import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const bulletList = z.array(z.string());

const benefitBlock = z.object({
  title: z.string(),
  body: z.string(),
});

const faqItem = z.object({
  question: z.string(),
  answer: z.string(),
});

const hostsSchema = z.object({
  hero: z.object({
    title: z.string(),
    subtitle: z.string(),
    microcopy: z.string(),
    cta: z.string(),
    ctaHref: z.string(),
  }),
  problem: z.object({
    heading: z.string(),
    bodyParagraphs: z.array(z.string()),
    points: bulletList,
    closing: z.string(),
  }),
  whatIs: z.object({
    heading: z.string(),
    paragraphs: z.array(z.string()),
    closing: z.string(),
  }),
  whyJoin: z.object({
    heading: z.string(),
    intro: z.string(),
    benefits: z.array(benefitBlock),
  }),
  whoFor: z.object({
    heading: z.string(),
    intro: z.string(),
    profiles: z.array(benefitBlock),
  }),
  howItWorks: z.object({
    heading: z.string(),
    intro: z.string(),
    steps: z.array(benefitBlock),
  }),
  different: z.object({
    heading: z.string(),
    paragraphs: z.array(z.string()),
    bulletsLead: z.string(),
    bullets: bulletList,
  }),
  whatYouGet: z.object({
    heading: z.string(),
    intro: z.string(),
    bulletsLead: z.string(),
    bullets: bulletList,
  }),
  afterApply: z.object({
    heading: z.string(),
    intro: z.string(),
    bulletsLead: z.string(),
    bullets: bulletList,
    closing: z.string(),
  }),
  faq: z.object({
    heading: z.string(),
    items: z.array(faqItem),
  }),
  finalCta: z.object({
    heading: z.string(),
    paragraphs: z.array(z.string()),
    cta: z.string(),
    ctaHref: z.string(),
    closingLines: z.array(z.string()),
  }),
  video: z
    .object({
      title: z.string(),
      videoId: z.string(),
      posterUrl: z.string(),
    })
    .optional(),
});

const hosts = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/hosts' }),
  schema: hostsSchema,
});

export const collections = { hosts };
