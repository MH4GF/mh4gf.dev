import type { Page } from '@playwright/test'
import { expect, test } from '@playwright/test'

import { captureScreenshotWithTheme } from './utils/captureScreenshotWithTheme'

const setup = async (page: Page) => {
  await page.goto('/activities')
}

test('/activities', async ({ page, isMobile }) => {
  await setup(page)

  await captureScreenshotWithTheme(page, isMobile)
})

test('/activities 外部リンクは別タブで開く', async ({ page }) => {
  await setup(page)

  await expect(page.getByRole('link', { name: 'external link example' })).toHaveAttribute(
    'target',
    '_blank',
  )
})
