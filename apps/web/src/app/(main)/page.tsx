'use client';

import { Button, Input } from '@rankit/ui';
import Link from 'next/link';
import { useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import ArrowDownIcon from '@/shared/assets/svg/arrow_down.svg';
import GraduationCapIcon from '@/shared/assets/svg/graduationCap.svg';
import MapIcon from '@/shared/assets/svg/map.svg';
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
  topDivContentStyle,
  topDivPragraphStyle,
  topDivSpanStyle,
  topDivStyle,
  topParagraphStyle,
} from './mainPage.css';

export default function MainPage() {
  const bottomDivRef = useRef<HTMLDivElement | null>(null);

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
            개발 실력을 겨루어보자
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
            <Input variant="search" placeholder="github 아이디 검색" />
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
