export type GetPageable = {
  page?: number;
  size?: number;
};

export type PaginationResult<T> = {
  content: T[];
  metadata: {
    page: number;
    totalPages: number;
    totalElements: number;
    size: number;
  };
};
