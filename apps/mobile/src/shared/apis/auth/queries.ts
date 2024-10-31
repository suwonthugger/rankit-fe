import { useMutation, useQuery } from '@tanstack/react-query';
import { getAuthHeader } from '@/shared/utils/auth';
import {
  getRegionNames,
  getSchoolNames,
  getUserInfo,
  postAuthJoin,
  postUnivCertificate,
  postUnivValidate,
} from './axios';
import { PostAuthJoin, PostUnivCertificate, PostUnivValidate } from './types';

const token = getAuthHeader();

export const useGetSchoolNames = () => {
  return useQuery({ queryKey: ['schoolNames'], queryFn: getSchoolNames });
};

export const useGetRegionNames = () => {
  return useQuery({ queryKey: ['regionNames'], queryFn: getRegionNames });
};

export const usePostUnivCertificate = () => {
  return useMutation({
    mutationFn: ({ email, univName }: PostUnivCertificate.Params) =>
      postUnivCertificate({ email, univName }),
  });
};

export const usePostUnivValidate = () => {
  return useMutation({
    mutationFn: ({ email, univName, code }: PostUnivValidate.Params) =>
      postUnivValidate({ email, univName, code }),
  });
};

export const usePostAuthJoin = () => {
  return useMutation({
    mutationFn: ({ univName, regionName }: PostAuthJoin.Params) =>
      postAuthJoin({ univName, regionName }),
  });
};

export const useGetUserInfo = () => {
  return useQuery({
    queryKey: ['userInfo', token],
    queryFn: getUserInfo,
    enabled: !!token,
  });
};
