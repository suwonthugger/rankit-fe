'use client';

import { useRef, useState, KeyboardEvent } from 'react';
import Input from '@/shared/components/input/input';
import RankBoard from '@/shared/components/rankBoard/rankBoard';
import { useGetSchoolList } from '@/shared/apis/school/queries';
import {
  boardStyle,
  divStyle,
  container,
  heading1Style,
  heading2Style,
  inputStyle,
  paragraphStyle,
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
          학교명을 눌러서
          <br />
          교내 유저들의
          <br />
          순위를 볼 수 있어요.
        </p>

        <Input
          ref={inputRef}
          device="mobile"
          variant="search"
          placeholder="대학교 검색"
          onKeyDown={handleKeyDown}
          className={inputStyle}
        />
        <RankBoard
          device="mobile"
          className={boardStyle}
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
