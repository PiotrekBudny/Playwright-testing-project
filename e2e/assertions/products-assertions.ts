import { expect } from '@playwright/test';
import { ProductsPage } from '../pages/products-page';

export class ProductsAssertions {
  constructor(private readonly productsPage: ProductsPage) {}

  async pageIsLoaded(expectedTitle: string) {
    await expect(this.productsPage.pageTitle).toHaveText(expectedTitle);
  }
}