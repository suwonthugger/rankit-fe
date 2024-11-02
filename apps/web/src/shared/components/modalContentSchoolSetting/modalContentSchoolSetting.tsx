import Button from '@/shared/components/button/button';
import Input from '@/shared/components/input/input';
import Checkbox from '@/shared/assets/svgs/check_btn_fill.svg';
import CustomAlertDialog from '../alertDialog/AlertDialog';
import {
  DivStyle,
  DivInputStyle,
  checkboxButtonStyle,
} from './modalContentSchoolSetting.css';

export function ModalContentSchoolSetting() {
  return (
    <div className={DivStyle}>
      <div className={DivInputStyle}>
        <Input variant="search" placeholder="대학교 검색" />
        <Input placeholder="대학 이메일 확인" />
        <button className={checkboxButtonStyle}>
          <Checkbox />
          서비스 제공을 목적으로 개인정보 수집 및 이용(필수)에 동의 합니다.
        </button>
        <CustomAlertDialog
          variant="normalBtn"
          att="noti"
          color="blue"
          title="알림!"
          description={[
            '입력하신 이메일 주소로',
            <br key="br" />,
            '인증번호를 보냈습니다',
          ]}
          cancelText="취소"
          confirmText="확인"
          triggerText="인증번호 전송"
        />
      </div>

      <div className={DivInputStyle}>
        <Input placeholder="인증번호 입력" />
        <Button>다음</Button>
      </div>
    </div>
  );
}
