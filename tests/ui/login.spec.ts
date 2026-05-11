import { test } from '@playwright/test';

import { LoginPage } from '../../src/pages/LoginPage';

import loginData from '../../src/test-data/loginData.json';


test('TC_UI_001 Valid Login', async ({ page }) => {

  const login = new LoginPage(page);

  await login.navigate();

  await login.login(
    loginData.validUser.username,
    loginData.validUser.password
  );

  await login.verifyLoginSuccess();
});


for (const invalidUser of loginData.invalidUsers) {

  test(`TC_UI_002 Invalid Login - ${invalidUser.error}`, async ({ page }) => {

    const login = new LoginPage(page);

    await login.navigate();

    await login.login(
      invalidUser.username,
      invalidUser.password
    );

    await login.verifyError(
      invalidUser.error
    );
  });
}