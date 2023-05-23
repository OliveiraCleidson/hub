import {
  GetPageable,
  PaginationResult,
} from '../../../../shared/api.types';

export type TenantEntity = {
  id: string;
  name: string;
  subdomain: string;
};

export type TenantApi = {
  list(options?: GetPageable): Promise<PaginationResult<TenantEntity>>;
};
