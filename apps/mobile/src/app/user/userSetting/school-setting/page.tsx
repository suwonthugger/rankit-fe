'use client';

import Link from 'next/link';
import { useState } from 'react';
import CustomAlertDialog from '@/shared/components/alertDialog/AlertDialog';
import Button from '@/shared/components/button/button';
import Input from '@/shared/components/input/input';
import ArrowBackIcon from '@/shared/assets/svgs/arrow_back.svg';
import CheckBoxChecked from '@/shared/assets/svgs/check_c_btn.svg';
import CheckBoxUnchecked from '@/shared/assets/svgs/check_u_btn.svg';
import {
  headingStyle,
  sectionStyle,
  container,
  divStyle,
  topDivIconStyle,
  checkDivStyle,
  middleDivParagraphStyle,
  spanStyle,
} from './school-setting.css';

const SchoolSetting = () => {
  const [checked, setChecked] = useState(false);
  const handleToggleCheck = () => setChecked((prev) => !prev);

  return (
    <div className={container}>
      <div className={divStyle}>
        {/* heading */}
        <div className={topDivIconStyle}>
          <Link href="/main-setting">
            <button>
              <ArrowBackIcon />
            </button>
          </Link>
          <p className={headingStyle}>소속학교 변경</p>
        </div>

        {/* changeInfo */}
        <section className={sectionStyle}>
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
          <CustomAlertDialog
            att="noti"
            variant="normalBtn"
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
        </section>
        <section className={sectionStyle}>
          <Input device="mobile" placeholder="인증번호 입력" />
          <Link href="/main-setting">
            <Button>완료</Button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default SchoolSetting;
