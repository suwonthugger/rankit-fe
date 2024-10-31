import { client } from '../client';
import { GetSchoolList } from './types';

const SCHOOL_URL = {
  GET_SCHOOL_LIST: '/schoolRank/schoolList',
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
