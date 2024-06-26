import { test, expect } from '@playwright/test';
test.describe.configure({ mode: 'parallel' });
test.use({ headless: false });
test('commercial setup', async  ({ page }) => {
  await page.goto('https://alcsaws.teamlease.com/GUI/Login/Login.aspx');
  await page.getByPlaceholder('Login ID').click();
  await page.getByPlaceholder('Login ID').fill('T4297');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('18@december');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('link', { name: 'menu' }).click();
  await page.getByRole('link', { name: 'keyboard_arrow_down account_circle Master' }).click();
  await page.getByRole('button', { name: 'Client' }).click();
  await page.getByRole('button', { name: 'Regulatory Setup' }).click();
  await page.getByRole('link', { name: 'Commercial Setup', exact: true }).click();
  await page.getByRole('cell', { name: 'Client' }).locator('label').click();
  await page.getByTitle('-- Select Client --').click();
  await page.getByRole('treeitem', { name: '05FMB / Societe' }).click();
  await page.getByTitle('-- Select Category --').click();
  await page.getByRole('treeitem', { name: 'Payroll', exact: true }).click();
  await page.getByTitle('-- Select Type --').click();
  await page.getByRole('treeitem', { name: 'Fixed Per Employee', exact: true }).click();
  const name= page.getByLabel('Name *');
  await name.focus();await name.fill('werty');
  await page.getByLabel('Description *').fill('zxcvvb');
  await page.getByLabel('* Amount').click();
  await page.getByLabel('* Amount').fill('20000');
  await page.getByLabel('Effective To Date *').click();
  await page.getByTitle('Friday, July 05,').click();
  await page.locator('#select2-AlcsContentPlaceHolder_ddlsetupfeetype-container').click();
  await page.getByRole('treeitem', { name: 'Fixed per Associate' }).click();
  await page.locator('#AlcsContentPlaceHolder_txtsetupfee').click();
  await page.locator('#AlcsContentPlaceHolder_txtsetupfee').fill('200');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByLabel('Name *').click();
  await page.getByLabel('Name *').fill('ertyu');
  await page.getByLabel('Description *').click();
  await page.getByLabel('Description *').fill('erttyy');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.waitForTimeout(5000);
  const scs = page.getByText('Success! Commercial Setup created successfully. Ok');
  await expect(scs).toBeVisible();
  if (await scs.isVisible) {
    console.log('oky')
  } else {
    console.log('failed')
  }
   await page.screenshot({ path: 'SS.png' });

});