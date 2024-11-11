import React from 'react';
import { contentStyle, footerStlye } from './footer.css';

const Footer = () => {
  return (
    <footer className={footerStlye}>
      <div className={contentStyle}>
        <button>개인정보처리방침</button>
        <button>서비스 이용약관</button>
        <p>Contact | rankit.run@gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;
