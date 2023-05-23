import styled from 'styled-components';

const Container = styled.div`
  padding-left: 6px;
  display: flex;
  flex-direction: column;
`;

export function PageContent({ children }: { children: React.ReactNode }) {
  return <Container>{children}</Container>;
}
