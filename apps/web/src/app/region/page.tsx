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
        <h1 className={headingStyle}>
          <span className={spanStyle}>내 지역</span>의
          <br />
          개발 능력 순위를
          <br />
          알아보아요.
        </h1>
        <p className={paragraphStyle}>
          rankit에서
          <br />
          분석한 깃허브 점수를
          <br />
          보여드려요(가제)
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
