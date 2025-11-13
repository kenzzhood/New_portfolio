import { test, expect } from '@playwright/test';

test('Hero section with blur-in animation and correct content', async ({ page }) => {
  await page.goto('http://localhost:5178');

  // Wait for the hero section to be visible
  await page.waitForSelector('section[role="banner"]');

  // Expect the main headline with the blur-in animation to be present
  await expect(page.getByRole('heading', { name: 'GOUTHAM SRINATH' })).toBeVisible();

  // Expect the subheading to be present
  await expect(page.getByText('Full Stack Developer')).toBeVisible();

  // Expect the buttons to be present
  await expect(page.getByRole('link', { name: 'View My Work' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Contact Me' })).toBeVisible();

  // Take a screenshot of the hero section
  await page.screenshot({ path: '/home/jules/verification/hero_final.png' });
});
