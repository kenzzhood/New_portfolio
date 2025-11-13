import { test, expect } from '@playwright/test';

test('Anomalous Matter Hero', async ({ page }) => {
  await page.goto('http://localhost:5173');
  await expect(page.locator('h1:has-text("Launch Sequence: Anomaly 12")')).toBeVisible();
  await expect(page.locator('p:has-text("Energy dances along unseen frontiers.")')).toBeVisible();
  await expect(page.locator('p:has-text("This demo shows how to override the default copy and integrate hero into a page layout.")')).toBeVisible();
  await page.screenshot({ path: '/home/jules/verification/anomalous_matter_hero_cleanup.png' });
});
