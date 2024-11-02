'use client';

import React, { useState, KeyboardEvent } from 'react';
import Input from '@/shared/components/input/input';
import RankBoard from '@/shared/components/rankBoard/rankBoard';
import { useGetSchoolNames } from '@/shared/apis/auth/queries';
import { useGetSchoolList } from '@/shared/apis/school/queries';
import {
  containerStyle,
  headingStyle,
  InputMenuPlaceholderStyle,
  leftDivStyle,
  paragraphStyle,
  rightDivStyle,
  spanStyle,
} from './schoolPage.css';

const SchoolPage = () => {
  const [대학교검색키워드, set대학교검색키워드] = useState('');
  const [선택된대학교, set선택된대학교] = useState('');

  const { data: schoolNames } = useGetSchoolNames();
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetSchoolList({ searchedSchoolName: 선택된대학교 });

  const filteredData = schoolNames?.filter((school: string) =>
    school.includes(대학교검색키워드),
  );

  const handle대학교검색키워드변경 = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    set대학교검색키워드(e.target.value);
  };

  const handle대학교선택 = (school: string) => {
    set대학교검색키워드(school);
    set선택된대학교(school);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      set선택된대학교(대학교검색키워드);
    }
  };
  return (
    <div className={containerStyle}>
      <div className={leftDivStyle}>
        <span className={spanStyle}>학교 랭킹</span>
        <h1 className={headingStyle}>
          대학교별
          <br />
          rankit 순위를
          <br />
          확인해보세요.
        </h1>
        <p className={paragraphStyle}>
          학교명을 눌러서
          <br />
          교내 유저들의
          <br />
          순위를 볼 수 있어요.
        </p>
      </div>

      <div className={rightDivStyle}>
        <Input
          value={대학교검색키워드}
          onChange={handle대학교검색키워드변경}
          variant="search"
          placeholder="대학교 검색"
          onKeyDown={handleKeyDown}>
          <Input.List>
            {filteredData?.length > 0 ? (
              filteredData.map((school: string) => (
                <Input.MenuItem
                  key={school}
                  onClick={() => handle대학교선택(school)}>
                  {school}
                </Input.MenuItem>
              ))
            ) : (
              <p className={InputMenuPlaceholderStyle}>검색 결과가 없습니다.</p>
            )}
          </Input.List>
        </Input>
        <RankBoard
          title="아이디"
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
          isLoading={isLoading}>
          {data?.pages.map((page) =>
            page.schoolList.map((user) => (
              <RankBoard.ListItem
                key={user.schoolName}
                rank={user.schoolRank}
                name={user.schoolName}
                score={user.schoolScore}
              />
            )),
          )}
        </RankBoard>
      </div>
    </div>
  );
};

export default SchoolPage;
