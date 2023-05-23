import { RouteObject } from 'react-router-dom';

import { DashboardPage } from './pages/dashboard/component';
import { TenantPage } from './pages/tenants/component';

import { WrapPage } from '../../components';

function routesFactory(routePrefix: string) {
  const routes: RouteObject[] = [
    {
      path: routePrefix + '/',
      element: (
        <WrapPage>
          <DashboardPage />
        </WrapPage>
      ),
    },
    {
      path: routePrefix + '/tenants',
      element: (
        <WrapPage>
          <TenantPage />
        </WrapPage>
      ),
    },
  ];

  return routes;
}

export default routesFactory;
