import { z } from 'astro:content'
import type { CollectionEntry } from 'astro:content'

const externalActivitySchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.date(),
  url: z.string(),
  isExternal: z.literal(true),
})

export type ExternalActivity = z.infer<typeof externalActivitySchema>

export type Activity = CollectionEntry<'blog'>['data'] | ExternalActivity
