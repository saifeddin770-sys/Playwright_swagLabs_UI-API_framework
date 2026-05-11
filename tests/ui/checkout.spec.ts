import { test } from '@playwright/test';

import { LoginPage } from '../../src/pages/LoginPage';

import { ProductsPage } from '../../src/pages/ProductsPage';

import { CartPage } from '../../src/pages/CartPage';

import { CheckoutPage } from '../../src/pages/CheckoutPage';

test('TC_UI_003 End-to-End Checkout Flow', async ({ page }) => {

  const loginPage = new LoginPage(page);

  const productsPage = new ProductsPage(page);

  const cartPage = new CartPage(page);

  const checkoutPage = new CheckoutPage(page);

  await loginPage.navigate();

  await loginPage.login(
    'standard_user',
    'secret_sauce'
  );

  await loginPage.verifyLoginSuccess();

  await productsPage.addTwoMostExpensiveProducts();

  await productsPage.openCart();

  await cartPage.proceedToCheckout();

  await checkoutPage.fillCheckoutInfo();

  await checkoutPage.continueCheckout();

  await checkoutPage.verifyItemsTotal();

  await checkoutPage.finishOrder();

  await checkoutPage.verifyOrderSuccess();
});