'use client';

import { useState } from 'react';
import CustomAlertDialog from '@/shared/components/alertDialog/AlertDialog';
import Button from '@/shared/components/button/button';
import Input from '@/shared/components/input/input';
import {
  useGetSchoolNames,
  usePostUnivCertificate,
  usePostUnivValidate,
} from '@/shared/apis/auth/queries';
import CheckboxEmptyIcon from '@/shared/assets/svgs/check_btn_empty.svg';
import CheckboxFillIcon from '@/shared/assets/svgs/check_btn_fill.svg';
import {
  authNumberDivStyle,
  checkboxButtonStyle,
  flexCenter,
  headingStyle,
  InputMenuPlaceholderStyle,
  paragraphStyle,
  rightDivStyle,
  sectionStyle,
  skipButtonStyle,
} from './authSchool.css';

interface AuthSchoolProps {
  handleNextStep: (step: string) => void;
  handle대학교변경: (대학교이름: string) => void;
}

const AuthSchool = ({ handleNextStep, handle대학교변경 }: AuthSchoolProps) => {
  const [대학교검색키워드, set대학교검색키워드] = useState('');
  const [대학교이메일, set대학교이메일] = useState('');
  const [약관동의, set약관동의] = useState(false);
  const [인증번호, set인증번호] = useState('');

  const Checkbox = 약관동의 ? CheckboxFillIcon : CheckboxEmptyIcon;

  const { data } = useGetSchoolNames();
  const { mutate: 인증번호전송함수 } = usePostUnivCertificate();
  const { mutate: 인증번호검증함수 } = usePostUnivValidate();

  const filteredData = data?.filter((school: string) =>
    school.includes(대학교검색키워드),
  );

  const handle대학교검색키워드변경 = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    set대학교검색키워드(e.target.value);
  };

  const handle대학교선택 = (school: string) => {
    set대학교검색키워드(school);
  };

  const handle대학교이메일변경 = (e: React.ChangeEvent<HTMLInputElement>) => {
    set대학교이메일(e.target.value);
  };

  const handle약관동의 = () => {
    set약관동의(!약관동의);
  };

  const handle인증번호전송 = () => {
    인증번호전송함수(
      { email: 대학교이메일, univName: 대학교검색키워드 },
      {
        onSuccess: () => {
          alert('인증번호가 전송되었습니다.');
        },
        onError: (error) => {
          alert('인증번호 전송에 실패했습니다. 다시 시도해주세요.');
          console.error(error);
        },
      },
    );
  };

  const handle인증번호변경 = (e: React.ChangeEvent<HTMLInputElement>) => {
    set인증번호(e.target.value);
  };

  const handle인증번호검증 = () => {
    인증번호검증함수(
      { email: 대학교이메일, univName: 대학교검색키워드, code: 인증번호 },
      {
        onSuccess: () => {
          alert('인증번호가 검증되었습니다.');
          handle대학교변경(대학교검색키워드);
          handleNextStep('region');
          console.log('fdsaf');
        },
        onError: (error) => {
          alert('인증번호 검증에 실패했습니다. 다시 시도해주세요.');
          console.error(error);
        },
      },
    );
  };

  const handle건너뛰기 = () => {
    handleNextStep('region');
    handle대학교변경('');
  };

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
        <Input
          variant="search"
          placeholder="대학교 검색"
          value={대학교검색키워드}
          onChange={handle대학교검색키워드변경}>
          <Input.List>
            {filteredData?.length > 0 ? (
              filteredData.map((school: string) => (
                <Input.MenuItem
                  key={school}
                  onClick={() => handle대학교선택(school)}>
                  {school}
                </Input.MenuItem>
              ))
            ) : (
              <p className={InputMenuPlaceholderStyle}>검색 결과가 없습니다.</p>
            )}
          </Input.List>
        </Input>
        <Input
          value={대학교이메일}
          onChange={handle대학교이메일변경}
          placeholder="대학 이메일 확인"
          type="email"
        />

        <div>
          <button onClick={handle약관동의} className={checkboxButtonStyle}>
            <Checkbox />
            서비스 제공을 목적으로 개인정보 수집 및 이용(필수)에 동의 합니다.
          </button>
        </div>

        <div className={flexCenter}>
          <Button onClick={handle인증번호전송}>인증번호 전송</Button>
        </div>

        <div className={authNumberDivStyle}>
          <Input
            value={인증번호}
            onChange={handle인증번호변경}
            placeholder="인증번호 입력"
          />

          <div className={flexCenter}>
            <Button onClick={handle인증번호검증}>다음</Button>
          </div>

          <div className={skipButtonStyle}>
            <CustomAlertDialog
              att="yesOrNo"
              variant="textBtn"
              color="blue"
              title="알림!"
              description={[
                '소속 대학교 등록을 건너뜁니다.',
                <br key="br" />,
                '"학교 없음"으로 표시됩니다.',
              ]}
              cancelText="취소"
              confirmText="확인"
              triggerText="건너뛰기"
              onConfirm={handle건너뛰기}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthSchool;
