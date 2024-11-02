import Button from '@/shared/components/button/button';
import Logo from '@/shared/assets/svgs/logo_lg.svg';
import {
  bottomParagraphStyle,
  bottonDiv,
  headingStyle,
  sectionStyle,
  topDivStyle,
  topParagraphStyle,
} from './authGithub.css';

const AuthGithub = () => {
  const 깃허브로그인페이지로이동 = () => {
    if (process.env.NEXT_PUBLIC_GITHUB_AUTH_URL)
      window.location.href = process.env.NEXT_PUBLIC_GITHUB_AUTH_URL;
  };

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
          <Button onClick={깃허브로그인페이지로이동}>Git 소셜 로그인</Button>
        </span>
      </div>
    </section>
  );
};

export default AuthGithub;
