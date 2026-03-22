import { type Page, type Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
 
  constructor(page: Page) {
    this.page = page;
  }

  // Locators
  get usernameInput(): Locator { return this.page.locator('[data-test="username"]'); }
  get passwordInput(): Locator { return this.page.locator('[data-test="password"]'); }
  get loginButton(): Locator { return this.page.locator('[data-test="login-button"]'); }
  get errorMessage(): Locator { return this.page.locator('[data-test="error"]'); }

  async goto() {
    await this.page.goto(process.env.BASE_URL!);
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async getErrorMessage(): Promise<string> {
    return (await this.errorMessage.textContent()) ?? '';
  }

  async isErrorVisible(): Promise<boolean> {
    return this.errorMessage.isVisible();
  }
}
