import { z } from 'astro:content'

export const blogSchema = z
  .object({
    author: z.string().optional(),
    date: z.date(),
    title: z.string(),
    postSlug: z.string(),
    featured: z.boolean().optional(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).default(['others']),
    ogImage: z.string().optional(),
    description: z.string(),
    isExternal: z.literal(false),
  })
  .strict()

export type BlogFrontmatter = z.infer<typeof blogSchema>
