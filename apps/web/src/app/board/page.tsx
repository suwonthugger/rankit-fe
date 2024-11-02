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
        <span className={spanStyle}>보드</span>
        <p className={paragraphStyle}>
          rankit의 모든 유저들이
          <br />
          자유롭게 소통하는 공간입니다.
          <br />
          부적절한 멘트는 지양해주세요.
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
