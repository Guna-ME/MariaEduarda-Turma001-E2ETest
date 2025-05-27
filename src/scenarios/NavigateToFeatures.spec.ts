import { test, expect } from '@playwright/test';
import { MenuPage } from '../support/pages/MenuPage';

test('Deve acessar a página Features pelo menu principal', async ({ page }) => {
  const menuPage = new MenuPage(page);

  await menuPage.navigateToHome();
  await menuPage.goToFeaturesPage();

  await expect(page).toHaveURL(/.*route=cms\/feature/);
  await expect(
    page.getByRole('heading', { name: 'OpenCart Features' })
  ).toBeVisible();
});
