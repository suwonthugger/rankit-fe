'use client';

import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import type { Metadata } from 'next';
import { useEffect } from 'react';
import Footer from '@/shared/components/layout/footer/footer';
import Header from '@/shared/components/layout/header/header';
import ReactQueryProviders from '@/shared/apis/ReactQueryClientProvider';
import '@/shared/styles/globals.css';
import { container, mainStyle } from './layout.css';

export const metadata: Metadata = {
  title: 'rankit',
  description: 'rankit에서 나의 점수를 확인해보세요.',
  openGraph: {
    title: 'rankit',
    description: 'rankit에서 나의 점수를 확인해보세요.',
    url: 'https://rankit.run',
    images: [
      {
        url: '/images/rankit-preview.jpg',
        width: 800,
        height: 400,
        alt: 'rankit 서비스 미리보기 이미지',
      },
    ],
  },
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  useEffect(() => {
    // 모바일 기기 확인 함수
    const isMobile = () => {
      return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      );
    };

    // 현재 호스트가 모바일용 도메인이 아니고 모바일 기기일 경우 리다이렉트
    if (isMobile() && window.location.hostname === 'rankit.run') {
      const newUrl = `https://m.rankit.run${window.location.pathname}`;
      window.location.replace(newUrl);
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body>
        <ReactQueryProviders>
          <Theme className={container}>
            {modal}
            <Header />
            <main className={mainStyle}>{children}</main>
            <Footer />
          </Theme>
        </ReactQueryProviders>
      </body>
    </html>
  );
}
