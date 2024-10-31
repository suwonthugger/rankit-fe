import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { getUserGradeList, getUserList } from './axios';
import { GetUserGradeList, GetUserList } from './types';

export const useGetUserList = ({ page, searchedname }: GetUserList.Params) => {
  return useQuery({
    queryKey: ['userList', page, searchedname],
    queryFn: () => getUserList({ page, searchedname }),
    enabled: searchedname ? searchedname.length > 0 : false,
  });
};

export const useGetUserGradeList = ({
  grade,
}: Omit<GetUserGradeList.Params, 'page'>) => {
  return useInfiniteQuery({
    queryKey: ['userGradeList', grade],
    queryFn: ({ pageParam = 1 }) =>
      getUserGradeList({ grade, page: pageParam }),
    getNextPageParam: (lastPage) =>
      lastPage.currentPage < lastPage.totalPages
        ? lastPage.currentPage + 1
        : null,
    initialPageParam: 1,
  });
};
