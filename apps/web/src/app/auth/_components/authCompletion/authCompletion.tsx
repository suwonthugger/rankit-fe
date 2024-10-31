'use client';

import { useRouter } from 'next/navigation';
import { useQueryClient } from '@tanstack/react-query';
import Button from '@/shared/components/button/button';
import Logo from '@/shared/assets/svg/logo_lg.svg';
import {
  bottomParagraphStyle,
  headingStyle,
  sectionStyle,
  topParagraphStyle,
  rightDivStyle,
  rightBottomDivStyle,
  homeButtonStyle,
} from './authCompletion.css';

const AuthCompletion = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const handleHomeClick = () => {
    queryClient.invalidateQueries({ queryKey: ['userInfo'] });
    router.push('/');
  };

  return (
    <section className={sectionStyle}>
      <div>
        <Logo />
      </div>

      <div className={rightDivStyle}>
        <h1 className={headingStyle}>
          가입을
          <br />
          축하드립니다.
        </h1>

        <div className={rightBottomDivStyle}>
          <p className={topParagraphStyle}>
            나의 코딩실력은? 우리 학교는 개발을 잘하나? 우리 지역은?
          </p>
          <p className={bottomParagraphStyle}>
            서비스로 돌아가 나의 점수를 확인하세요
          </p>

          <div className={homeButtonStyle}>
            <Button onClick={handleHomeClick}>홈으로 돌아가기</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthCompletion;
