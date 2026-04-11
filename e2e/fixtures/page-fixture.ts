import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { ProductsPage } from '../pages/products-page';
import { HamburgerMenuPage } from '../pages/hamburger-menu-page';
type Pages = {
  loginPage: LoginPage;
  productsPage: ProductsPage;
  hamburgerMenuPage: HamburgerMenuPage;
};

export const test = base.extend<Pages>({
  page: async ({ page }, use) => {
    await use(page);
    await page.close();
  },
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  productsPage: async ({ page }, use) => {
    const productsPage = new ProductsPage(page);
    await use(productsPage);
  },
  hamburgerMenuPage: async ({ page }, use) => {
    const hamburgerMenuPage = new HamburgerMenuPage(page);
    await use(hamburgerMenuPage);
  }
});

export { expect } from '@playwright/test';