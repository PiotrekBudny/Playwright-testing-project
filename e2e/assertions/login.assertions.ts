import { expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

export class LoginAssertions {
  constructor(private readonly loginPage: LoginPage) {}

  async verifyErrorMessageDisplayed(expectedErrorMessage: string, actualErrorMessage: string) {
    expect(actualErrorMessage).toBe(expectedErrorMessage);
  }
}