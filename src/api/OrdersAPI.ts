import { APIRequestContext } from '@playwright/test';

export class OrdersAPI {

  constructor(private request: APIRequestContext) {}

  async createOrder(
    token: string,
    bookId: number,
    customerName: string
  ) {

    return await this.request.post(
      'https://simple-books-api.click/orders',
      {
        headers: {
          Authorization: `Bearer ${token}`
        },

        data: {
          bookId,
          customerName
        }
      }
    );
  }

  async getOrder(
    token: string,
    orderId: string
  ) {

    return await this.request.get(
      `https://simple-books-api.click/orders/${orderId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
  }
}