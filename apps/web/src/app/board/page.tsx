import React from 'react';
import Input from '@/shared/components/input/input';
import Board from './_components/board';
import {
  containerStyle,
  headingStyle,
  leftDivStyle,
  paragraphStyle,
  rightDivStyle,
  spanStyle,
} from './boardPage.css';

const BoardPage = () => {
  return (
    <div className={containerStyle}>
      <div className={leftDivStyle}>
        <h1 className={headingStyle}>
          고지를
          <br />
          선점하기 위해
          <br />
          싸워라.
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
        <Input placeholder="enter을 입력해서 등록합니다. (최대  60byte)" />
        <Board />
      </div>
    </div>
  );
};

export default BoardPage;
