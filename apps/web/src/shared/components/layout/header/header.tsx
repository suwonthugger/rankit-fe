'use client';

import Link from 'next/link';
import { useGetUserInfo } from '@/shared/apis/auth/queries';
import Logo from '@/shared/assets/svg/logo_sm.svg';
import CircleImage from '../../circleImage/circleImage';
import { contentStyle, headerStyle, navStyle } from './header.css';

const Header = () => {
  const { data } = useGetUserInfo();

  return (
    <header className={headerStyle}>
      <div className={contentStyle}>
        <Link href="/">
          <Logo />
        </Link>
        <nav className={navStyle}>
          <Link href="/school">school rank</Link>
          <Link href="/region">regional rank</Link>
          <Link href="/board">board</Link>
          <Link href="/about">about</Link>
        </nav>

        <CircleImage src={data?.profileImg} />
      </div>
    </header>
  );
};

export default Header;
