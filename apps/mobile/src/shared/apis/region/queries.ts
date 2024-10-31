import { useInfiniteQuery } from '@tanstack/react-query';
import { getRegionList } from './axios';

export const useGetRegionList = ({
  regionName,
}: Omit<GetRegionList.Params, 'page'>) => {
  return useInfiniteQuery({
    queryKey: ['regionList', regionName],
    queryFn: ({ pageParam = 1 }) =>
      getRegionList({ regionName, page: pageParam }),
    getNextPageParam: (lastPage) =>
      lastPage.currentPage < lastPage.totalPages
        ? lastPage.currentPage + 1
        : null,
    initialPageParam: 1,
  });
};
