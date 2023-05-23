import routesFactory from './routes';

import { ApplicationModule } from '../../contexts/application-module';

const ROUTE_PREFIX = '/admin';
export const MODULE_NAME = 'admin';

export const ADMIN_MODULE_CONFIG: ApplicationModule = {
  name: MODULE_NAME,
  sideMenuNavItem: {
    ariaLabel: 'Home',
    icon: {
      variant: 'broken',
      name: 'home',
    },
    path: ROUTE_PREFIX,
    tooltipContent: 'Página Inicial',
  },
  routes: routesFactory(ROUTE_PREFIX),
  pageMenu: {
    title: 'IAM',
    menuGroups: [
      {
        title: 'Gerenciamento de empresas',
        slug: 'manager',
        menuItems: [
          {
            ariaLabel: 'Empresas',
            icon: {
              name: 'money',
              variant: 'outline',
            },
            path: '/tenants',
            title: 'Empresas',
          },
        ],
      },
    ],
    modulePath: ROUTE_PREFIX,
  },
};
