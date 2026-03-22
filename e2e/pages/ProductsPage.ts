import { type Page, type Locator } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators
  get pageTitle(): Locator { return this.page.locator('[data-test="title"]'); }
  get inventoryList(): Locator { return this.page.locator('[data-test="inventory-list"]'); }
  get inventoryItems(): Locator { return this.page.locator('[data-test="inventory-item"]'); }
  get sortDropdown(): Locator { return this.page.locator('[data-test="product-sort-container"]'); }
  get cartIcon(): Locator { return this.page.locator('[data-test="shopping-cart-link"]'); }
  get cartBadge(): Locator { return this.page.locator('.shopping_cart_badge'); }
  get burgerMenuButton(): Locator { return this.page.locator('#react-burger-menu-btn'); }

  // Dynamic locators
  getItemByName(name: string): Locator {
    return this.inventoryItems.filter({
      has: this.page.locator(`[data-test="inventory-item-name"]:text("${name}")`)
    });
  }

  getItemPrice(name: string): Locator {
    return this.getItemByName(name).locator('[data-test="inventory-item-price"]');
  }

  getAddToCartButton(productSlug: string): Locator {
    return this.page.locator(`[data-test="add-to-cart-${productSlug}"]`);
  }

  getRemoveButton(productSlug: string): Locator {
    return this.page.locator(`[data-test="remove-${productSlug}"]`);
  }

  // Actions
  async sortBy(option: 'Name (A to Z)' | 'Name (Z to A)' | 'Price (low to high)' | 'Price (high to low)') {
    await this.sortDropdown.selectOption(option);
  }

  async addToCart(productSlug: string) {
    await this.getAddToCartButton(productSlug).click();
  }

  async removeFromCart(productSlug: string) {
    await this.getRemoveButton(productSlug).click();
  }

  async goToCart() {
    await this.cartIcon.click();
  }

  async getCartCount(): Promise<number> {
    const badge = this.cartBadge;
    if (await badge.isVisible()) {
      return parseInt((await badge.textContent()) ?? '0', 10);
    }
    return 0;
  }

  async getProductNames(): Promise<string[]> {
    return this.inventoryItems
      .locator('[data-test="inventory-item-name"]')
      .allTextContents();
  }

  async getProductCount(): Promise<number> {
    return this.inventoryItems.count();
  }
}
