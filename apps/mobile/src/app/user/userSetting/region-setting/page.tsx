'use client';

import Link from 'next/link';
import { useState } from 'react';
import Button from '@/shared/components/button/button';
import Input from '@/shared/components/input/input';
import ArrowBackIcon from '@/shared/assets/svgs/arrow_back.svg';
import {
  headingStyle,
  sectionStyle,
  container,
  divStyle,
  topDivIconStyle,
  middleDivParagraphStyle,
} from './region-setting.css';

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
          <p className={headingStyle}>소속지역 변경</p>
        </div>

        {/* changeInfo */}
        <section className={sectionStyle}>
          <Input device="mobile" placeholder="지역 선택" />

          <p className={middleDivParagraphStyle}>
            본인이 거주 및 출생한 지역을 자유롭게 선택할 수 있습니다. 지역정보는
            서비스 내 지역 경쟁 콘텐츠에 사용됩니다.
          </p>

          <Button>인증번호 전송</Button>
        </section>
      </div>
    </div>
  );
};

export default SchoolSetting;
