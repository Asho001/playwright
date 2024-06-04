import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {slowmo : 2000
  await page.goto('https://www.redbus.in/');
  await page.getByRole('link', { name: 'Book Train Tickets ' }).click();
  await page.locator('article').filter({ hasText: 'view detailsGet 24% off upto' }).getByRole('img').click();
  await page.getByRole('button', { name: 'BOOK A TICKET' }).click();
  await page.getByRole('link', { name: 'Singapore' }).click();
  await page.pause();
});