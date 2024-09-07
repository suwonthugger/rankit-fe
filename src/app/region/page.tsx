import React from 'react';
import Input from '@/shared/components/input/input';
import RankBoard from '@/shared/components/rankBoard/rankBoard';
import {
  containerStyle,
  headingStyle,
  leftDivStyle,
  paragraphStyle,
  rightDivStyle,
  spanStyle,
} from './regionPage.css';

const RegionPage = () => {
  return (
    <div className={containerStyle}>
      <div className={leftDivStyle}>
        <h1 className={headingStyle}>
          <span className={spanStyle}>내 지역</span>의
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
        <Input variant="search" placeholder="대학교 검색" />
        <RankBoard />
      </div>
    </div>
  );
};

export default RegionPage;
