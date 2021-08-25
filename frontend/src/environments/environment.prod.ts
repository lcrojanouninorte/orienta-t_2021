/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
export const environment = {
  production: true,
  baseUrl: {
    frontend: 'https://onu-mujeres.manajar.co',
    backend:  'https://onu-mujeres.manajar.co',
    api: 'https://onu-mujeres.manajar.co/api/',
  },
  oauth2: {
    token: 'https://onu-mujeres.manajar.co/oauth/token',
    base: 'https://onu-mujeres.manajar.co/api/oauth/',
    whitelist: {
      urlContains: 'token/refresh',
    },
  },
  mapBoxToken: 'pk.eyJ1IjoibGNyb2phbm8iLCJhIjoiY2pvcWR3cW5mMDN6bzN3bW80aWJxdjNpcSJ9.I5uw6wlR0_mhp4LRHwD6lg'

};
