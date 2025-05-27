import { Page } from '@playwright/test';
import { menuElements } from '../elements/MenuElements';

export class MenuPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToHome() {
    await this.page.goto('https://www.opencart.com/');
  }

  async goToFeaturesPage() {
    await this.page.click(menuElements.featuresLink);
  }
}
