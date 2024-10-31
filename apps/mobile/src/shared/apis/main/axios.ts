import { client } from '../client';
import { GetUserGradeList, GetUserList } from './types';

const MAIN_URL = {
  GET_USER_LIST: '/mainPage/users',
  GET_USER_GRADE_LIST: (grade: string) => `/mainPage/${grade}/users`,
};

export const getUserList = async ({
  page,
  searchedname,
}: GetUserList.Params): Promise<GetUserList.Res> => {
  const response = await client.get(MAIN_URL.GET_USER_LIST, {
    params: { page, searchedname },
  });
  return response.data;
};

export const getUserGradeList = async ({
  grade,
  page,
}: GetUserGradeList.Params): Promise<GetUserGradeList.Res> => {
  const response = await client.get(MAIN_URL.GET_USER_GRADE_LIST(grade), {
    params: { page },
  });
  return response.data;
};
