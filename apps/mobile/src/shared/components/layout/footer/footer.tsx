import Link from 'next/link';
import { footerStyle } from './footer.css';

const Footer = () => {
  return (
    <footer className={footerStyle}>
      <Link href="/">개인정보처리방침</Link>
      <Link href="/">서비스 이용약관</Link>
      <Link href="/">Contact | gitbal2019@gmail.com</Link>
    </footer>
  );
};

export default Footer;
