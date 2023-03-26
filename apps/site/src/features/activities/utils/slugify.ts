import { slug } from 'github-slugger'

import type { Activity } from '../types'

export const slugify = (activity: Activity): string => {
  return activity.isExternal ? activity.url : `/posts/${slug(activity.postSlug)}`
}
