import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://alcsaws.teamlease.com/GUI/Login/Login.aspx');
  await page.getByPlaceholder('Login ID').fill('T4297');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('18@december');
  await page.click("//input[@id='btnsignin']");
  await page.goto('https://alcsaws.teamlease.com/GUI/Login/Home.aspx');
  await page.getByRole('link', { name: 'menu' }).click();
  await page.getByRole('link', { name: 'keyboard_arrow_down view_carousel Inputs' }).click();
  await page.getByRole('button', { name: 'Associate Master' }).click();
  await page.getByRole('link', { name: 'Salary Calculator', exact: true }).click();
  await page.getByTitle('--Select Client--').click();
  await page.getByRole('treeitem', { name: '00VMB \\ BASF India Limited' }).click();
  await page.locator('#select2-AlcsContentPlaceHolder_ddlState-container').click();
  await page.getByRole('treeitem', { name: 'Goa' }).click();
  await page.locator('#select2-AlcsContentPlaceHolder_ddlIndustryType-container').click();
  await page.getByRole('treeitem', { name: 'Pharmaceutical Industry' }).click();
  await page.getByRole('treeitem', { name: 'Aldana' }).click();
  await page.goto('http://alcsaws.teamlease.com//GUI/Associate/SalaryCalculator.aspx');
  await page.getByLabel('* Amount :').click();
  await page.getByLabel('* Amount :').fill('18000');
  // await page.goto('http://alcsaws.teamlease.com//GUI/Associate/SalaryCalculator.aspx');
  await page.pause();
});