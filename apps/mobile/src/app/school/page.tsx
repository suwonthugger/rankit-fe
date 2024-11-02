'use client';

import { useRef, useState, KeyboardEvent } from 'react';
import Input from '@/shared/components/input/input';
import RankBoard from '@/shared/components/rankBoard/rankBoard';
import { useGetSchoolNames } from '@/shared/apis/auth/queries';
import { useGetSchoolList } from '@/shared/apis/school/queries';
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

  const filteredData = schoolNames?.filter((school: string) =>
    school.includes(대학교검색키워드),
  );

  const handle대학교선택 = (school: string) => {
    set선택된대학교(school);
    set대학교검색키워드(school);
  };

  const handle대학교검색키워드변경 = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    set대학교검색키워드(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      set선택된대학교(대학교검색키워드);
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
          value={대학교검색키워드}
          onChange={handle대학교검색키워드변경}
          onKeyDown={handleKeyDown}
          device="mobile"
          variant="search"
          placeholder="대학교 검색"
          className={inputStyle}>
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
