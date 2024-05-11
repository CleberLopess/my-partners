export type PaginationProps = {
  className?: string;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};
