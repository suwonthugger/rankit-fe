import Button from '@/shared/components/button/button';
import Input from '@/shared/components/input/input';
import { DivParagraphStyle, DivStyle } from './modalContentRegionSetting.css';

const ModalContentRegionSetting = () => {
  return (
    <div className={DivStyle}>
      <Input placeholder="지역 선택" />

      <p className={DivParagraphStyle}>
        본인이 거주 및 출생한 지역을 자유롭게 선택할 수 있습니다. 지역정보는
        서비스 내 지역 경쟁
        <br />
        콘텐츠에 사용됩니다.
      </p>

      <Button>완료</Button>
    </div>
  );
};

export default ModalContentRegionSetting;
