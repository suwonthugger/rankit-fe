import React from 'react';
import Button from '@/shared/components/button/button';
import { buttonStyle, headingStyle, paragraphStyle } from './authGithub.css';

const AuthGithub = () => {
  const 깃허브로그인페이지로이동 = () => {
    if (process.env.NEXT_PUBLIC_GITHUB_AUTH_URL)
      window.location.href = process.env.NEXT_PUBLIC_GITHUB_AUTH_URL;
  };

  return (
    <>
      <h1 className={headingStyle}>경쟁하는 코딩 습관을 기르다</h1>

      <p className={paragraphStyle}>
        나의 코딩실력은?
        <br />
        우리학교는 개발을 잘하나?
        <br />
        우리 지역은?
      </p>

      <a
        href={process.env.NEXT_PUBLIC_GITHUB_AUTH_URL}
        aria-label="깃허브 소셜 로그인">
        <Button onClick={깃허브로그인페이지로이동} className={buttonStyle}>
          Git 소셜 로그인
        </Button>
      </a>
    </>
  );
};

export default AuthGithub;
