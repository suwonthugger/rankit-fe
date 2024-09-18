import { Input, RankBoard } from '@rankit/ui';
import React from 'react';
import {
  containerStyle,
  headingStyle,
  leftDivStyle,
  paragraphStyle,
  rightDivStyle,
  spanStyle,
} from './schoolPage.css';

const SchoolPage = () => {
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
        <Input variant="search" placeholder="대학교 검색" />
        <RankBoard />
      </div>
    </div>
  );
};

export default SchoolPage;
