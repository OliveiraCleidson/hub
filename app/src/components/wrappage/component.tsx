import styled from 'styled-components';

import { PageMenu, Sidemenu } from '..';
import { useApplicationModules } from '../../contexts/application-module';

const Container = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: row;
`;

export function WrapPage({ children }: { children: React.ReactNode }) {
  const { modules } = useApplicationModules();
  const currentModulePath = window.location.pathname.split('/')[1];
  const currentModule = modules.find((m) => m.name === currentModulePath);

  return (
    <Container>
      <Sidemenu navigationItems={modules.map((m) => m.sideMenuNavItem)} />
      {currentModule?.pageMenu && (
        <PageMenu key={currentModule.name} {...currentModule.pageMenu} />
      )}
      {children}
    </Container>
  );
}
