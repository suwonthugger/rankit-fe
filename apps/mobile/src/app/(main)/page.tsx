'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';
import Button from '@/shared/components/button/button';
import Input from '@/shared/components/input/input';
import { useGetUserList } from '@/shared/apis/main/queries';
import RankBoardWithTier from './_components/RankBoardWithTier/RankBoardWithTier';
import {
  bottomDivStyle,
  buttonDivStyle,
  container,
  heading1Style,
  heading2Style,
  inputStyle,
  paragraphStyle,
  textCenter,
  topDivStyle,
  InputListPlaceholderStyle,
} from './main.css';

const MainPage = () => {
  const [유저검색키워드, set유저검색키워드] = useState('');

  const { data } = useGetUserList({ searchedname: 유저검색키워드 });

  const filteredData =
    data?.userList?.filter((user) => user.username.includes(유저검색키워드)) ||
    [];

  const bottomDivRef = useRef<HTMLDivElement | null>(null);

  const handle유저검색키워드변경 = (e: React.ChangeEvent<HTMLInputElement>) => {
    set유저검색키워드(e.target.value);
  };

  const handleScrollToButtons = () => {
    if (bottomDivRef.current) {
      bottomDivRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={container}>
      <div className={topDivStyle}>
        <h1 className={`${heading2Style} ${textCenter}`}>
          우리학교, 우리지역의
          <br />
          개발자 만나기
        </h1>

        <div className={buttonDivStyle}>
          <Link href="/school">
            <Button>학교순위</Button>
          </Link>

          <Link href="/region">
            <Button>지역순위</Button>
          </Link>
        </div>

        <Input
          device="mobile"
          value={유저검색키워드}
          onChange={handle유저검색키워드변경}
          variant="search"
          placeholder="github 아이디 검색"
          className={inputStyle}>
          <Input.List>
            {filteredData?.length > 0 ? (
              filteredData.map((user) => (
                <Link key={user.username} href={`/user/${user.username}`}>
                  <Input.UserItem
                    userRank={user.userRank}
                    userName={user.username}
                    profileImg={user.profileImg}
                    userScore={user.userscore}
                  />
                </Link>
              ))
            ) : (
              <p className={InputListPlaceholderStyle}>검색 결과가 없습니다.</p>
            )}
          </Input.List>
        </Input>
      </div>

      <div className={bottomDivStyle}>
        <h1 className={heading1Style}>유저 랭킹</h1>

        <h2 className={heading2Style}>
          tier별
          <br />
          유저들의 랭킹을
          <br />
          확인해보세요
        </h2>

        <p className={paragraphStyle}>
          rankit에서 깃허브를 분석한 점수를 보여드려요.
        </p>

        <RankBoardWithTier />
      </div>
    </div>
  );
};

export default MainPage;
