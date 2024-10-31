import { useState } from 'react';
import Button from '@/shared/components/button/button';
import Input from '@/shared/components/input/input';
import { useGetRegionNames, usePostAuthJoin } from '@/shared/apis/auth/queries';
import {
  nextDivStyle,
  rightDivParagraphStyle,
  flexCenter,
  headingStyle,
  paragraphStyle,
  rightDivStyle,
  sectionStyle,
  skipButtonStyle,
  InputMenuPlaceholderStyle,
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

  console.log(대학교, 지역검색키워드);
  const handle회원가입 = () => {
    mutate(
      { univName: 대학교, regionName: 지역검색키워드 },
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
    <section className={sectionStyle}>
      <div>
        <h1 className={headingStyle}>
          소속 지역
          <br />
          설정하기
        </h1>
        <p className={paragraphStyle}>
          나의 코딩실력은? 우리 학교는 개발을 잘하나? 우리 지역은?
        </p>
      </div>

      <div className={rightDivStyle}>
        <Input
          value={지역검색키워드}
          onChange={handle지역검색키워드변경}
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

        <p className={rightDivParagraphStyle}>
          본인이 거주 및 출생한 지역을 자유롭게 선택할 수 있습니다. 지역정보는
          서비스 내 지역 경쟁
          <br />
          콘텐츠에 사용됩니다.
        </p>

        <div className={nextDivStyle}>
          <div className={flexCenter} onClick={handle회원가입}>
            <Button>다음</Button>
          </div>

          <button className={skipButtonStyle}>건너뛰기</button>
        </div>
      </div>
    </section>
  );
};

export default AuthRegion;
