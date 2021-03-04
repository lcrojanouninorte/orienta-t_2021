/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
export const environment = {
  production: true,
  baseUrl: {
    frontend: 'https://obsriomagdalena.uninorte.edu.co/plataforma',
    backend: 'https://obsriomagdalena.uninorte.edu.co/plataforma',
    api: 'https://obsriomagdalena.uninorte.edu.co/plataforma/api/',
  },
  oauth2: {
    token: 'https://obsriomagdalena.uninorte.edu.co/plataforma/oauth/token',
    base: 'https://obsriomagdalena.uninorte.edu.co/plataforma/api/oauth/',
    whitelist: {
      urlContains: 'token/refresh',
    },
  },
  mapBoxToken: 'pk.eyJ1IjoibGNyb2phbm8iLCJhIjoiY2pvcWR3cW5mMDN6bzN3bW80aWJxdjNpcSJ9.I5uw6wlR0_mhp4LRHwD6lg'

};