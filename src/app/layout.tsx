import type { Metadata } from 'next';
import '@/shared/styles/globals.css';

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
      <body>{children}</body>
    </html>
  );
}
