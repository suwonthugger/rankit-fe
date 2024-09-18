import { Button, Input } from '@rankit/ui';
import Checkbox from '@/shared/assets/svg/check_btn.svg';
import {
  authNumberDivStyle,
  checkboxButtonStyle,
  flexCenter,
  headingStyle,
  paragraphStyle,
  rightDivStyle,
  sectionStyle,
  skipButtonStyle,
} from './authSchool.css';

interface AuthSchoolProps {
  handleNextStep: (step: string) => void;
}

const AuthSchool = ({ handleNextStep }: AuthSchoolProps) => {
  return (
    <section className={sectionStyle}>
      <div>
        <h1 className={headingStyle}>
          소속 대학교
          <br />
          인증하기
        </h1>
        <p className={paragraphStyle}>
          나의 코딩실력은? 우리 학교는 개발을 잘하나? 우리 지역은?
        </p>
      </div>

      <div className={rightDivStyle}>
        <Input variant="search" placeholder="대학교 검색" />
        <Input placeholder="대학 이메일 확인" />

        <div>
          <button className={checkboxButtonStyle}>
            <Checkbox />
            서비스 제공을 목적으로 개인정보 수집 및 이용(필수)에 동의 합니다.
          </button>
        </div>

        <div className={flexCenter}>
          <Button>인증번호 전송</Button>
        </div>

        <div className={authNumberDivStyle}>
          <Input placeholder="인증번호 입력" />

          <div className={flexCenter}>
            <Button
              onClick={() => {
                handleNextStep('region');
              }}>
              다음
            </Button>
          </div>

          <button className={skipButtonStyle}>건너뛰기</button>
        </div>
      </div>
    </section>
  );
};

export default AuthSchool;
