import { useInfiniteQuery } from '@tanstack/react-query';
import { getSchoolList, getSchoolUserList } from './axios';
import { GetSchoolList, GetSchoolUserList } from './types';

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

export const useGetSchoolUserList = ({
  schoolName,
  enabled = false,
}: Omit<GetSchoolUserList.Params, 'page'> & { enabled?: boolean }) => {
  return useInfiniteQuery({
    queryKey: ['userGetSchoolUserList', schoolName],
    queryFn: ({ pageParam = 1 }) =>
      getSchoolUserList({ schoolName, page: pageParam }),
    getNextPageParam: (lastPage) =>
      lastPage.currentPage < lastPage.totalPages
        ? lastPage.currentPage + 1
        : null,
    initialPageParam: 1,
    enabled,
  });
};
