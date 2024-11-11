import Link from 'next/link';
import React from 'react';
import { contentStyle, footerStlye, linkBtnStyle } from './footer.css';

const Footer = () => {
  return (
    <footer className={footerStlye}>
      <div className={contentStyle}>
        <Link href="/privacy">
          <button className={linkBtnStyle}>개인정보 처리방침</button>
        </Link>
        <Link href="/tos">
          <button className={linkBtnStyle}>서비스 이용약관</button>
        </Link>
        <p>Contact | rankit.run@gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;
