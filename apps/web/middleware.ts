import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const host = req.headers.get('host') || '';
  const pathname = req.nextUrl.pathname;

  console.log(`Middleware invoked for host: ${host}, path: ${pathname}`);

  // 모바일 기기 감지
  const userAgent = req.headers.get('user-agent') || '';
  const isMobile =
    /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      userAgent,
    );

  console.log(isMobile);

  if (isMobile) {
    // 모바일 서브도메인으로 리다이렉션
    url.hostname = `m.${url.hostname}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*', // 모든 경로에 적용
};
