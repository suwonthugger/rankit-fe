import Button from '@/shared/components/button/button';
import Logo from '@/shared/assets/svg/logo_lg.svg';
import AuthGithub from './_components/authGithub/authGithub';
import { divStyle } from './authPage.css';

const AuthPage = () => {
  return (
    <div className={divStyle}>
      <AuthGithub />
    </div>
  );
};

export default AuthPage;
