import { useEffect, useMemo, useState } from 'react';
import * as Menubar from '@radix-ui/react-menubar';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { Query, useQuery } from 'react-query';
import { TableOptions } from '@tanstack/react-table';

import {
  IconSax,
  PageContent,
  PageMenu,
  Table,
} from '../../../../components';
import { useApplicationModuleByName } from '../../../../contexts/application-module';
import { MODULE_NAME } from '../../config';
import { IUser, usersApi } from '../../api/users';

const columnHelper = createColumnHelper<IUser>();

const columns: TableOptions<IUser>['columns'] = [
  columnHelper.accessor('id', {
    id: 'id',
    header: () => <span>ID</span>,
    enableHiding: true,
  }),
  columnHelper.accessor('email', {
    id: 'email',
    cell: (row) => row.getValue(),
    header: () => <span>E-mail</span>,
  }),
  columnHelper.accessor('firstName', {
    id: 'firstName',
    cell: (row) => row.getValue(),
    header: () => <span>First Name</span>,
  }),
  columnHelper.accessor('lastName', {
    id: 'lastName',
    cell: (row) => row.getValue(),
    header: () => <span>Last Name</span>,
  }),
  columnHelper.accessor('status', {
    id: 'status',
    cell: (row) => row.getValue(),
    header: () => <span>Status</span>,
  }),
  columnHelper.accessor('actions', {
    id: 'actions',
    cell: (row) => (
      <Menubar.Root>
        <Menubar.Menu>
          <Menubar.Trigger
            style={{
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'row',
              gap: 6,
            }}
          >
            Ações
            <IconSax variant="linear" name="arrow-bottom" />
          </Menubar.Trigger>
          <Menubar.Portal>
            <Menubar.Content
              align="start"
              sideOffset={5}
              alignOffset={-3}
              style={{
                backgroundColor: 'gray',
                borderRadius: 5,
                padding: 12,
              }}
            >
              <Menubar.Item
                style={{ cursor: 'pointer' }}
                onClick={() => console.log(row.row.getValue('email'))}
              >
                Ativar usuário
              </Menubar.Item>
            </Menubar.Content>
          </Menubar.Portal>
        </Menubar.Menu>
      </Menubar.Root>
    ),
    header: () => <span>Ações</span>,
  }),
];

export function DashboardPage() {
  const module = useApplicationModuleByName(MODULE_NAME);
  const [query, setQuery] = useState({
    page: 1,
    pageSize: 1,
  });

  const { status, data, error, isLoading } = useQuery<IUser[]>({
    queryKey: `users:page:${query.page}:pageSize:${query.pageSize}`,
    queryFn: () =>
      usersApi.list({
        page: query.page,
        pageSize: query.pageSize,
      }),
    initialData: [],
  });

  const table = useReactTable({
    columns,
    data: data ?? [],
    getCoreRowModel: getCoreRowModel(),
  });

  if (isLoading) return <PageContent>Carregando ...</PageContent>;

  return (
    <>
      <PageContent>
        Hello World
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    style={{ backgroundColor: 'gray', padding: 6 }}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} style={{ textAlign: 'center' }}>
                    {flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext(),
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot>
            {table.getFooterGroups().map((footerGroup) => (
              <tr key={footerGroup.id}>
                {footerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                        header.column.columnDef.footer,
                        header.getContext(),
                      )}
                  </th>
                ))}
              </tr>
            ))}
          </tfoot>
        </table>
        {query.page > 1 && (
          <button
            onClick={() =>
              setQuery((oldState) => ({
                ...oldState,
                page: oldState.page - 1,
              }))
            }
            style={{ cursor: 'pointer' }}
          >
            Old Page
          </button>
        )}
        <button
          onClick={() => setQuery((oldState) => ({ ...oldState, page: 2 }))}
          style={{ cursor: 'pointer' }}
        >
          Next Page
        </button>
        <Table></Table>
      </PageContent>
    </>
  );
}
