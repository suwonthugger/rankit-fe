import { client } from '../client';

const REGION_URL = {
  GET_REGION_LIST: '/regionRank/regionList',
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
