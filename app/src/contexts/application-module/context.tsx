import { createContext } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { ApplicationModuleContextProps } from './types';

// import { WrapPage } from '../../components';
// import { DashboardPage } from '../../pages';

// const dashBkp = [
//   {
//     path: '/',
//     element: (
//       <WrapPage>
//         <DashboardPage />
//       </WrapPage>
//     ),
//   },
// ];

export const ApplicationModuleContext =
  createContext<ApplicationModuleContextProps>({ modules: [] });

export function ApplicationModuleProvider(
  props: ApplicationModuleContextProps,
) {
  return (
    <ApplicationModuleContext.Provider value={props}>
      <RouterProvider
        router={createBrowserRouter(
          props.modules.map((m) => m.routes).flat(),
        )}
      />
    </ApplicationModuleContext.Provider>
  );
}
