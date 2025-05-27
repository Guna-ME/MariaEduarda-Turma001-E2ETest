import { Page } from '@playwright/test';

export class HomePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToMarketplace() {
    await this.page.goto(
      'https://www.opencart.com/index.php?route=marketplace/extension'
    );
  }

  async searchExtension(extensionName: string) {
    await this.page.waitForSelector('input[name="filter_search"]', {
      timeout: 10000
    });
    await this.page.fill('input[name="filter_search"]', extensionName);
    await this.page.press('input[name="filter_search"]', 'Enter');
  }
}
