import { useEffect, useState } from 'react';
import { usePutIntroduction } from '@/shared/apis/user/queries';
import { GetUserIntroduction } from '@/shared/apis/user/types';

export const useIntroduction = (초기값?: GetUserIntroduction.Res) => {
  const defaultValues = '//수정 버튼을 눌러 자기소개를 수정해주세요';

  const 소개입력초기값 = {
    title: defaultValues,
    oneLiner: defaultValues,
    goodAt: defaultValues,
    learningGoal: defaultValues,
  };

  const [소개입력값, set소개입력값] = useState(초기값 || 소개입력초기값);

  const handle소개입력값변경 = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    set소개입력값((prev) => ({ ...prev, [name]: value }));
  };

  const { mutate } = usePutIntroduction();

  const handle소개입력값초기화 = () => {
    set소개입력값(초기값 || 소개입력초기값);
  };

  const 소개변경함수 = () => {
    mutate(소개입력값);
  };

  useEffect(() => {
    if (초기값) {
      set소개입력값(초기값);
    }
  }, [초기값]);

  return {
    소개입력값,
    handle소개입력값변경,
    handle소개입력값초기화,
    소개변경함수,
  };
};
