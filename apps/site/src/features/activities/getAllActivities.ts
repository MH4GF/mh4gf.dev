import { getCollection } from 'astro:content'

import type { Activity } from './types'

const sortByDate = (a: Activity, b: Activity): number => {
  return b.date.getTime() - a.date.getTime()
}

export const getAllActivities = async (): Promise<Activity[]> => {
  const [blogs, { externalActivities }] = await Promise.all([
    getCollection('blog').then((blogs) => blogs.map((b) => b.data)),
    import('./data'),
  ])
  const activities = [...blogs, ...externalActivities]

  return activities.sort(sortByDate)
}
