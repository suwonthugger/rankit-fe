import { client } from '../client';
import { GetSchoolList, GetSchoolUserList } from './types';

const SCHOOL_URL = {
  GET_SCHOOL_LIST: '/schoolRank/schoolList',
  GET_SCHOOL_USER_LIST: '/schoolRank/userList',
};

export const getSchoolList = async ({
  page,
  searchedSchoolName,
}: GetSchoolList.Params): Promise<GetSchoolList.Res> => {
  const response = await client.get(SCHOOL_URL.GET_SCHOOL_LIST, {
    params: {
      page,
      searchedSchoolName,
    },
  });
  return response.data;
};

export const getSchoolUserList = async ({
  page,
  schoolName,
}: GetSchoolUserList.Params): Promise<GetSchoolUserList.Res> => {
  const response = await client.get(SCHOOL_URL.GET_SCHOOL_LIST, {
    params: {
      page,
      schoolName,
    },
  });
  return response.data;
};
