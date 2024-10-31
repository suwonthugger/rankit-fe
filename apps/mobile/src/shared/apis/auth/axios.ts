import { authClient, client } from '../client';
import {
  GetUserInfo,
  PostAuthJoin,
  PostUnivCertificate,
  PostUnivValidate,
} from './types';

const AUTH_URL = {
  GET_SCHOOL_LIST: '/info/schoolNames',
  GET_REGION_LIST: '/info/regionNames',
  GET_USER_INFO: '/auth/userInfo',

  POST_UNIV_CERTIFICATE: '/univ/certificate',
  POST_UNIV_VALIDATE: '/univ/validate',
  POST_AUTH_JOIN: '/auth/join',
};

export const getSchoolNames = async () => {
  const response = await client.get(AUTH_URL.GET_SCHOOL_LIST);
  return response.data;
};

export const getRegionNames = async () => {
  const response = await client.get(AUTH_URL.GET_REGION_LIST);
  return response.data;
};

export const postUnivCertificate = async ({
  email,
  univName,
}: PostUnivCertificate.Params) => {
  await client.post(AUTH_URL.POST_UNIV_CERTIFICATE, { email, univName });
};

export const postUnivValidate = async ({
  email,
  univName,
  code,
}: PostUnivValidate.Params) => {
  await client.post(AUTH_URL.POST_UNIV_VALIDATE, { email, univName, code });
};

export const postAuthJoin = async ({
  univName,
  regionName,
}: PostAuthJoin.Params) => {
  await authClient.post(AUTH_URL.POST_AUTH_JOIN, {
    univName,
    regionName,
  });
};

export const getUserInfo = async (): Promise<GetUserInfo.Res> => {
  const response = await authClient.get(AUTH_URL.GET_USER_INFO);
  return response.data;
};
