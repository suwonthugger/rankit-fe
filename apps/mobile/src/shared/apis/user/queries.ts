import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  getUserExp,
  getUserLang,
  getUserRegion,
  getUserSchool,
  getUserRank,
  getSuggestFriend,
  getUserPageUserInfo,
  putSchool,
  putRegion,
  deleteWithdraw,
  putUserIntroduction,
  getUserIntroduction,
} from './axios';
import {
  GetUserExp,
  GetUserLang,
  GetUserRegion,
  GetUserRank,
  GetUserPageUserInfo,
  GetUserIntroduction,
  PutSchool,
} from './types';

export const useGetUserRank = ({ username }: GetUserRank.Params) => {
  return useQuery({
    queryKey: ['user', 'userRank', username],
    queryFn: () => getUserRank(username),
  });
};

export const useGetUserSchool = ({ username }: GetUserRank.Params) => {
  return useQuery({
    queryKey: ['user', 'userSchool', username],
    queryFn: () => getUserSchool(username),
  });
};

export const useGetUserRegion = ({ username }: GetUserRegion.Params) => {
  return useQuery({
    queryKey: ['user', 'userRegion', username],
    queryFn: () => getUserRegion(username),
  });
};

export const useGetUserLang = ({ username }: GetUserLang.Params) => {
  return useQuery({
    queryKey: ['user', 'userLang', username],
    queryFn: () => getUserLang(username),
  });
};

export const useGetUserExp = ({ username }: GetUserExp.Params) => {
  return useQuery({
    queryKey: ['user', 'userExp', username],
    queryFn: () => getUserExp(username),
  });
};

export const useGetSuggestFriend = (isLoggedIn: boolean) => {
  return useQuery({
    queryKey: ['user', 'suggestFriend', isLoggedIn],
    queryFn: () => getSuggestFriend(isLoggedIn),
  });
};

export const useGetUserIntroduction = ({
  username,
}: GetUserIntroduction.Params) => {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: ['user', 'introduction', username],
    queryFn: () => getUserIntroduction(username),
  });
};

export const useGetUserPageUserInfo = ({
  username,
}: GetUserPageUserInfo.Params) => {
  return useQuery({
    queryKey: ['user', 'userInfo', username],
    queryFn: () => getUserPageUserInfo(username),
  });
};

export const usePutIntroduction = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (introduction: GetUserIntroduction.Res) =>
      putUserIntroduction(introduction),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user', 'introduction'] });
    },
    onError: () => {
      alert('소개 변경에 실패했습니다.');
    },
  });
};

export const usePutSchool = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      modifySchoolName,
      email,
      certificateCode,
    }: PutSchool.Params) =>
      putSchool({
        modifySchoolName,
        email,
        certificateCode,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userInfo'] });
    },
    onError: () => {
      alert('학교 변경에 실패했습니다.');
    },
  });
};

export const usePutRegion = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (modifyRegionName: string) => putRegion(modifyRegionName),
    onSuccess: () => {
      alert('지역이 변경되었습니다.');
      queryClient.invalidateQueries({ queryKey: ['userInfo'] });
    },
    onError: () => {
      alert('지역 변경에 실패했습니다.');
    },
  });
};

export const useDeleteWithdraw = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => deleteWithdraw(),
    onSuccess: () => {
      alert('회원 탈퇴가 완료되었습니다.');
      queryClient.invalidateQueries({ queryKey: ['userInfo'] });
    },
    onError: () => {
      alert('회원 탈퇴에 실패했습니다.');
    },
  });
};
