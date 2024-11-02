'use client';

import { Flex, Spinner } from '@radix-ui/themes';
import Link from 'next/link';
import { useRef, useState } from 'react';
import Button from '@/shared/components/button/button';
import Input from '@/shared/components/input/input';
import { useGetUserList } from '@/shared/apis/main/queries';
import ArrowDownIcon from '@/shared/assets/svgs/arrow_down.svg';
import GraduationCapIcon from '@/shared/assets/svgs/graduationCap.svg';
import MapIcon from '@/shared/assets/svgs/map.svg';
import RankBoardWithTier from './_components/RankBoardWithTier/RankBoardWithTier';
import {
  bottomDivStyle,
  bottomParagraphStyle,
  buttonDivStyle,
  container,
  heading2Style,
  headingStyle,
  IconStyle,
  inputDivStyle,
  InputListPlaceholderStyle,
  topDivContentStyle,
  topDivPragraphStyle,
  topDivSpanStyle,
  topDivStyle,
  topParagraphStyle,
} from './mainPage.css';

export default function MainPage() {
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
        <div className={topDivContentStyle}>
          <h1 className={headingStyle}>
            우리학교, 우리지역의
            <br />
            개발자 만나기
          </h1>

          <div className={buttonDivStyle}>
            <Link href={'/school'}>
              <Button Icon={<GraduationCapIcon />}>학교 순위</Button>
            </Link>

            <Link href={'/region'}>
              <Button Icon={<MapIcon />}>지역 순위</Button>
            </Link>
          </div>

          <p className={topDivPragraphStyle}>
            rank<span className={topDivSpanStyle}>i</span>t에서 다른 개발자들을
            만나보세요 !
          </p>

          <div className={inputDivStyle}>
            <Input
              value={유저검색키워드}
              onChange={handle유저검색키워드변경}
              variant="search"
              placeholder="github 아이디 검색">
              <Input.List>
                {filteredData?.length > 0 ? (
                  filteredData.map((user) => (
                    <Input.UserItem
                      key={user.username}
                      userRank={user.userRank}
                      userName={user.username}
                      profileImg={user.profileImg}
                      userScore={user.userscore}
                    />
                  ))
                ) : (
                  <p className={InputListPlaceholderStyle}>
                    검색 결과가 없습니다.
                  </p>
                )}
              </Input.List>
            </Input>
          </div>

          <button onClick={handleScrollToButtons}>
            <ArrowDownIcon className={IconStyle} />
          </button>
        </div>
      </div>

      <div ref={bottomDivRef} className={bottomDivStyle}>
        <div>
          <h2 className={heading2Style}>유저 랭킹</h2>
          <p className={topParagraphStyle}>
            level별
            <br />
            개발자들의 랭킹을
            <br />
            확인해보세요
          </p>

          <p className={bottomParagraphStyle}>
            rankit에서 분석한
            <br />
            깃허브 점수를
            <br />
            보여드려요
          </p>
        </div>

        <RankBoardWithTier />
      </div>
    </div>
  );
}
