import CircleImage from '@/shared/components/circleImage/circleImage';
import SVGTier from '../SVGTier/SVGTier';
import ButtonGithub from './_components/buttonGithub/buttonGithub';
import { TierTypes } from './_types';
import {
  paragraphLanguageStyle,
  headingNameStyle,
  divStyle,
  nameDivStyle,
  containerStyle,
} from './profile.css';

interface ProfileProps {
  profileImg: string;
  language: string;
  userName: string;
  tier?: TierTypes;
}

const Profile = ({ profileImg, language, userName, tier }: ProfileProps) => {
  return (
    <div className={containerStyle}>
      <CircleImage src={profileImg} size="lg" />

      <div className={divStyle}>
        <p className={paragraphLanguageStyle}>{language}</p>

        <div className={nameDivStyle}>
          <SVGTier tier={tier} />
          <h2 className={headingNameStyle}>{userName}</h2>
        </div>
      </div>

      <a
        href={`https://github.com/${userName}`}
        target="_blank"
        aria-label={`${userName}의 GitHub 프로필 보기`}>
        <ButtonGithub />
      </a>
    </div>
  );
};

export default Profile;
