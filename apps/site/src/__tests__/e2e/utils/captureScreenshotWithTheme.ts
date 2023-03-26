import type { Page } from '@playwright/test'
import { expect } from '@playwright/test'

const clickThemeToggleButton = async (page: Page, isMobile: boolean) => {
  if (isMobile) {
    const menuButton = page.getByRole('button', { name: 'Open Menu' })
    await menuButton.click()
  }
  const toggleButton = page.getByRole('button', { name: 'light' })
  await toggleButton.click()
}

export const captureScreenshotWithTheme = async (page: Page, isMobile: boolean) => {
  await expect(page).toHaveScreenshot()

  await clickThemeToggleButton(page, isMobile)
  await expect(page).toHaveScreenshot()
}
