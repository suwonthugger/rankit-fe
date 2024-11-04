import CircleImage from '@/shared/components/circleImage/circleImage';
import SVGTier from '../SVGTier/SVGTier';
import ButtonGithub from './_components/buttonGithub/buttonGithub';
import {
  paragraphLanguageStyle,
  headingNameStyle,
  divStyle,
  nameDivStyle,
  containerStyle,
  profileImgDivStyle,
  tierImgStyle,
} from './profile.css';

const Profile = () => {
  return (
    <div className={containerStyle}>
      <div className={profileImgDivStyle}>
        <SVGTier size="lg" className={tierImgStyle} />
        <CircleImage size="mobileLg" />
      </div>

      <div className={divStyle}>
        <p className={paragraphLanguageStyle}>javascript</p>
        <h2 className={headingNameStyle}>jamooong</h2>
        <ButtonGithub />
      </div>
    </div>
  );
};

export default Profile;
