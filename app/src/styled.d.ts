/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';
import { ApplicationTheme } from './styles/theme/types';

declare module 'styled-components' {
  export interface DefaultTheme extends ApplicationTheme {}
}
