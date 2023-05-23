import styled, { css } from 'styled-components';

export const Container = styled.table`
  ${({ theme }) => css`
    border-box: box-sizing;
    text-align: left;
    color: ${theme.colors.light.brand.neutral.pure};

    th,
    td {
      padding: 6px 6px;
      border-left: 1px solid ${theme.colors.light.brand.neutral.lowContrast};

      &:first-child {
        border-left: 0;
      }
    }

    thead {
      th {
        background-color: ${theme.colors.light.brand.neutral.pure};
        color: ${theme.colors.light.brand.neutral.lowContrast};

        &:first-child {
          border-radius: 6px 0px 0px 6px;
        }

        &:last-child {
          border-radius: 0px 6px 6px 0px;
        }
      }
    }

    tbody {
      td {
        border-bottom: 1px solid
          ${theme.colors.light.brand.neutral.lowContrast};
      }

      tr {
        transition: background-color 0.2s ease-in-out;
        background-color: transparent;

        &:nth-child(even) {
          background-color: ${theme.colors.light.brand.primary.light};
        }

        &:hover {
          background-color: ${theme.colors.light.brand.primary.dark};
          color: ${theme.colors.light.brand.neutral.lowContrast};
          transition: background-color 0.2s ease-in-out;
        }
      }
    }
  `}
`;
