import type { ExternalActivity } from './types'

const data: ExternalActivity[] = [
  {
    title: 'GraphQL Code Generator v3 Roadmapで推されているclient-presetを紹介する',
    description: '新しく追加されたclient-presetを紹介します',
    date: new Date('2023/01/26'),
    url: 'https://zenn.dev/mh4gf/articles/graphql-codegen-client-preset',
    isExternal: true,
  },
]

const testData: ExternalActivity[] = [
  {
    title: 'external link example',
    description: 'sample description',
    date: new Date('2023/01/26'),
    url: 'https://example.com',
    isExternal: true,
  },
]

export const externalActivities = process.env.PLAYWRIGHT ? testData : data
