import type { Page } from '@playwright/test'
import { expect, test } from '@playwright/test'

const setup = async (page: Page) => {
  await page.goto('/activities')
}

test('/activities', async ({ page }) => {
  await setup(page)

  await expect(page).toHaveScreenshot()
})

test('/activities 外部リンクは別タブで開く', async ({ page }) => {
  await setup(page)

  await expect(page.getByRole('link', { name: 'external link example' })).toHaveAttribute(
    'target',
    '_blank',
  )
})
