import { PageContent, PageMenu } from '../../../../components';
import { useApplicationModuleByName } from '../../../../contexts/application-module';
import { MODULE_NAME } from '../../config';

export function DashboardPage() {
  const module = useApplicationModuleByName(MODULE_NAME);

  return (
    <>
      <PageContent>Hello World</PageContent>;
    </>
  );
}
