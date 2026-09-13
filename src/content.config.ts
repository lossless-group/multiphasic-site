import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/* Deliberately permissive — per the astro-knots reminder
 * `Rule-to-Assure-Collection-Schema-is-Flexible`, we document shape rather
 * than gatekeep on it. Everything past `order` and `title` is optional so an
 * author typo degrades one field instead of failing the build. */
const beats = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/beats' }),
  schema: z
    .object({
      order: z.number(),
      slug_id: z.string(),
      eyebrow: z.string().optional(),
      title: z.string(),
      sub: z.string().optional(),
      kicker: z.string().optional(),
      stats: z
        .array(
          z.object({
            label: z.string(),
            value: z.string(),
            qualifier: z.string().optional(),
            body: z.string().optional(),
          })
        )
        .optional(),
      items: z
        .array(
          z.object({
            label: z.string(),
            body: z.string().optional(),
            note: z.string().optional(),
          })
        )
        .optional(),
      left: z.object({ title: z.string(), body: z.string() }).optional(),
      right: z.object({ title: z.string(), body: z.string() }).optional(),
    })
    .passthrough(),
});

export const collections = { beats };
