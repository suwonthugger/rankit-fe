'use client';

import { useRouter } from 'next/navigation';
import { useQueryClient } from '@tanstack/react-query';
import Button from '@/shared/components/button/button';
import Logo from '@/shared/assets/svgs/big_logo.svg';
import { buttonStyle, headingStyle, iconStyle } from './authCompletion.css';

const AuthCompletion = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const handleHomeClick = () => {
    queryClient.invalidateQueries({ queryKey: ['userInfo'] });
    window.location.href = '/';
  };

  return (
    <>
      <h1 className={headingStyle}>가입을 축하드립니다.</h1>

      <Logo className={iconStyle} />

      <Button onClick={handleHomeClick} className={buttonStyle}>
        홈으로 돌아가기
      </Button>
    </>
  );
};

export default AuthCompletion;
