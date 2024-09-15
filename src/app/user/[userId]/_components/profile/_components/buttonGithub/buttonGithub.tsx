import GithubIcon from '@/shared/assets/svg/github_btn.svg';
import { buttonStyle, paragraphGithubStyle } from './buttonGithub.css';

const ButtonGithub = () => {
  return (
    <button className={buttonStyle}>
      <GithubIcon />
      <p className={paragraphGithubStyle}>github</p>
    </button>
  );
};

export default ButtonGithub;
