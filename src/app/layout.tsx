import type { Metadata } from 'next';
import Footer from '@/shared/components/layout/footer/footer';
import Header from '@/shared/components/layout/header/header';
import '@/shared/styles/globals.css';
import { mainStyle } from './layout.css';

export const metadata: Metadata = {
  title: 'Rankit',
  description: '랭깃에서 깃허브 랭킹을 확인해보세요.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main className={mainStyle}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
