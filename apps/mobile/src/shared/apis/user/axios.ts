import { getAuthHeader } from '@/shared/utils/auth';
import { authClient, client } from '../client';
import type {
  GetUserExp,
  GetUserLang,
  GetUserRegion,
  GetUserSchool,
  GetUserRank,
  GetSuggestFriend,
  GetUserPageUserInfo,
  GetUserIntroduction,
  PutSchool,
} from './types';

const USER_URL = {
  GET_USER_RANK: '/userPage/rank/userRanking',
  GET_SCHOOL: '/userPage/rank/school',
  GET_REGION: '/userPage/rank/region',
  GET_LANG: '/userPage/rank/lang',
  GET_EXP: '/userPage/rank/exp',
  GET_SUGGESTED_FRIENDS: '/userPage/suggest/friend',
  GET_USER_INTRODUCTION: '/userPage/get/introduction',
  GET_USERPAGE_USERINFO: '/userPage/userInfo',

  PUT_INTRODUCTION: '/userPage/my/update/introduction',
  PUT_SCHOOL: '/userPage/my/config/school',
  PUT_REGION: '/userPage/my/config/region',

  DELETE_USER: '/auth/withdraw',
};

export const getUserRank = async (
  username: string,
): Promise<GetUserRank.Res> => {
  const response = await client.get(USER_URL.GET_USER_RANK, {
    params: {
      username,
    },
  });
  return response.data;
};

export const getUserSchool = async (
  username: string,
): Promise<GetUserSchool.Res> => {
  const response = await client.get(USER_URL.GET_SCHOOL, {
    params: {
      username,
    },
  });
  return response.data;
};

export const getUserRegion = async (
  username: string,
): Promise<GetUserRegion.Res> => {
  const response = await client.get(USER_URL.GET_REGION, {
    params: {
      username,
    },
  });
  return response.data;
};

export const getUserLang = async (
  username: string,
): Promise<GetUserLang.Res> => {
  const response = await client.get(USER_URL.GET_LANG, {
    params: {
      username,
    },
  });
  return response.data;
};

export const getUserExp = async (username: string): Promise<GetUserExp.Res> => {
  const response = await client.get(USER_URL.GET_EXP, {
    params: {
      username,
    },
  });
  return response.data;
};

export const getSuggestFriend = async (
  isLoggedIn: boolean,
): Promise<GetSuggestFriend.Res> => {
  const axiosFunction = isLoggedIn ? authClient : client;

  const response = await axiosFunction.get(USER_URL.GET_SUGGESTED_FRIENDS);
  return response.data;
};

export const getUserIntroduction = async (
  username: string,
): Promise<GetUserIntroduction.Res> => {
  const response = await client.get(USER_URL.GET_USER_INTRODUCTION, {
    params: {
      username,
    },
  });
  return response.data;
};

export const getUserPageUserInfo = async (
  username: string,
): Promise<GetUserPageUserInfo.Res> => {
  const response = await client.get(USER_URL.GET_USERPAGE_USERINFO, {
    params: {
      username,
    },
  });
  return response.data;
};

export const putRegion = async (modifyRegionName: string) => {
  await authClient.put(USER_URL.PUT_REGION, undefined, {
    params: { modifyRegionName },
  });
};

export const putUserIntroduction = async (
  introduction: GetUserIntroduction.Res,
) => {
  await authClient.put(USER_URL.PUT_INTRODUCTION, introduction);
};

export const putSchool = async ({
  modifySchoolName,
  email,
  certificateCode,
}: PutSchool.Params) => {
  await authClient.put(USER_URL.PUT_SCHOOL, {
    modifySchoolName,
    email,
    certificateCode,
  });
};

export const deleteWithdraw = async () => {
  await authClient.delete(USER_URL.DELETE_USER);
};
