'use client';

import Input from '@/shared/components/input/input';
import RankBoard from '@/shared/components/rankBoard/rankBoard';
import { useGetRegionList } from '@/shared/apis/region/queries';
import {
  boardStyle,
  divStyle,
  container,
  heading1Style,
  heading2Style,
  inputStyle,
  paragraphStyle,
} from './regionPage.css';

const SchoolPage = () => {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetRegionList({});

  return (
    <div className={container}>
      <div className={divStyle}>
        <h1 className={heading1Style}>지역 랭킹</h1>

        <h2 className={heading2Style}>
          지역별
          <br />
          rankit 순위를
          <br />
          확인해보세요.
        </h2>

        <p className={paragraphStyle}>
          지역명을 눌러서 지역내 유저들의 순위를 볼 수 있어요.
        </p>

        <Input
          device="mobile"
          variant="search"
          placeholder="지역 검색"
          className={inputStyle}
        />

        <RankBoard
          device="mobile"
          className={boardStyle}
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

export default SchoolPage;
