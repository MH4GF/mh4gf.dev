import { expect, test } from '@playwright/test'

test('トップページを開く', async ({ page }) => {
  await page.goto('/')
  expect(page.getByRole('heading', { name: 'Hirotaka Miyagi' }))
  await expect(page).toHaveScreenshot()
})
