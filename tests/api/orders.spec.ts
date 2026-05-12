import { test, expect } from '@playwright/test';

import { AuthAPI } from '../../src/api/AuthAPI';

import { OrdersAPI } from '../../src/api/OrdersAPI';

let token: string;

let orderId: string;

test('TC_API_001 Post new book order', async ({ request }) => {

  const authAPI = new AuthAPI(request);

  const ordersAPI = new OrdersAPI(request);

  const authResponse = await authAPI.generateToken();

  token = authResponse.accessToken;

  const response = await ordersAPI.createOrder(
    token,
    1,
    'Saif'
  );

  expect(response.status()).toBe(201);

  const responseBody = await response.json();

  orderId = responseBody.orderId;

  expect(orderId).toBeTruthy();
});

test('TC_API_002 Get created order', async ({ request }) => {

  const ordersAPI = new OrdersAPI(request);

  const response = await ordersAPI.getOrder(
    token,
    orderId
  );

  expect(response.status()).toBe(200);

  const responseBody = await response.json();

  expect(responseBody.bookId).toBe(1);

  expect(responseBody.customerName).toBe('Saif');
});