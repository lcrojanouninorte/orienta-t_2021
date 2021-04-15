/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
export const environment = {
  production: true,
  baseUrl: {
    frontend: 'https://onu-mujeres.lcrojano.com',
    backend:  'https://onu-mujeres.lcrojano.com',
    api: 'https://onu-mujeres.lcrojano.com/api/',
  },
  oauth2: {
    token: 'https://onu-mujeres.lcrojano.com/oauth/token',
    base: 'https://onu-mujeres.lcrojano.com/api/oauth/',
    whitelist: {
      urlContains: 'token/refresh',
    },
  },
  mapBoxToken: 'pk.eyJ1IjoibGNyb2phbm8iLCJhIjoiY2pvcWR3cW5mMDN6bzN3bW80aWJxdjNpcSJ9.I5uw6wlR0_mhp4LRHwD6lg'

};
