import InlineSVG from 'react-inlinesvg';

import { IconSaxProps } from './types';

const path = '/assets/icons';

/**
 * https://iconsax.io/
 */
export function IconSax({
  name,
  variant = 'outline',
  ...rest
}: IconSaxProps) {
  return <InlineSVG src={`${path}/${variant}/${name}.svg`} {...rest} />;
}
