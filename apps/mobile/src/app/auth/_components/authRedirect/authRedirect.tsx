'use client';

import { Spinner } from '@radix-ui/themes';
import { useSearchParams, useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
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
    console.log(isRegistered);
    if (isRegistered) {
      queryClient.invalidateQueries({ queryKey: ['userInfo'] });
      router.replace('/', { scroll: false });
    } else {
      handleNextStep('school');
    }
  }, []);

  return (
    <div className={container}>
      <Spinner size="3" />
    </div>
  );
};

export default AuthRedirect;
