'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Button from '@/shared/components/button/button';
import Input from '@/shared/components/input/input';
import { useGetRegionNames, usePostAuthJoin } from '@/shared/apis/auth/queries';
import { usePutRegion } from '@/shared/apis/user/queries';
import ArrowBackIcon from '@/shared/assets/svgs/arrow_back.svg';
import {
  bottomDivStyle,
  container,
  InputMenuPlaceholderStyle,
  middleDivStyle,
  paragraphStyle,
  topDivIconStyle,
  topDivStyle,
} from './region-setting.css';

const RegionSetting = () => {
  const router = useRouter();

  const [지역검색키워드, set지역검색키워드] = useState('');

  const { data } = useGetRegionNames();
  const { mutate } = usePutRegion();

  const filteredData = data?.filter((region: string) =>
    region.includes(지역검색키워드),
  );

  const handle지역검색키워드변경 = (e: React.ChangeEvent<HTMLInputElement>) => {
    set지역검색키워드(e.target.value);
  };

  const handle지역선택 = (region: string) => {
    set지역검색키워드(region);
  };

  const handle지역변경 = () => {
    mutate(지역검색키워드, {
      onSuccess: () => {
        router.back();
      },
    });
  };

  return (
    <div className={container}>
      <div className={topDivStyle}>
        <button onClick={() => {}}>
          <ArrowBackIcon className={topDivIconStyle} />
        </button>

        <h1>소속지역 변경</h1>
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
        <Button onClick={handle지역변경}>완료</Button>
      </div>
    </div>
  );
};

export default RegionSetting;
