import Link from 'next/link';
import Button from '@/shared/components/button/button';
import Logo from '@/shared/assets/svgs/big_logo.svg';
import { buttonStyle, headingStyle, iconStyle } from './authCompletion.css';

interface AuthCompletionProps {
  handleNextStep: (step: string) => void;
}

const AuthCompletion = ({ handleNextStep }: AuthCompletionProps) => {
  return (
    <>
      <h1 className={headingStyle}>가입을 축하드립니다.</h1>

      <Logo className={iconStyle} />

      <Button className={buttonStyle}>
        <Link href="/">홈으로 돌아가기</Link>
      </Button>
    </>
  );
};

export default AuthCompletion;
