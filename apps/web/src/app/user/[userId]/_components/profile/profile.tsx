import { CircleImage } from '@rankit/ui';
import SVGTier from '../SVGTier/SVGTier';
import ButtonGithub from './_components/buttonGithub/buttonGithub';
import {
  paragraphLanguageStyle,
  headingNameStyle,
  divStyle,
  nameDivStyle,
  containerStyle,
} from './profile.css';

const Profile = () => {
  return (
    <div className={containerStyle}>
      <CircleImage size="lg" />

      <div className={divStyle}>
        <p className={paragraphLanguageStyle}>javascript</p>

        <div className={nameDivStyle}>
          <SVGTier />
          <h2 className={headingNameStyle}>jamooong</h2>
        </div>
      </div>

      <ButtonGithub />
    </div>
  );
};

export default Profile;
