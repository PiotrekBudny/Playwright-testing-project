import { expect } from '@playwright/test';
import { LoginPage } from '../pages/login-page';

export class LoginAssertions {
  constructor(private readonly loginPage: LoginPage) { }

  async verifyErrorMessageDisplayed(expectedErrorMessage: string) {
    let actualErrorMessage = await this.loginPage.getErrorMessage();
    expect(actualErrorMessage).toBe(expectedErrorMessage);
  }

  async verifyIfLoginFormIsDisplayed() {
    await expect(this.loginPage.usernameInput).toBeVisible();
    await expect(this.loginPage.passwordInput).toBeVisible();
    await expect(this.loginPage.loginButton).toBeVisible();
    await expect(this.loginPage.loginButton).toBeEnabled();
  }
}