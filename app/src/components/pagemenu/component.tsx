import { Link } from 'react-router-dom';

import * as S from './styles';

import { IconSaxProps } from '../iconsax/types';

export type PageMenuProps = {
  title: string;
  modulePath: string;
  menuItems: {
    title: string;
    path: string;
    icon: IconSaxProps;
    ariaLabel: string;
  }[];
};

export function PageMenu({ menuItems, modulePath, title }: PageMenuProps) {
  return (
    <S.Container>
      <S.Title>
        <Link to={modulePath}>{title}</Link>
      </S.Title>
      <S.Menu>
        {menuItems.map((item) => {
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
      </S.Menu>
    </S.Container>
  );
}
