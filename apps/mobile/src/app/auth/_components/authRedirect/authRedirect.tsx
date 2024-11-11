'use client';

import { Spinner } from '@radix-ui/themes';
import { useSearchParams, useRouter } from 'next/navigation';
import React, { Suspense, useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { container } from './authRedirect.css';

interface AuthRedirectProps {
  handleNextStep: (step: string) => void;
}

const setCookie = (name: string, value: string, days = 7) => {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000); // 쿠키 만료일 설정
  document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/; domain=.rankit.run; Secure`;
};

const AuthRedirect = ({ handleNextStep }: AuthRedirectProps) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const searchParams = useSearchParams();

  const accessToken = searchParams.get('accessToken');
  const refreshToken = searchParams.get('refreshToken');
  const isRegistered = searchParams.get('isRegistered') === 'true';

  useEffect(() => {
    if (accessToken && refreshToken) {
      setCookie('accessToken', accessToken);
      setCookie('refreshToken', refreshToken);
    } else {
      router.replace('?step=github', { scroll: false });
      console.error('토큰이 제공되지 않았습니다.');
      return;
    }

    if (isRegistered) {
      queryClient.invalidateQueries({ queryKey: ['userInfo'] });
      window.location.href = '/';
    } else {
      handleNextStep('school');
    }
  }, []);

  return (
    <Suspense fallback={<Spinner size="3" />}>
      <div className={container}>
        <Spinner size="3" />
      </div>
    </Suspense>
  );
};

export default AuthRedirect;
