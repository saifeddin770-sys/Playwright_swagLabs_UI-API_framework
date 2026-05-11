import { Page, expect, Locator } from '@playwright/test';

export class LoginPage {

  private page: Page;

  username: Locator;
  password: Locator;
  loginButton: Locator;
  errorMessage: Locator;

  constructor(page: Page) {

    this.page = page;

    this.username = this.page.locator('#user-name');

    this.password = this.page.locator('#password');

    this.loginButton = this.page.locator('#login-button');

    this.errorMessage = this.page.locator('[data-test="error"]');
  }

  async navigate() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username: string, password: string) {

    await this.username.fill(username);

    await this.password.fill(password);

    await this.loginButton.click();
  }

  async verifyLoginSuccess() {
    await expect(this.page).toHaveURL(/inventory/);
  }

  async verifyError(message: string) {
    await expect(this.errorMessage).toContainText(message);
  }
}