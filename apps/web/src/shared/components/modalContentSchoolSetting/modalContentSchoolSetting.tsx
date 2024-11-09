'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import Button from '@/shared/components/button/button';
import Input from '@/shared/components/input/input';
import {
  useGetSchoolNames,
  usePostUnivCertificate,
  usePostUnivValidate,
} from '@/shared/apis/auth/queries';
import { usePutSchool } from '@/shared/apis/user/queries';
import CheckboxEmptyIcon from '@/shared/assets/svgs/check_btn_empty.svg';
import CheckboxFillIcon from '@/shared/assets/svgs/check_btn_fill.svg';
import CustomAlertDialog from '../alertDialog/AlertDialog';
import {
  DivStyle,
  DivInputStyle,
  checkboxButtonStyle,
  InputMenuPlaceholderStyle,
} from './modalContentSchoolSetting.css';

export function ModalContentSchoolSetting() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const [대학교검색키워드, set대학교검색키워드] = useState('');
  const [대학교이메일, set대학교이메일] = useState('');
  const [약관동의, set약관동의] = useState(false);
  const [인증번호, set인증번호] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const { data } = useGetSchoolNames();
  const { mutate: 인증번호전송함수 } = usePostUnivCertificate();
  const { mutate: 학교변경함수 } = usePutSchool();

  const Checkbox = 약관동의 ? CheckboxFillIcon : CheckboxEmptyIcon;
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
          setIsDialogOpen(true);
          queryClient.invalidateQueries({ queryKey: ['userInfo'] });
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

  const handle대학교변경 = () => {
    학교변경함수(
      {
        modifySchoolName: 대학교검색키워드,
        email: 대학교이메일,
        certificateCode: 인증번호,
      },
      {
        onSuccess: () => {
          alert('학교변경이 완료되었습니다.');
          router.back();
        },
        onError: (error) => {
          alert('인증번호 검증에 실패했습니다. 다시 시도해주세요.');
          console.error(error);
        },
      },
    );
  };

  const handle다이얼로그닫기 = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className={DivStyle}>
      <div className={DivInputStyle}>
        <Input
          value={대학교검색키워드}
          onChange={handle대학교검색키워드변경}
          variant="search"
          placeholder="대학교 검색">
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
        />

        <button onClick={handle약관동의} className={checkboxButtonStyle}>
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
          isOpen={isDialogOpen}
          triggerText="인증번호 전송"
          onTrigger={handle인증번호전송}
          onConfirm={handle다이얼로그닫기}
        />
      </div>

      <div className={DivInputStyle}>
        <Input
          value={인증번호}
          onChange={handle인증번호변경}
          placeholder="인증번호 입력"
        />
        <Button onClick={handle대학교변경}> 다음</Button>
      </div>
    </div>
  );
}
