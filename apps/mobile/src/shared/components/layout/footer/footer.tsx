import Link from 'next/link';
import { footerStyle } from './footer.css';

const Footer = () => {
  return (
    <footer className={footerStyle}>
      <Link href="/privacy">
        <button>개인정보 처리방침</button>
      </Link>
      <Link href="/tos">
        <button>서비스 이용약관</button>
      </Link>
      <Link href="/">Contact | rankit.run@gmail.com</Link>
    </footer>
  );
};

export default Footer;
