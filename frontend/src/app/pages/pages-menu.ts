import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [

  {
    title: 'Encuesta',
    icon: 'globe-2-outline',
    link: '/encuesta/instrucciones',

  },
  {
    title: 'Administrador',
    group: true,
  },
  {
    title: 'Modulo Administrativo',
    icon: 'settings-outline',

    link:  '/admin/opciones',
    data: {'permission': 'Register Admin'},

  },
  {
    title: 'Configuración',
    icon: 'people-outline',
    data: {'permission': 'Register Admin'},
    children: [
      {
        title: 'Control de Usuarios',
        icon: 'people-outline',
        hidden: false,
        children: [
          {
            title: 'Usuarios',
            link: '/config/users',
          },
          {
            title: 'Registrar Usuarios',
            link: '/config/users/add',
          },
        ],
      },
      {
        title: 'Control de Acceso',
        icon: 'shield-outline',
        data: {'permission': 'View All Standard'},
        children: [
          {
            title: 'Ver Permisos',
            link: '/config/roles/permissions/view',
          },
          {
            title: 'Ver Roles',
            link: '/config/roles',
          },
          {
            title: 'Crear Roles',
            link: '/config/roles/add',
          },
        ],
      },
    ],
  },
];
