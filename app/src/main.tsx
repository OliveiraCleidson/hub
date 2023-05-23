import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import * as Tooltip from '@radix-ui/react-tooltip';

import { defaultTheme } from './styles/index.ts';
import { ApplicationModuleProvider } from './contexts/application-module/index.ts';
import { IAM_MODULE_CONFIG } from './modules/iam/config.ts';
import { ADMIN_MODULE_CONFIG } from './modules/admin/config.ts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <Tooltip.Provider delayDuration={200} skipDelayDuration={500}>
        <ApplicationModuleProvider
          modules={[ADMIN_MODULE_CONFIG, IAM_MODULE_CONFIG]}
        />
      </Tooltip.Provider>
    </ThemeProvider>
  </React.StrictMode>,
);
