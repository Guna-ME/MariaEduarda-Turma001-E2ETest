import { test, expect } from '@playwright/test';
import { HomePage } from '../support/pages/HomePage';

test('Buscar extensão no OpenCart Marketplace', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.navigateToMarketplace();
  await homePage.searchExtension('payment');

  await expect(page).toHaveURL(/filter_search=payment/);

  await expect(page.locator('#extension-list')).toBeVisible({ timeout: 15000 });
});
