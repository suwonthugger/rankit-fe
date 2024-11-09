import { client } from '../client';
import { GetRegionList, GetRegionUserList } from './types';

const REGION_URL = {
  GET_REGION_LIST: '/regionRank/regionList',
  GET_REGION_USER_LIST: '/regionRank/userList',
};

export const getRegionList = async ({
  page,
  regionName,
}: GetRegionList.Params): Promise<GetRegionList.Res> => {
  const response = await client.get(REGION_URL.GET_REGION_LIST, {
    params: {
      page,
      regionName,
    },
  });

  return response.data;
};

export const getRegionUserList = async ({
  page,
  regionName,
}: GetRegionUserList.Params): Promise<GetRegionUserList.Res> => {
  const response = await client.get(REGION_URL.GET_REGION_USER_LIST, {
    params: {
      page,
      regionName,
    },
  });

  return response.data;
};
