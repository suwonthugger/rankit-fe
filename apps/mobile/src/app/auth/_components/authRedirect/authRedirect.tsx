'use client';

import { Spinner } from '@radix-ui/themes';
import { useSearchParams, useRouter } from 'next/navigation';
import React, { Suspense, useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { container } from './authRedirect.css';

interface AuthRedirectProps {
  handleNextStep: (step: string) => void;
}

const AuthRedirect = ({ handleNextStep }: AuthRedirectProps) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const searchParams = useSearchParams();

  const accessToken = searchParams.get('accessToken');
  const refreshToken = searchParams.get('refreshToken');
  const isRegistered = searchParams.get('isRegistered') === 'true';

  useEffect(() => {
    if (accessToken && refreshToken) {
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
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
