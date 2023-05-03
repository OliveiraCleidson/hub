import styled from 'styled-components';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import { PageContent, PageMenu } from '../../../../components';
import { useApplicationModuleByName } from '../../../../contexts/application-module';
import { MODULE_NAME } from '../../config';

const Column = styled.div`
  width: 200px;
  height: 100vh;
  background: rgba(0, 0, 0, 0.1);
`;

const ColumnTitle = styled.h1`
  font-size: 1.5rem;
  border-bottom: 1px solid grey;
`;

const ColumnListItems = styled(Droppable)`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

const Card = styled.div`
  width: 100%;
  height: 100px;
  background: rgba(0, 0, 0, 0.2);
`;

const initialData = {
  tasks: {
    task1: { id: 'task1', content: 'Take out the garbage' },
    task2: { id: 'task2', content: 'Watch my favorite show' },
    task3: { id: 'task3', content: 'Charge my phone' },
  },
  columns: {
    column1: {
      id: 'column1',
      title: 'Column 1',
      taskIds: ['task3'],
    },
    column2: {
      id: 'column2',
      title: 'Column 2',
      taskIds: ['task1', 'task2'],
    },
  },
};

export function DashboardPage() {
  const module = useApplicationModuleByName(MODULE_NAME);

  const onDragEnd = result => {

  }

  return (
    <>
      <PageContent>
        <DragDropContext
          onDragStart={}
          onDragUpdate={}
          onDragEnd={}
        >
          <div
            style={{ display: 'flex', flexDirection: 'row', gap: '22px' }}
          >
            {initialData.columns.map((column, index) => (
              <Column>
                <ColumnTitle>{column.}</ColumnTitle>
              </Column>
            )
            )}
            <Column>
              <ColumnTitle>Column 1</ColumnTitle>
              <ColumnListItems >
                <Card draggable>Meu Card</Card>
              </ColumnListItems>
            </Column>

            <Column>
              <ColumnTitle>Column 2</ColumnTitle>
              <ColumnListItems onDragCapture={(e) => e.currentTarget.chil}>
                <Card draggable>Meu Card</Card>
              </ColumnListItems>
            </Column>

            <Column>
              <ColumnTitle>Column 3</ColumnTitle>
              <ColumnListItems>
                <Card draggable>Meu Card</Card>
              </ColumnListItems>
            </Column>
          </div>
        </DragDropContext>
      </PageContent>
    </>
  );
}
