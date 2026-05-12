import { APIRequestContext } from '@playwright/test';

import { randomEmail } from '../utils/randomGenerator';

export class AuthAPI {

  constructor(private request: APIRequestContext) {}

  async generateToken() {

    const response = await this.request.post(
      'https://simple-books-api.click/api-clients/',
      {
        data: {
          clientName: 'Saif',

      
          clientEmail: randomEmail()
        }
      }
    );

    return await response.json();
  }
}