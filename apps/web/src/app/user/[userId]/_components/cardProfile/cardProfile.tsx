import Image from 'next/image';
import SVGTier from '../SVGTier/SVGTier';
import {
  containerStyle,
  contentDivStyle,
  imageDivStyle,
  labelDivStyle,
  labelStyle,
  languageParagraphStyle,
  titleDivStyle,
} from './cardProfile.css';

interface CardProfileProps {
  profileSrc?: string;
  language: string;
  tier: number;
  userName: string;
  school: string;
  region: string;
}

const CardProfile = ({
  profileSrc = 'https://avatars.githubusercontent.com/u/127329855?v=4',
  language,
  tier,
  userName,
  school,
  region,
}: CardProfileProps) => {
  return (
    <div className={containerStyle}>
      <div className={imageDivStyle}>
        <Image
          src={profileSrc}
          width={460}
          height={460}
          alt={`${userName} 프로필 이미지`}
          className={imageDivStyle}
        />
      </div>

      <div className={contentDivStyle}>
        <p className={languageParagraphStyle}>{language}</p>

        <div className={titleDivStyle}>
          <SVGTier size="sm" tier={tier} />
          <h3>{userName}</h3>
        </div>

        <div className={labelDivStyle}>
          <span className={labelStyle}>{school}</span>
          <span className={labelStyle}>{region}</span>
        </div>
      </div>
    </div>
  );
};

export default CardProfile;
