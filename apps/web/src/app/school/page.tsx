'use client';

import React, { useRef, useState, KeyboardEvent } from 'react';
import Input from '@/shared/components/input/input';
import RankBoard from '@/shared/components/rankBoard/rankBoard';
import { useGetSchoolList } from '@/shared/apis/school/queries';
import {
  containerStyle,
  headingStyle,
  leftDivStyle,
  paragraphStyle,
  rightDivStyle,
  spanStyle,
} from './schoolPage.css';

const SchoolPage = () => {
  const [searchedSchoolName, setSearchedSchoolName] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetSchoolList({ searchedSchoolName });

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setSearchedSchoolName(inputRef.current?.value ?? '');
    }
  };
  return (
    <div className={containerStyle}>
      <div className={leftDivStyle}>
        <h1 className={headingStyle}>
          <span className={spanStyle}>대학교</span>의
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
        <Input
          ref={inputRef}
          variant="search"
          placeholder="대학교 검색"
          onKeyDown={handleKeyDown}
        />
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
