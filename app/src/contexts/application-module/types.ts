import { RouteObject } from 'react-router-dom';

import { PageMenuProps, SideMenuProps } from '../../components';

export type ApplicationModuleContextProps = {
  modules: ApplicationModule[];
};

export type ApplicationModule = {
  name: string;
  sideMenuNavItem: SideMenuProps['navigationItems'][number];
  pageMenu?: PageMenuProps;
  routes: RouteObject[];
};
