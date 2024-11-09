'use client';

import Link from 'next/link';
import { useState } from 'react';
import Input from '@/shared/components/input/input';
import RankBoard from '@/shared/components/rankBoard/rankBoard';
import { useGetRegionNames } from '@/shared/apis/auth/queries';
import {
  useGetRegionList,
  useGetRegionUserList,
} from '@/shared/apis/region/queries';
import ArrowBackIcon from '@/shared/assets/svgs/arrow_back.svg';
import {
  containerStyle,
  headingStyle,
  leftDivStyle,
  paragraphStyle,
  rightDivStyle,
  spanStyle,
  InputMenuPlaceholderStyle,
} from './regionPage.css';

const RegionPage = () => {
  const [지역검색키워드, set지역검색키워드] = useState('');
  const [선택된지역, set선택된지역] = useState('');

  const { data: 지역이름들 } = useGetRegionNames();
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetRegionList({});

  const 지역선택여부 = 선택된지역.length > 0;

  const {
    data: regionUserData,
    isLoading: regionUserDataIsLoading,
    fetchNextPage: regionUserDataFetchNextPage,
    hasNextPage: regionUserDataHasNextPage,
    isFetchingNextPage: regionUserDataIsFetchingNextPage,
  } = useGetRegionUserList({
    regionName: 선택된지역,
    enabled: 지역선택여부,
  });

  const filteredData = 지역이름들?.filter((region: string) =>
    region.includes(지역검색키워드),
  );

  const handle지역검색키워드변경 = (e: React.ChangeEvent<HTMLInputElement>) => {
    set지역검색키워드(e.target.value);
  };

  const handle지역선택 = (region: string) => {
    set지역검색키워드(region);
    set선택된지역(region);
  };

  const handle선택지역삭제 = () => {
    set선택된지역('');
    set지역검색키워드('');
  };

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
        <Input
          value={지역검색키워드}
          onChange={handle지역검색키워드변경}
          placeholder="지역 검색"
          variant={지역선택여부 ? 'custom' : 'search'}
          customIcon={
            <button>
              <ArrowBackIcon onClick={handle선택지역삭제} />
            </button>
          }>
          <Input.List>
            {filteredData?.length > 0 ? (
              filteredData.map((region: string) => (
                <Input.MenuItem
                  key={region}
                  onClick={() => handle지역선택(region)}>
                  {region}
                </Input.MenuItem>
              ))
            ) : (
              <p className={InputMenuPlaceholderStyle}>검색 결과가 없습니다.</p>
            )}
          </Input.List>
        </Input>
        <RankBoard
          title={지역선택여부 ? '아이디' : '지역명'}
          fetchNextPage={
            지역선택여부 ? fetchNextPage : regionUserDataFetchNextPage
          }
          hasNextPage={지역선택여부 ? hasNextPage : regionUserDataHasNextPage}
          isFetchingNextPage={
            지역선택여부 ? isFetchingNextPage : regionUserDataIsFetchingNextPage
          }
          isLoading={지역선택여부 ? isLoading : regionUserDataIsLoading}>
          {지역선택여부
            ? regionUserData?.pages.map((page) =>
                page.userInfoByRegion.map((user) => (
                  <Link key={user.username} href={`/user/${user.username}`}>
                    <RankBoard.ListItem
                      rank={user.userRank}
                      name={user.username}
                      score={user.userscore}
                      profileImg={user.profileImg}
                    />
                  </Link>
                )),
              )
            : data?.pages.map((page) =>
                page.regionList.map((user) => (
                  <button
                    key={user.regionlName}
                    onClick={() => {
                      handle지역선택(user.regionlName);
                    }}>
                    <RankBoard.ListItem
                      rank={user.regionRank}
                      name={user.regionlName}
                      score={user.regionScore}
                    />
                  </button>
                )),
              )}
        </RankBoard>
      </div>
    </div>
  );
};

export default RegionPage;
