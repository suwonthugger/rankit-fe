'use client';

import Link from 'next/link';
import Button from '@/shared/components/button/button';
import Input from '@/shared/components/input/input';
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
} from './main.css';

const MainPage = () => {
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
          variant={'search'}
          placeholder={'github 아이디 검색'}
          className={inputStyle}
        />
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
