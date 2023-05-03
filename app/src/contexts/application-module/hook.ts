import { useContext } from 'react';

import { ApplicationModuleContext } from './context';

export function useApplicationModules() {
  const context = useContext(ApplicationModuleContext);
  if (!context) {
    throw new Error(
      'useApplicationModule must be used within an ApplicationModuleProvider',
    );
  }

  return context;
}

export function useApplicationModuleByName(name: string) {
  const context = useApplicationModules();
  const module = context.modules.find((m) => m.name === name);
  if (!module) {
    throw new Error(`Module ${name} not found`);
  }

  return module;
}
