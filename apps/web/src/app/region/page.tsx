'use client';

import Input from '@/shared/components/input/input';
import RankBoard from '@/shared/components/rankBoard/rankBoard';
import { useGetRegionList } from '@/shared/apis/region/queries';
import {
  containerStyle,
  headingStyle,
  leftDivStyle,
  paragraphStyle,
  rightDivStyle,
  spanStyle,
} from './regionPage.css';

const RegionPage = () => {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetRegionList({});

  return (
    <div className={containerStyle}>
      <div className={leftDivStyle}>
        <span className={spanStyle}>지역 랭킹</span>
        <h1 className={headingStyle}>
          지역별
          <br />
          rankit 순위를
          <br />
          확인해보세요.
        </h1>
        <p className={paragraphStyle}>
          지역명을 눌러서
          <br />
          지역내 유저들의
          <br />
          순위를 볼 수 있어요.
        </p>
      </div>

      <div className={rightDivStyle}>
        <Input variant="search" placeholder="대학교 검색" />
        <RankBoard
          title="지역명"
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
          isLoading={isLoading}>
          {data?.pages.map((page) =>
            page.regionList.map((user) => (
              <RankBoard.ListItem
                key={user.regionlName}
                rank={user.regionRank}
                name={user.regionlName}
                score={user.regionScore}
              />
            )),
          )}
        </RankBoard>
      </div>
    </div>
  );
};

export default RegionPage;
