import { RouteObject } from 'react-router-dom';

import { DashboardPage } from './pages/dashboard/component';

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
  ];

  return routes;
}

export default routesFactory;
