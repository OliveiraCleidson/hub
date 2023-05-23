import { Link } from 'react-router-dom';

import * as S from './styles';

import { IconSaxProps } from '../iconsax/types';

export type PageMenuProps = {
  title: string;
  modulePath: string;
  menuGroups: {
    title: string;
    slug: string;
    menuItems: {
      title: string;
      path: string;
      icon: IconSaxProps;
      ariaLabel: string;
    }[];
  }[];
  menuItemWithoutGroup?: {
    title: string;
    path: string;
    icon: IconSaxProps;
    ariaLabel: string;
  }[];
};

export function PageMenu({
  menuGroups = [],
  menuItemWithoutGroup = [],
  modulePath,
  title,
}: PageMenuProps) {
  return (
    <S.Container>
      <S.Title>
        <Link to={modulePath}>{title}</Link>
      </S.Title>
      <S.Menu>
        {menuItemWithoutGroup.map((item) => (
          <li key={item.path}>
            <Link
              to={`${modulePath}${item.path}`}
              aria-label={item.ariaLabel}
            >
              <S.MenuIcon {...item.icon} />
              {item.title}
            </Link>
          </li>
        ))}
        {menuGroups.map((group) => (
          <div key={group.slug}>
            <h3>{group.title}</h3>
            {group.menuItems.map((item) => {
              return (
                <li key={item.path}>
                  <Link
                    to={`${modulePath}${item.path}`}
                    aria-label={item.ariaLabel}
                  >
                    <S.MenuIcon {...item.icon} />
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </div>
        ))}
      </S.Menu>
    </S.Container>
  );
}
