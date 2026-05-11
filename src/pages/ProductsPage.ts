import { Page } from '@playwright/test';

export class ProductsPage {

  constructor(private page: Page) {}

  async addTwoMostExpensiveProducts() {

    const products = await this.page.locator('.inventory_item').all();

    let prices: any[] = [];

    for (const product of products) {

      const priceText = await product
        .locator('.inventory_item_price')
        .textContent();

      const price = parseFloat(priceText!.replace('$', ''));

      prices.push({
        product,
        price
      });
    }

    prices.sort((a, b) => b.price - a.price);

    await prices[0].product.locator('button').click();

    await prices[1].product.locator('button').click();
  }

  async openCart() {
    await this.page.locator('.shopping_cart_link').click();
  }
}