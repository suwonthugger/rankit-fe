// apps/web/middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const host = req.headers.get('host') || '';
  const pathname = req.nextUrl.pathname;

  // 모바일 기기 감지
  const userAgent = req.headers.get('user-agent') || '';
  const isMobile =
    /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      userAgent,
    );

  if (host === 'm.rankit.run') {
    return NextResponse.next();
  }

  if (isMobile) {
    url.hostname = 'm.rankit.run';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*', // 모든 경로에 적용
};
