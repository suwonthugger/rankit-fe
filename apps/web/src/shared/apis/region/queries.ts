import { useInfiniteQuery } from '@tanstack/react-query';
import { getRegionList, getRegionUserList } from './axios';
import { GetRegionList, GetRegionUserList } from './types';

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

interface UseGetRegionUserListProps {
  regionName: string;
  enabled?: boolean;
}

export const useGetRegionUserList = ({
  regionName,
  enabled = false,
}: UseGetRegionUserListProps) => {
  return useInfiniteQuery({
    queryKey: ['regionUserList', regionName],
    queryFn: ({ pageParam = 1 }) =>
      getRegionUserList({ regionName, page: pageParam }),
    getNextPageParam: (lastPage) =>
      lastPage.currentPage < lastPage.totalPages
        ? lastPage.currentPage + 1
        : null,
    initialPageParam: 1,
    enabled,
  });
};
