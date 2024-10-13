import React from 'react';
import Button from '@/shared/components/button/button';
import { buttonStyle, headingStyle, paragraphStyle } from './\bauthGithub.css';

interface AuthGithubProps {
  handleNextStep: (step: string) => void;
}

const AuthGithub = ({ handleNextStep }: AuthGithubProps) => {
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

      <Button onClick={() => handleNextStep('school')} className={buttonStyle}>
        Git 소셜 로그인
      </Button>
    </>
  );
};

export default AuthGithub;
