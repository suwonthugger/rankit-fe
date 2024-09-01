import Button from '@/shared/components/button/button';
import Logo from '@/shared/assets/svg/logo_lg.svg';
import {
  bottomParagraphStyle,
  bottonDiv,
  headingStyle,
  sectionStyle,
  topDivStyle,
  topParagraphStyle,
} from './authGithub.css';

interface AuthGtihubProps {
  handleNextStep: (step: string) => void;
}

const AuthGithub = ({ handleNextStep }: AuthGtihubProps) => {
  return (
    <section className={sectionStyle}>
      <div className={topDivStyle}>
        <h1 className={headingStyle}>
          경쟁하는
          <br />
          코딩 습관을 기르다
        </h1>

        <Logo />
      </div>

      <div className={bottonDiv}>
        <p className={topParagraphStyle}>
          나의 코딩실력은? 우리 학교는 개발을 잘하나? 우리 지역은?
        </p>
        <p className={bottomParagraphStyle}>깃허브 계정을 연결하세요.</p>

        <span>
          <Button onClick={() => handleNextStep('school')}>
            Git 소셜 로그인
          </Button>
        </span>
      </div>
    </section>
  );
};

export default AuthGithub;
