import { Input } from '@rankit/ui/index';
import Button from '@/shared/components/button/button';
import ArrowBackIcon from '@/shared/assets/svgs/arrow_back.svg';
import {
  bottomDivStyle,
  container,
  middleDivStyle,
  paragraphStyle,
  skipButtonStyle,
  topDivIconStyle,
  topDivStyle,
} from './authRegion.css';

interface AuthRegionProps {
  handleNextStep: (step: string) => void;
}

const AuthRegion = ({ handleNextStep }: AuthRegionProps) => {
  return (
    <div className={container}>
      <div className={topDivStyle}>
        <button onClick={() => handleNextStep('school')}>
          <ArrowBackIcon className={topDivIconStyle} />
        </button>

        <h1>소속 지역 설정하기</h1>
      </div>

      <div className={middleDivStyle}>
        <Input device="mobile" placeholder="지역 선택" />

        <p className={paragraphStyle}>
          본인이 거주 및 출생한 지역을 자유롭게 선택할 수 있습니다.
          <br />
          지역정보는 서비스 내 지역 경쟁 콘텐츠에 사용됩니다.
        </p>
      </div>

      <div className={bottomDivStyle}>
        <Button onClick={() => handleNextStep('completion')}>다음</Button>

        <button className={skipButtonStyle}>건너뛰기</button>
      </div>
    </div>
  );
};

export default AuthRegion;
