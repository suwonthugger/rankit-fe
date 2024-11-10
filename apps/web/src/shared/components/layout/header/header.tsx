'use client';

import Link from 'next/link';
import React, { useRef, useState } from 'react';
import useClickOutside from '@/shared/hooks/useClickOutside';
import { useGetUserInfo } from '@/shared/apis/auth/queries';
import { getAuthHeader } from '@/shared/utils/auth';
import CloseIcon from '@/shared/assets/svgs/close_icon.svg';
import Logo from '@/shared/assets/svgs/logo_sm.svg';
import HamburgerIcon from '@/shared/assets/svgs/menu_icon.svg';
import CircleImage from '../../circleImage/circleImage';
import {
  contentStyle,
  headerStyle,
  navStyle,
  under700headerStyle,
  under700listStyle,
  under700buttonStyle,
  under700ulStyle,
  under700topDivStyle,
  under700topRightDivStyle,
} from './header.css';

const Header = () => {
  const [isUnder700, setIsUnder700] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleToggleMenu = () => setIsMenuOpen((prev) => !prev);
  const handleMenuClose = () => setIsMenuOpen(false);

  const { data } = useGetUserInfo();

  const profileLink = data ? `/user/${data.username}` : '/auth?step=github';

  const menuRef = useRef(null);

  useClickOutside(menuRef, handleMenuClose);

  React.useLayoutEffect(() => {
    const isMobile = () => {
      return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      );
    };

    if (isMobile() && window.location.hostname === 'www.rankit.run') {
      const newUrl = `https://m.rankit.run${window.location.pathname}${window.location.search}`;
      window.location.replace(newUrl);
    }
  });

  React.useEffect(() => {
    setIsLoggedIn(!!getAuthHeader());

    const handleResize = () => {
      if (window.innerWidth <= 700) {
        console.log('화면 너비가 700px 이하입니다.');
        setIsUnder700(true);
      } else {
        console.log('화면 너비가 700px 초과입니다.');
        setIsUnder700(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // 초기 렌더링 시 체크

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {!isUnder700 ? (
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

            <Link href={profileLink}>
              <CircleImage src={data?.profileImg} />
            </Link>
          </div>
        </header>
      ) : (
        <header className={under700headerStyle}>
          <div className={under700topDivStyle}>
            <Link href="/">
              <Logo />
            </Link>

            <div className={under700topRightDivStyle}>
              <Link href={profileLink}>
                <button
                  className={
                    under700buttonStyle[isLoggedIn ? 'secondary' : 'primary']
                  }>
                  {isLoggedIn ? '내 정보' : '로그인'}
                </button>
              </Link>

              <button onClick={handleToggleMenu}>
                {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
              </button>
            </div>
          </div>

          <nav onClick={handleToggleMenu}>
            <ul
              ref={menuRef}
              className={under700ulStyle[isMenuOpen ? 'open' : 'close']}>
              <li>
                <Link href="/school">
                  <div className={under700listStyle}>school rank</div>
                </Link>
              </li>

              <li>
                <Link href="/region">
                  <div className={under700listStyle}>region rank</div>
                </Link>
              </li>

              <li>
                <Link href="/board">
                  <div className={under700listStyle}>board</div>
                </Link>
              </li>

              <li>
                <Link href="/about">
                  <div className={under700listStyle}>about</div>
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      )}
    </>
  );
};

export default Header;
