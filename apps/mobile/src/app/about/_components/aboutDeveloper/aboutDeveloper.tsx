import Image, { StaticImageData } from 'next/image';
import Tier1 from '@/shared/assets/svgs/tier/sm/tier_1.svg';
import Tier2 from '@/shared/assets/svgs/tier/sm/tier_2.svg';
import Tier3 from '@/shared/assets/svgs/tier/sm/tier_3.svg';
import Tier4 from '@/shared/assets/svgs/tier/sm/tier_4.svg';
import Tier5 from '@/shared/assets/svgs/tier/sm/tier_5.svg';
import Tier6 from '@/shared/assets/svgs/tier/sm/tier_6.svg';
import {
  divStyle,
  divMainContentStyle,
  divSubContentStyle1,
  divSubContentStyle2,
  imgStyle,
  userPositionStyle,
  userTierStyle,
  userNameStyle,
  userCommentStyle,
  divUserCommentStyle,
} from './aboutDeveloper.css';

const AboutDeveloper = ({
  userPosition,
  userName,
  userComment,
  userTier, // 새로운 prop 추가
  userImage,
}: {
  userPosition: string;
  userName: string;
  userComment: string;
  userTier: number; // 1부터 6까지의 숫자
  userImage: StaticImageData;
}) => {
  // 티어에 따른 컴포넌트 선택
  const TierComponent =
    [Tier1, Tier2, Tier3, Tier4, Tier5, Tier6][userTier - 1] || Tier1;

  return (
    <div className={divStyle}>
      <Image
        src={userImage}
        alt="developer img"
        className={imgStyle}
        width={500} // 이미지 비율 유지
        height={500} // 이미지 비율 유지
      />
      <div className={divMainContentStyle}>
        <div className={divSubContentStyle1}>
          <p className={userPositionStyle}>{userPosition}</p>
        </div>

        <div className={divSubContentStyle2}>
          <TierComponent className={userTierStyle} width="16" height="16" />
          <p className={userNameStyle}>{userName}</p>
        </div>

        <div className={divUserCommentStyle}>
          <p className={userCommentStyle}>{userComment}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutDeveloper;
