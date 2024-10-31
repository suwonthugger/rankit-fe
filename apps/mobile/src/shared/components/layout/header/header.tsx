'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';
import useClickOutside from '@/shared/hooks/useClickOutside';
import { getAuthHeader } from '@/shared/utils/auth';
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
  const handleMenuClose = () => setIsMenuOpen(false);

  const menuRef = useRef(null);

  useClickOutside(menuRef, handleMenuClose);

  const token = !!getAuthHeader();

  return (
    <header className={headerStyle}>
      <div className={topDivStyle}>
        <Link href="/">
          <Logo />
        </Link>

        <div className={topRightDivStyle}>
          {token ? (
            <button className={buttonStyle['secondary']}>내정보</button>
          ) : (
            <Link href="/auth?step=github">
              <button className={buttonStyle['primary']}>로그인</button>
            </Link>
          )}

          <button onClick={handleToggleMenu}>
            {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>
      </div>

      <nav onClick={handleToggleMenu}>
        <ul ref={menuRef} className={ulStyle[isMenuOpen ? 'open' : 'close']}>
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
