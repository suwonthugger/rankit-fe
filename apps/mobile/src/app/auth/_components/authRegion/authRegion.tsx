'use client';

import { useState } from 'react';
import CustomAlertDialog from '@/shared/components/alertDialog/AlertDialog';
import Button from '@/shared/components/button/button';
import Input from '@/shared/components/input/input';
import { useGetRegionNames, usePostAuthJoin } from '@/shared/apis/auth/queries';
import ArrowBackIcon from '@/shared/assets/svgs/arrow_back.svg';
import {
  bottomDivStyle,
  container,
  InputMenuPlaceholderStyle,
  middleDivStyle,
  paragraphStyle,
  skipButtonStyle,
  topDivIconStyle,
  topDivStyle,
} from './authRegion.css';

interface AuthRegionProps {
  handleNextStep: (step: string) => void;
  대학교: string;
}

const AuthRegion = ({ handleNextStep, 대학교 }: AuthRegionProps) => {
  const [지역검색키워드, set지역검색키워드] = useState('');

  const { data } = useGetRegionNames();
  const { mutate } = usePostAuthJoin();

  const filteredData = data?.filter((region: string) =>
    region.includes(지역검색키워드),
  );

  const handle지역검색키워드변경 = (e: React.ChangeEvent<HTMLInputElement>) => {
    set지역검색키워드(e.target.value);
  };

  const handle지역선택 = (region: string) => {
    set지역검색키워드(region);
  };

  const handle회원가입 = () => {
    mutate(
      { univName: 대학교, region: 지역검색키워드 },
      {
        onSuccess: () => {
          handleNextStep('completion');
        },
        onError: (error) => {
          alert('회원가입에 실패했습니다. 다시 시도해주세요.');
          console.error(error);
        },
      },
    );
  };

  return (
    <div className={container}>
      <div className={topDivStyle}>
        <button onClick={() => handleNextStep('school')}>
          <ArrowBackIcon className={topDivIconStyle} />
        </button>

        <h1>소속 지역 설정하기</h1>
      </div>

      <div className={middleDivStyle}>
        <Input
          value={지역검색키워드}
          onChange={handle지역검색키워드변경}
          device="mobile"
          placeholder="지역 선택">
          <Input.List>
            {filteredData?.length > 0 ? (
              filteredData.map((region: string) => (
                <Input.MenuItem
                  key={region}
                  onClick={() => handle지역선택(region)}>
                  {region}
                </Input.MenuItem>
              ))
            ) : (
              <p className={InputMenuPlaceholderStyle}>검색 결과가 없습니다.</p>
            )}
          </Input.List>
        </Input>

        <p className={paragraphStyle}>
          본인이 거주 및 출생한 지역을 자유롭게 선택할 수 있습니다.
          <br />
          지역정보는 서비스 내 지역 경쟁 콘텐츠에 사용됩니다.
        </p>
      </div>

      <div className={bottomDivStyle}>
        <Button onClick={handle회원가입}>다음</Button>

        <div className={skipButtonStyle}>
          <CustomAlertDialog
            att="yesOrNo"
            variant="textBtn"
            color="blue"
            title="알림!"
            description={[
              '소속 지역 등록을 건너뜁니다.',
              <br key="br" />,
              '"지역 없음"으로 표시됩니다.',
            ]}
            cancelText="취소"
            confirmText="확인"
            triggerText="건너뛰기"
            onConfirm={() => handleNextStep('completion')}
          />
        </div>
      </div>
    </div>
  );
};

export default AuthRegion;
