import { type Page, type Locator } from '@playwright/test';

export class HamburgerMenuPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators
  get openHamburgerMenuButton(): Locator { return this.page.getByRole('button', { name: 'Open Menu' }); }
  get logoutMenuButton(): Locator { return this.page.locator('[data-test="logout-sidebar-link"]'); }

  async logoutFromWebsite() {
    await this.openHamburgerMenuButton.click();
    await this.logoutMenuButton.click();
  }

}
