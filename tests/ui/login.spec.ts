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

for (const data of loginData.invalidUsers) {

  test(`Invalid Login - ${data.error}`, async ({ page }) => {

    const login = new LoginPage(page);

    await login.navigate();

    await login.login(data.username, data.password);

    await login.verifyError(data.error);
  });
}