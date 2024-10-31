import { useInfiniteQuery } from '@tanstack/react-query';
import { getSchoolList } from './axios';
import { GetSchoolList } from './types';

export const useGetSchoolList = ({
  searchedSchoolName,
}: Omit<GetSchoolList.Params, 'page'>) => {
  return useInfiniteQuery({
    queryKey: ['userGetSchoolList', searchedSchoolName],
    queryFn: ({ pageParam = 1 }) =>
      getSchoolList({ searchedSchoolName, page: pageParam }),
    getNextPageParam: (lastPage) =>
      lastPage.currentPage < lastPage.totalPages
        ? lastPage.currentPage + 1
        : null,
    initialPageParam: 1,
  });
};
