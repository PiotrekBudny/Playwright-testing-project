import { expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

export class LoginAssertions {
  constructor(private readonly loginPage: LoginPage) {}

  async verifyErrorMessageDisplayed(expectedErrorMessage: string) {
    let actualErrorMessage = await this.loginPage.getErrorMessage();
    expect(actualErrorMessage).toBe(expectedErrorMessage);
  }
}