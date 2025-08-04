import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

const pages = [
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/services' },
  { name: 'Process', url: '/process' },
  { name: 'About', url: '/about' },
  { name: 'Contact', url: '/contact' },
  { name: 'Privacy', url: '/legal/privacy' },
  { name: 'Terms', url: '/legal/terms' },
]

pages.forEach(({ name, url }) => {
  test(`${name} page should be accessible`, async ({ page }) => {
    await page.goto(url)
    
    const accessibilityScanResults = await new AxeBuilder({ page })
      .disableRules(['color-contrast']) // Disable if you want to manually verify
      .analyze()

    expect(accessibilityScanResults.violations).toEqual([])
  })

  test(`${name} page should load correctly`, async ({ page }) => {
    await page.goto(url)
    
    // Check that the page loads without errors
    expect(page.url()).toContain(url)
    
    // Check for basic content
    await expect(page.locator('h1')).toBeVisible()
    
    // Check that navigation is present
    await expect(page.locator('nav')).toBeVisible()
    
    // Check that footer is present
    await expect(page.locator('footer')).toBeVisible()
  })

  test(`${name} page should have proper meta tags`, async ({ page }) => {
    await page.goto(url)
    
    // Check for title
    const title = await page.title()
    expect(title).toBeTruthy()
    expect(title).toContain('Northern Analytics')
    
    // Check for meta description
    const metaDescription = await page.locator('meta[name="description"]').getAttribute('content')
    expect(metaDescription).toBeTruthy()
    expect(metaDescription!.length).toBeGreaterThan(50)
  })
})

test('Contact form should work', async ({ page }) => {
  await page.goto('/contact')
  
  // Fill out the form
  await page.fill('input[name="name"]', 'Test User')
  await page.fill('input[name="email"]', 'test@example.com')
  await page.fill('textarea[name="message"]', 'This is a test message')
  
  // The form should be ready to submit (we won't actually submit in tests)
  const submitButton = page.locator('button[type="submit"]')
  await expect(submitButton).toBeVisible()
  await expect(submitButton).not.toBeDisabled()
})

test('Navigation should work on mobile', async ({ page }) => {
  // Set mobile viewport
  await page.setViewportSize({ width: 375, height: 667 })
  await page.goto('/')
  
  // Mobile menu button should be visible
  const mobileMenuButton = page.locator('button[aria-label="Toggle navigation menu"]')
  await expect(mobileMenuButton).toBeVisible()
  
  // Click to open mobile menu
  await mobileMenuButton.click()
  
  // Menu items should be visible
  await expect(page.locator('a[href="/services"]')).toBeVisible()
  await expect(page.locator('a[href="/about"]')).toBeVisible()
})

test('Focus management should work correctly', async ({ page }) => {
  await page.goto('/')
  
  // Tab through interactive elements
  await page.keyboard.press('Tab')
  
  // Check that focus is visible
  const focusedElement = await page.locator(':focus')
  await expect(focusedElement).toBeVisible()
  
  // Continue tabbing to ensure proper focus order
  await page.keyboard.press('Tab')
  await page.keyboard.press('Tab')
  
  const secondFocusedElement = await page.locator(':focus')
  await expect(secondFocusedElement).toBeVisible()
})