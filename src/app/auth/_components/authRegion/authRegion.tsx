import Button from '@/shared/components/button/button';
import Input from '@/shared/components/input/input';
import {
  nextDivStyle,
  rightDivParagraphStyle,
  flexCenter,
  headingStyle,
  paragraphStyle,
  rightDivStyle,
  sectionStyle,
  skipButtonStyle,
} from './authRegion.css';

const AuthRegion = () => {
  return (
    <section className={sectionStyle}>
      <div>
        <h1 className={headingStyle}>
          소속 지역
          <br />
          설정하기
        </h1>
        <p className={paragraphStyle}>
          나의 코딩실력은? 우리 학교는 개발을 잘하나? 우리 지역은?
        </p>
      </div>

      <div className={rightDivStyle}>
        <Input placeholder="지역 선택" />

        <p className={rightDivParagraphStyle}>
          본인이 거주 및 출생한 지역을 자유롭게 선택할 수 있습니다. 지역정보는
          서비스 내 지역 경쟁
          <br />
          콘텐츠에 사용됩니다.
        </p>

        <div className={nextDivStyle}>
          <div className={flexCenter}>
            <Button>다음</Button>
          </div>

          <button className={skipButtonStyle}>건너뛰기</button>
        </div>
      </div>
    </section>
  );
};

export default AuthRegion;
