import styled, { css } from 'styled-components';

import { IconSax } from '../iconsax';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 200px;
    box-sizing: border-box;
    border-right: 1px solid ${theme.colors.light.brand.neutral.lowContrast};
    padding: 12px 4px;
    overflow: hidden;
    background: rgb(255, 255, 255);
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: 1.5rem;
    border-bottom: 1px solid ${theme.colors.light.brand.neutral.lowContrast};
    padding-bottom: 12px;
    font-weight: 700;
  `}
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  list-style: none;
  margin-top: 24px;
  font-size: 1.05rem;
  letter-spacing: 0.5px;

  li,
  li a {
    align-items: start;
    display: flex;
    gap: 6px;
    cursor: pointer;

    &:hover {
      opacity: 0.6;
    }
  }
`;

export const MenuIcon = styled(IconSax)`
  ${({ theme }) => css`
    width: 20px;
    height: auto;
    color: ${theme.colors.light.brand.neutral.highContrast};
  `}
`;
