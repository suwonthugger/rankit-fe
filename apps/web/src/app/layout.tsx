import '@rankit/styles/src/globals.css';
import type { Metadata } from 'next';
import ReactQueryProviders from '@/shared/apis/ReactQueryClientProvider';
import Footer from '../shared/components/layout/footer/footer';
import Header from '../shared/components/layout/header/header';
import { mainStyle } from './layout.css';

export const metadata: Metadata = {
  title: 'Rankit',
  description: '랭깃에서 깃허브 랭킹을 확인해보세요.',
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <ReactQueryProviders>
      <html lang="ko">
        <body>
          {modal}
          <Header />
          <main className={mainStyle}>{children}</main>
          <Footer />
        </body>
      </html>
    </ReactQueryProviders>
  );
}
