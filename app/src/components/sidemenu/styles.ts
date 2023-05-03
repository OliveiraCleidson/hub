import styled, { css } from 'styled-components';

import { IconSax } from '../iconsax';

export const Container = styled.div`
  ${({ theme }) => css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    width: 70px;
    padding: 12px;
    background-color: ${theme.colors.light.brand.neutral.pure};
    color: ${theme.colors.light.brand.primary.pure};
  `}
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 6px;

  ul {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;

export const NavItem = styled.div<{ isCurrentPath?: boolean }>`
  ${({ theme, isCurrentPath }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    box-sizing: border-box;
    ${isCurrentPath &&
    css`
      background-color: ${theme.colors.light.brand.secondary.pure};
    `}
  `}
`;

export const LogoImg = styled.img.attrs({
  src: '/assets/images/logo.png',
  alt: 'Logo',
})`
  width: 100%;
`;

export const Icon = styled(IconSax)<{ isCurrentPath?: boolean }>`
  ${({ theme, isCurrentPath }) => css`
    color: ${isCurrentPath
      ? theme.colors.light.brand.neutral.pure
      : theme.colors.light.brand.secondary.pure};
    width: 40px;
    height: 40px;
    align-self: center;

    &:hover {
      opacity: 0.6;
    }
  `}
`;
