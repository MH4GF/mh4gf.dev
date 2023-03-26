import type { Page } from '@playwright/test'
import { expect, test } from '@playwright/test'

import { captureScreenshotWithTheme } from './utils/captureScreenshotWithTheme'

const setup = async (page: Page) => {
  await page.goto('/')
  await page.waitForLoadState('networkidle')
}

test('/', async ({ page, isMobile }) => {
  await setup(page)

  expect(page.getByRole('heading', { name: 'Hirotaka Miyagi' }))
  await captureScreenshotWithTheme(page, isMobile)
})
