import { Link } from 'react-router-dom';

import * as S from './styles';

import { Tooltip } from '../tooltip/component';
import { IconSaxProps } from '../iconsax/types';

export type SideMenuProps = {
  navigationItems: {
    path: string;
    icon: IconSaxProps;
    ariaLabel: string;
    tooltipContent: string;
  }[];
};

export function Sidemenu({ navigationItems }: SideMenuProps) {
  const currentPath = window.location.pathname.split('/')[1];

  return (
    <S.Container>
      <div>
        <Tooltip content="Owl Teq">
          <S.LogoImg />
        </Tooltip>
      </div>
      <S.Navigation>
        <ul aria-label="Menu de Opções de Navegação">
          {navigationItems.map(
            ({ ariaLabel, icon, path, tooltipContent }) => (
              <S.NavItem isCurrentPath={path.includes(currentPath)}>
                <Link to={path} aria-label={ariaLabel} key={path}>
                  <Tooltip content={tooltipContent} key={path}>
                    <li aria-label={ariaLabel} key={path}>
                      <S.Icon
                        isCurrentPath={path.includes(currentPath)}
                        {...icon}
                      />
                    </li>
                  </Tooltip>
                </Link>
              </S.NavItem>
            ),
          )}
        </ul>
      </S.Navigation>
      <div>
        <a href="#">Sign Out </a>
      </div>
    </S.Container>
  );
}
