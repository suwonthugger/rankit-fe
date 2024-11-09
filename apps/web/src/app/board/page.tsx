'use client';

import React, { useEffect, useRef, useState } from 'react';
import Input from '@/shared/components/input/input';
import { usePostGuestBook } from '@/shared/apis/board/queries';
import { getAuthHeader } from '@/shared/utils/auth';
import Board from './_components/board';
import {
  containerStyle,
  leftDivStyle,
  spanStyle,
  paragraphStyle,
  rightDivStyle,
} from './boardPage.css';

const BoardPage = () => {
  const [내용, set내용] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { mutate, isPending } = usePostGuestBook();

  const handle내용변경 = (e: React.ChangeEvent<HTMLInputElement>) => {
    set내용(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (!isPending && 내용.length > 0) {
        mutate(내용, { onSuccess: () => set내용('') });
      }
    }
  };

  useEffect(() => {
    setIsLoggedIn(!!getAuthHeader());
  }, []);

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
        {isLoggedIn ? (
          <Input
            value={내용}
            onChange={handle내용변경}
            onKeyPress={handleKeyPress}
            placeholder="enter을 입력해서 등록합니다. (최대  60byte)"
          />
        ) : (
          <Input isDiv divValue="로그인 후 이용가능한 서비스입니다." />
        )}
        <Board />
      </div>
    </div>
  );
};

export default BoardPage;
