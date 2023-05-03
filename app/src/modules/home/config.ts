import routesFactory from './routes';

import { ApplicationModule } from '../../contexts/application-module';

const ROUTE_PREFIX = '/home';
export const MODULE_NAME = 'home';

export const HOME_MODULE_CONFIG: ApplicationModule = {
  name: MODULE_NAME,
  sideMenuNavItem: {
    ariaLabel: 'Página Inicial',
    icon: {
      variant: 'broken',
      name: 'home',
    },
    path: ROUTE_PREFIX,
    tooltipContent: 'Home',
  },
  routes: routesFactory(ROUTE_PREFIX),
  pageMenu: {
    title: 'Home',
    menuItems: [
      {
        ariaLabel: 'Dashboard',
        icon: {
          name: 'graph',
          variant: 'outline',
        },
        path: '/graph',
        title: 'Gráficos',
      },
    ],
    modulePath: ROUTE_PREFIX,
  },
};
