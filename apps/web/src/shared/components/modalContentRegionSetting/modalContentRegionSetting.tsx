'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Button from '@/shared/components/button/button';
import Input from '@/shared/components/input/input';
import { useGetRegionNames } from '@/shared/apis/auth/queries';
import { usePutRegion } from '@/shared/apis/user/queries';
import {
  DivParagraphStyle,
  DivStyle,
  InputMenuPlaceholderStyle,
} from './modalContentRegionSetting.css';

const ModalContentRegionSetting = () => {
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
    <div className={DivStyle}>
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

      <p className={DivParagraphStyle}>
        본인이 거주 및 출생한 지역을 자유롭게 선택할 수 있습니다. 지역정보는
        서비스 내 지역 경쟁
        <br />
        콘텐츠에 사용됩니다.
      </p>

      <Button onClick={handle지역변경}>완료</Button>
    </div>
  );
};

export default ModalContentRegionSetting;
