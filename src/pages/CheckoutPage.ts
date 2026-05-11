import { Page, expect } from '@playwright/test';

export class CheckoutPage {

  constructor(private page: Page) {}

  async fillCheckoutInfo() {

    await this.page.locator('#first-name').fill('Saif');

    await this.page.locator('#last-name').fill('Test');

    await this.page.locator('#postal-code').fill('11118');
  }

  async continueCheckout() {
    await this.page.locator('#continue').click();
  }

  async verifyItemsTotal() {

    const prices = await this.page
      .locator('.inventory_item_price')
      .allTextContents();

    let calculatedTotal = 0;

    for (const price of prices) {

      calculatedTotal += parseFloat(
        price.replace('$', '')
      );
    }

    const displayedTotalText = await this.page
      .locator('.summary_subtotal_label')
      .textContent();

    const displayedTotal = parseFloat(
      displayedTotalText!.replace('Item total: $', '')
    );

    expect(calculatedTotal).toBe(displayedTotal);
  }

  async finishOrder() {
    await this.page.locator('#finish').click();
  }

  async verifyOrderSuccess() {

    await expect(
      this.page.locator('.complete-header')
    ).toContainText('Thank you for your order!');
  }
}