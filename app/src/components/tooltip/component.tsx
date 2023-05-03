import React from 'react';
import * as LibTooltip from '@radix-ui/react-tooltip';
import styled, { useTheme } from 'styled-components';

type TooltipProps = {
  content: React.ReactNode | string;
  children: React.ReactNode;
  defaultOpen?: boolean;
};

const TooltipContent = styled(LibTooltip.Content)`
  ${({ theme }) => `
    background-color: ${theme.colors.light.brand.neutral.highContrast};
    color: ${theme.colors.light.brand.primary.dark};
    border-radius: 4px;
    padding: 10px 15px;
    font-size: 15px;
    line-height: 1;
    color: var(--violet11);
    box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
    user-select: none;
    animation-duration: 400ms;
    animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
    will-change: transform, opacity;
  `}
`;

export function Tooltip({
  children,
  defaultOpen = false,
  content,
}: TooltipProps) {
  const {
    colors: {
      light: {
        brand: {
          neutral: { highContrast },
        },
      },
    },
  } = useTheme();
  return (
    <LibTooltip.Root defaultOpen={defaultOpen}>
      <LibTooltip.Trigger>{children}</LibTooltip.Trigger>
      <TooltipContent side="right" align="start">
        {content}
        <LibTooltip.Arrow fill={highContrast} />
      </TooltipContent>
    </LibTooltip.Root>
  );
}
