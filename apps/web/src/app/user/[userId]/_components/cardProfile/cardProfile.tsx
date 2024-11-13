import Image from 'next/image';
import SVGTier from '../SVGTier/SVGTier';
import { TierTypes } from '../profile/_types';
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
  profileImg?: string;
  language: string;
  grade: TierTypes;
  username: string;
  schoolName: string;
  regionName: string;
}

const CardProfile = ({
  profileImg = 'https://avatars.githubusercontent.com/u/127329855?v=4',
  language,
  grade,
  username,
  schoolName,
  regionName,
}: CardProfileProps) => {
  return (
    <div className={containerStyle}>
      <div className={imageDivStyle}>
        <Image
          src={profileImg}
          width={460}
          height={460}
          alt={`${username} 프로필 이미지`}
          className={imageDivStyle}
        />
      </div>

      <div className={contentDivStyle}>
        <p className={languageParagraphStyle}>{language}</p>

        <div className={titleDivStyle}>
          <SVGTier size="sm" tier={grade} />
          <h3>{username}</h3>
        </div>

        <div className={labelDivStyle}>
          {schoolName && <span className={labelStyle}>{schoolName}</span>}
          {regionName && <span className={labelStyle}>{regionName}</span>}
        </div>
      </div>
    </div>
  );
};

export default CardProfile;
