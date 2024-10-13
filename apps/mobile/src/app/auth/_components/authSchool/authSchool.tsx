import { Input } from '@rankit/ui/index';
import { useState } from 'react';
import Button from '@/shared/components/button/button';
import ArrowBackIcon from '@/shared/assets/svgs/arrow_back.svg';
import CheckBoxChecked from '@/shared/assets/svgs/check_c_btn.svg';
import CheckBoxUnchecked from '@/shared/assets/svgs/check_u_btn.svg';
import {
  bottomDivStyle,
  checkDivStyle,
  container,
  middleDivParagraphStyle,
  middleDivStyle,
  skipButtonStyle,
  spanStyle,
  topDivIconStyle,
  topDivStyle,
} from './authSchool.css';

interface AuthSchoolProps {
  handleNextStep: (step: string) => void;
}

const AuthSchool = ({ handleNextStep }: AuthSchoolProps) => {
  const [checked, setChecked] = useState(false);
  const handleToggleCheck = () => setChecked((prev) => !prev);

  return (
    <div className={container}>
      <div className={topDivStyle}>
        <button onClick={() => handleNextStep('github')}>
          <ArrowBackIcon className={topDivIconStyle} />
        </button>

        <h1>소속 대학교 인증하기</h1>
      </div>

      <div className={middleDivStyle}>
        <Input device="mobile" variant="search" placeholder="대학교 검색" />
        <Input device="mobile" placeholder="대학 이메일 확인" />

        <div className={checkDivStyle}>
          <button onClick={handleToggleCheck}>
            {checked ? <CheckBoxChecked /> : <CheckBoxUnchecked />}
          </button>

          <p className={middleDivParagraphStyle}>
            서비스 제공을 목적으로
            <span className={spanStyle}> 개인정보 수집 및 이용</span>(필수)에
            동의 합니다.
          </p>
        </div>

        <span>
          <Button>인증번호 전송</Button>
        </span>
      </div>

      <div className={bottomDivStyle}>
        <Input device="mobile" placeholder="인증번호 입력" />

        <Button onClick={() => handleNextStep('region')}>다음</Button>

        <button className={skipButtonStyle}>건너뛰기</button>
      </div>
    </div>
  );
};

export default AuthSchool;
