import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const host = req.headers.get('host') || '';

  // 모바일 기기 감지
  const userAgent = req.headers.get('user-agent') || '';
  const isMobile =
    /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      userAgent,
    );

  if (isMobile) {
    let newHostname: string;

    if (host.startsWith('www.')) {
      // 호스트네임이 'www.'로 시작하면 'www.m.'으로 변경
      newHostname = `www.m.${host.slice(4)}`;
    } else {
      // 그렇지 않으면 기존 방식대로 'm.'을 앞에 추가
      newHostname = `m.${host}`;
    }

    // 호스트네임을 변경하여 URL 업데이트
    url.hostname = newHostname;

    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*', // 모든 경로에 적용
};
