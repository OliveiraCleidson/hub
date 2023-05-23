import routesFactory from './routes';

import { ApplicationModule } from '../../contexts/application-module';

const ROUTE_PREFIX = '/iam';
export const MODULE_NAME = 'iam';

export const IAM_MODULE_CONFIG: ApplicationModule = {
  name: MODULE_NAME,
  sideMenuNavItem: {
    ariaLabel: 'Identity and Access Management',
    icon: {
      variant: 'broken',
      name: 'user-octagon',
    },
    path: '/iam',
    tooltipContent: 'IAM',
  },
  routes: routesFactory(ROUTE_PREFIX),
  pageMenu: {
    title: 'IAM',
    menuGroups: [
      {
        title: 'Users',
        slug: 'users',
        menuItems: [
          {
            ariaLabel: 'Users',
            icon: {
              name: 'user-square',
              variant: 'outline',
            },
            path: '/users',
            title: 'Usuários',
          },
        ],
      },
      {
        title: 'Gerenciamento de Empresas',
        slug: 'company-management',
        menuItems: [
          {
            ariaLabel: 'Contas',
            icon: {
              name: 'briefcase',
              variant: 'outline',
            },
            path: '/accounts',
            title: 'Contas',
          },
          {
            ariaLabel: 'Contratos',
            icon: {
              name: 'wallet-money',
              variant: 'outline',
            },
            path: '/contracts',
            title: 'Contratos',
          },
        ],
      },
      {
        title: 'Gerenciamento do Sistema',
        slug: 'system-management',
        menuItems: [
          {
            ariaLabel: 'Grupos de Recursos',
            icon: {
              name: '3d-square',
              variant: 'outline',
            },
            path: '/resource-groups',
            title: 'Grupos de Recursos',
          },
        ],
      },
    ],
    modulePath: ROUTE_PREFIX,
  },
};
