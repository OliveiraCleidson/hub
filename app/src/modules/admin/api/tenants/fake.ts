import { TenantApi, TenantEntity } from './types';

import {
  GetPageable,
  PaginationResult,
} from '../../../../shared/api.types';
import { pause } from '../../../../shared/utils/pause';

const tenants: TenantEntity[] = [
  {
    id: '1',
    name: 'Empresa 1',
    subdomain: 'empresa1',
  },
  {
    id: '2',
    name: 'Empresa 2',
    subdomain: 'empresa2',
  },
];

export class FakeTenantApi implements TenantApi {
  async list({
    page = 1,
    size = 10,
  }: GetPageable): Promise<PaginationResult<TenantEntity>> {
    await pause(1e3);
    return {
      content: tenants.slice(options?.page, options?.size),
      metadata: {
        page: options?.page ?? 1,
        size: options?.size ?? 10,
        totalElements: tenants.length,
        totalPages: Math.ceil(tenants.length / (options?.size ?? 10)),
      },
    };
  }
}
