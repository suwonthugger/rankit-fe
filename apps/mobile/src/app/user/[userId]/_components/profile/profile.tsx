import CircleImage from '@/shared/components/circleImage/circleImage';
import SVGTier from '../SVGTier/SVGTier';
import ButtonGithub from './_components/buttonGithub/buttonGithub';
import {
  paragraphLanguageStyle,
  headingNameStyle,
  divStyle,
  containerStyle,
  profileImgDivStyle,
  tierImgStyle,
} from './profile.css';
import { TierTypes } from './types';

interface ProfileProps {
  profileImg: string;
  language: string;
  userName: string;
  tier?: TierTypes;
}

const Profile = ({ profileImg, language, userName, tier }: ProfileProps) => {
  return (
    <div className={containerStyle}>
      <div className={profileImgDivStyle}>
        <SVGTier size="Lg" className={tierImgStyle} tier={tier} />
        <CircleImage src={profileImg} size="mobileLg" />
      </div>

      <div className={divStyle}>
        <p className={paragraphLanguageStyle}>{language}</p>
        <h2 className={headingNameStyle}>{userName}</h2>

        <a
          href={`https://github.com/${userName}`}
          target="_blank"
          aria-label={`${userName}의 GitHub 프로필 보기`}>
          <ButtonGithub />
        </a>
      </div>
    </div>
  );
};

export default Profile;
