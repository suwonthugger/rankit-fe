'use client';

import Image from 'next/image';
import BadgeImg from '@/shared/assets/images/badgeImg.png';
import daewon from '@/shared/assets/images/rankit_developer_DWSEO.jpg';
import hyojun from '@/shared/assets/images/rankit_developer_HJKIM.jpg';
import seungjun from '@/shared/assets/images/rankit_developer_SJLEE.jpg';
import wooseok from '@/shared/assets/images/rankit_developer_WSPARK.jpg';
import ImsiImg from '@/shared/assets/svgs/imsiImg.svg';
import Tier1 from '@/shared/assets/svgs/tier_img/tier1.svg';
import Tier2 from '@/shared/assets/svgs/tier_img/tier2.svg';
import Tier3 from '@/shared/assets/svgs/tier_img/tier3.svg';
import Tier4 from '@/shared/assets/svgs/tier_img/tier4.svg';
import Tier5 from '@/shared/assets/svgs/tier_img/tier5.svg';
import Tier6 from '@/shared/assets/svgs/tier_img/tier6.svg';
import AboutBadgeCopyBox from './_components/aboutBadgeCopyBox/aboutBadgeCopyBox';
import AboutDeveloper from './_components/aboutDeveloper/aboutDeveloper';
import {
  mainDivStyle,
  divStyle,
  badgeSectionStyle,
  sectionStyle,
  headingStyle1,
  headingStyle2,
  headingStyle3,
  paragraphStyle,
  smallParagraphStyle,
  rightDivStyle,
  titleStyle1,
  tierImgDivStyle,
  tierIntroduceDivStyle,
  tierIntroduceSubDivStyle,
} from './aboutPage.css';

const AboutPage = () => {
  const handleConfirm = () => {
    console.log('Confirmed!');
    // 확인 버튼을 눌렀을 때의 동작을 정의
  };
  return (
    <div className={mainDivStyle}>
      <section className={badgeSectionStyle}>
        <div>
          <Image src={BadgeImg} width={182} height={190} alt="badge" />
        </div>
        <div>
          <p className={titleStyle1}>rankit으로 README 꾸미기</p>
          <p className={headingStyle1}>뱃지로 README에 자랑하세요!</p>
          <p className={smallParagraphStyle}>
            copy후 Github README에 붙여넣기! &#39;깃허브아이디&#39; 를 본인의
            아이디로 변경해주세요!
          </p>
        </div>
      </section>
      <AboutBadgeCopyBox badgeLink="[![rankit-badge](https://badge.rankit.run/badge?name=깃허브아이디)](https://www.rankit.run)" />

      <section className={sectionStyle}>
        <div>
          <h1 className={headingStyle1}>
            깃허브
            <br /> 중요한건 아는데 <br />
            동기가 필요할 때
          </h1>
        </div>

        <div className={rightDivStyle}>
          <p className={paragraphStyle}>
            rankit을 통해 우리 학교의, 우리 지역의
            <br /> 명예를 걸고 싸워 보세요.
            <br /> 다른 유저들과 경쟁하면서
            <br /> 개발의 동기를 찾으세요.
          </p>
        </div>
      </section>
      <section className={sectionStyle}>
        <div>
          <h1 className={headingStyle1}>
            rankit의
            <br /> 티어 시스템을 <br />
            소개합니다.
          </h1>
        </div>

        <div className={rightDivStyle}>
          <div className={tierIntroduceDivStyle}>
            <div>
              <div className={tierIntroduceSubDivStyle}>
                <Tier1 />
                <p>1 tier</p>
              </div>
              <div className={tierIntroduceSubDivStyle}>
                <Tier2 />
                <p>2 tier</p>
              </div>
              <div className={tierIntroduceSubDivStyle}>
                <Tier3 />
                <p>3 tier</p>
              </div>
            </div>
            <div>
              <div className={tierIntroduceSubDivStyle}>
                <Tier4 />
                <p>4 tier</p>
              </div>
              <div className={tierIntroduceSubDivStyle}>
                <Tier5 />
                <p>5 tier</p>
              </div>
              <div className={tierIntroduceSubDivStyle}>
                <Tier6 />
                <p>6 tier</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={sectionStyle}>
        <div className={divStyle}>
          <p className={titleStyle1}>유저랭킹</p>
          <h1 className={headingStyle2}>
            tier별
            <br /> 개발자들의 랭킹을 <br />
            확인해보세요
          </h1>
          <div className={tierImgDivStyle}>
            <Tier1 />
            <Tier2 />
            <Tier3 />
            <Tier4 />
            <Tier5 />
            <Tier6 />
          </div>
        </div>

        <div>
          <p className={paragraphStyle}>
            깃허브 로그인으로
            <br /> 간단하게 계산되는 <br />
            정보
          </p>
        </div>

        <div>
          <ImsiImg />
        </div>

        <div className={rightDivStyle}>
          <p className={paragraphStyle}>
            나와 비슷한
            <br /> 유저들의 추천받고 <br />
            작업물을 확인하자
          </p>
        </div>
      </section>

      <section className={sectionStyle}>
        <div>
          <p className={titleStyle1}>학교, 지역 랭킹</p>
          <h1 className={headingStyle3}>
            대학교, 지역벽
            <br /> rankit 순위를 <br />
            확인해보세요.
          </h1>
          <ImsiImg />
        </div>

        <div className={rightDivStyle}>
          <ImsiImg />
        </div>
      </section>

      {/* 개발자 이름 */}
      <section className={sectionStyle}>
        <AboutDeveloper
          userPosition="BackEnd"
          userTier={1}
          userName="김효준"
          userComment="자유롭게 살고 싶어요."
          userGithub="https://github.com/khyojun"
          userImage={hyojun}
        />
        <AboutDeveloper
          userPosition="BackEnd"
          userTier={2}
          userName="이승준"
          userComment="맥북 쓰고 싶어요."
          userGithub="https://github.com/leesj000603"
          userImage={seungjun}
        />
        <AboutDeveloper
          userPosition="FrontEnd"
          userTier={3}
          userName="서대원"
          userComment="힙합 is my life."
          userGithub="https://github.com/suwonthugger"
          userImage={daewon}
        />
        <AboutDeveloper
          userPosition="FrontEnd"
          userTier={4}
          userName="박우석"
          userComment="아직도 맥북을 안 쓰나요?"
          userGithub="https://github.com/jamooooong"
          userImage={wooseok}
        />
      </section>
    </div>
  );
};

export default AboutPage;
