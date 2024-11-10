'use client';

import Link from 'next/link';
import { useState, KeyboardEvent } from 'react';
import Input from '@/shared/components/input/input';
import RankBoard from '@/shared/components/rankBoard/rankBoard';
import { useGetSchoolNames } from '@/shared/apis/auth/queries';
import {
  useGetSchoolList,
  useGetSchoolUserList,
} from '@/shared/apis/school/queries';
import ArrowBackIcon from '@/shared/assets/svgs/arrow_back.svg';
import {
  boardStyle,
  divStyle,
  container,
  heading1Style,
  heading2Style,
  inputStyle,
  paragraphStyle,
  InputMenuPlaceholderStyle,
} from './schoolPage.css';

const SchoolPage = () => {
  const [대학교검색키워드, set대학교검색키워드] = useState('');
  const [선택된대학교, set선택된대학교] = useState('');

  const { data: schoolNames } = useGetSchoolNames();
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetSchoolList({ searchedSchoolName: 선택된대학교 });

  const 대학선택여부 = 선택된대학교.length > 0;

  const {
    data: schoolUserData,
    isLoading: schoolUserDataIsLoading,
    fetchNextPage: schoolUserDataFetchNextPage,
    hasNextPage: schoolUserDataHasNextPage,
    isFetchingNextPage: schoolUserDataIsFetchingNextPage,
  } = useGetSchoolUserList({
    schoolName: 선택된대학교,
    enabled: 대학선택여부,
  });

  const filteredData = schoolNames?.filter((school: string) =>
    school.includes(대학교검색키워드),
  );

  const handle대학선택 = (school: string) => {
    set대학교검색키워드(school);
    set선택된대학교(school);
  };

  const handle대학교검색키워드변경 = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (e.target.value === '') {
      set선택된대학교('');
    }
    set대학교검색키워드(e.target.value);
  };

  const handle선택대학삭제 = () => {
    set대학교검색키워드('');
    set선택된대학교('');
  };
  return (
    <div className={container}>
      <div className={divStyle}>
        <h1 className={heading1Style}>학교 랭킹</h1>

        <h2 className={heading2Style}>
          대학교별
          <br />
          rankit 순위를
          <br />
          알아보아요.
        </h2>

        <p className={paragraphStyle}>
          학교명을 눌러서 교내 유저들의 순위를 볼 수 있어요.
        </p>

        <Input
          value={대학교검색키워드}
          onChange={handle대학교검색키워드변경}
          placeholder="대학교 검색"
          device="mobile"
          variant={대학선택여부 ? 'custom' : 'search'}
          className={inputStyle}
          customIcon={
            <button>
              <ArrowBackIcon onClick={handle선택대학삭제} />
            </button>
          }>
          <Input.List>
            {filteredData?.length > 0 ? (
              filteredData.map((school: string) => (
                <Input.MenuItem
                  key={school}
                  onClick={() => handle대학선택(school)}>
                  {school}
                </Input.MenuItem>
              ))
            ) : (
              <p className={InputMenuPlaceholderStyle}>검색 결과가 없습니다.</p>
            )}
          </Input.List>
        </Input>

        <RankBoard
          device="mobile"
          title={대학선택여부 ? '아이디' : '지역명'}
          fetchNextPage={
            대학선택여부 ? fetchNextPage : schoolUserDataFetchNextPage
          }
          hasNextPage={대학선택여부 ? hasNextPage : schoolUserDataHasNextPage}
          isFetchingNextPage={
            대학선택여부 ? isFetchingNextPage : schoolUserDataIsFetchingNextPage
          }
          isLoading={대학선택여부 ? isLoading : schoolUserDataIsLoading}>
          {대학선택여부
            ? schoolUserData?.pages.map((page) =>
                page.userInfoBySchools?.map((user) => (
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
                page.schoolList.map((user) => (
                  <button
                    key={user.schoolName}
                    onClick={() => {
                      handle대학선택(user.schoolName);
                    }}>
                    <RankBoard.ListItem
                      rank={user.schoolRank}
                      name={user.schoolName}
                      score={user.schoolScore}
                    />
                  </button>
                )),
              )}
        </RankBoard>
      </div>
    </div>
  );
};

export default SchoolPage;
