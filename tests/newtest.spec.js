import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://alcsaws.teamlease.com/GUI/Login/Login.aspx');
  await page.getByPlaceholder('Login ID').fill('T4297');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('18@december');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('link', { name: 'menu' }).click();
  await page.getByRole('link', { name: 'keyboard_arrow_down account_circle Master' }).click();
  await page.getByRole('button', { name: 'Regulatory Setup' }).click();
  await page.getByRole('link', { name: 'Commercial Setup', exact: true }).click();
  await page.getByRole('cell', { name: 'Client' }).locator('label').click();
  await page.getByTitle('-- Select Client --').click();
  await page.getByRole('treeitem', { name: '05NDL / Gillette India Ltd...' }).click();
  await page.close()
});