import type { Page } from '@playwright/test'
import { expect, test } from '@playwright/test'

const setup = async (page: Page, isMobile: boolean) => {
  await page.goto('/')

  const clickThemeToggleButton = async () => {
    if (isMobile) {
      const menuButton = page.getByRole('button', { name: 'Open Menu' })
      await menuButton.click()
    }
    const toggleButton = page.getByRole('button', { name: 'light' })
    await toggleButton.click()
  }

  return { clickThemeToggleButton }
}

test('トップページを開く', async ({ page, isMobile }) => {
  await setup(page, isMobile)

  expect(page.getByRole('heading', { name: 'Hirotaka Miyagi' }))
  await expect(page).toHaveScreenshot()
})

test('テーマ切り替えができる', async ({ page, isMobile }) => {
  const { clickThemeToggleButton } = await setup(page, isMobile)
  await clickThemeToggleButton()

  await expect(page).toHaveScreenshot()
})
