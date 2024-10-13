'use client';

import Link from 'next/link';
import { useState } from 'react';
import CloseIcon from '@/shared/assets/svgs/close_icon.svg';
import HamburgerIcon from '@/shared/assets/svgs/menu_icon.svg';
import Logo from '@/shared/assets/svgs/rankit_logo.svg';
import {
  headerStyle,
  listStyle,
  buttonStyle,
  ulStyle,
  topDivStyle,
  topRightDivStyle,
} from './header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleToggleMenu = () => setIsMenuOpen((prev) => !prev);

  const isLoggedIn = true;

  return (
    <header className={headerStyle}>
      <div className={topDivStyle}>
        <Link href="/">
          <Logo />
        </Link>

        <div className={topRightDivStyle}>
          <button className={buttonStyle[isLoggedIn ? 'primary' : 'secondary']}>
            {isLoggedIn ? '로그인' : '내정보'}
          </button>

          <button onClick={handleToggleMenu}>
            {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>
      </div>

      <nav onClick={handleToggleMenu}>
        <ul className={ulStyle[isMenuOpen ? 'open' : 'close']}>
          <li>
            <Link href="/school">
              <div className={listStyle}>school rank</div>
            </Link>
          </li>

          <li>
            <Link href="/region">
              <div className={listStyle}>region rank</div>
            </Link>
          </li>

          <li>
            <Link href="/board">
              <div className={listStyle}>board</div>
            </Link>
          </li>

          <li>
            <Link href="/about">
              <div className={listStyle}>about</div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
