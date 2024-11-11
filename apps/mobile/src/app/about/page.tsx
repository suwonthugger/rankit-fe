import Image from 'next/image';
import AboutImg1 from '@/shared/assets/images/aboutImg1.png';
import AboutImg2 from '@/shared/assets/images/aboutImg2.png';
import AboutImg3 from '@/shared/assets/images/aboutImg3.png';
import daewon from '@/shared/assets/images/rankit_developer_DWSEO.jpg';
import hyojun from '@/shared/assets/images/rankit_developer_HJKIM.jpg';
import seungjun from '@/shared/assets/images/rankit_developer_SJLEE.jpg';
import wooseok from '@/shared/assets/images/rankit_developer_WSPARK.jpg';
import Tier1 from '@/shared/assets/svgs/tier/default/tier_1.svg';
import Tier2 from '@/shared/assets/svgs/tier/default/tier_2.svg';
import Tier3 from '@/shared/assets/svgs/tier/default/tier_3.svg';
import Tier4 from '@/shared/assets/svgs/tier/default/tier_4.svg';
import Tier5 from '@/shared/assets/svgs/tier/default/tier_5.svg';
import Tier6 from '@/shared/assets/svgs/tier/default/tier_6.svg';
import AboutDeveloper from './_components/aboutDeveloper/aboutDeveloper';
import {
  container,
  divStyle,
  sectionBetweenStyle,
  headingStyle1,
  paragraphEndStyle,
  paragraphCenterStyle,
  titleStyle1,
  tierIntroduceDivStyle,
  tierIntroduceSubDivStyle,
  imgStyle,
  developerDivStyle,
} from './aboutPage.css';

const AboutPage = () => {
  return (
    <div className={container}>
      <div className={divStyle}>
        <section>
          <h1 className={headingStyle1}>
            깃허브
            <br /> 중요한건 아는데 <br />
            동기가 필요할 때
          </h1>

          <div>
            <p className={paragraphEndStyle}>
              rankit을 통해 우리 학교의, 우리 지역의
              <br /> 명예를 걸고 싸워 보세요.
              <br /> 다른 유저들과 경쟁하면서
              <br /> 개발의 동기를 찾으세요.
            </p>
          </div>
        </section>

        <section className={sectionBetweenStyle}>
          <h1 className={headingStyle1}>
            rankit의
            <br /> 티어 시스템을 <br />
            소개합니다.
          </h1>

          <div>
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

        <section>
          <p className={titleStyle1}>유저랭킹</p>
          <h1 className={headingStyle1}>
            tier별
            <br /> 개발자들의 랭킹을 <br />
            확인해보세요
          </h1>
          <div className={tierIntroduceDivStyle}>
            <Tier1 />
            <Tier2 />
            <Tier3 />
            <Tier4 />
            <Tier5 />
            <Tier6 />
          </div>
        </section>

        <section>
          <div>
            <p className={paragraphCenterStyle}>
              깃허브 로그인으로
              <br /> 간단하게 계산되는 <br />
              정보
            </p>
          </div>

          <div className={imgStyle}>
            <Image src={AboutImg1} alt="이미지2" width={351} />
          </div>

          <div>
            <p className={paragraphCenterStyle}>
              나와 비슷한
              <br /> 유저들의 추천받고 <br />
              작업물을 확인하자
            </p>
          </div>
        </section>

        <section>
          <div>
            <p className={titleStyle1}>학교, 지역 랭킹</p>
            <h1 className={headingStyle1}>
              대학교, 지역벽
              <br /> rankit 순위를 <br />
              확인해보세요.
            </h1>
          </div>
          <div className={imgStyle}>
            <Image src={AboutImg2} alt="이미지2" width={351} />
          </div>
          <div className={imgStyle}>
            <Image src={AboutImg3} alt="이미지3" width={351} />
          </div>
        </section>

        {/* 개발자 이름 */}
        <section>
          <div className={developerDivStyle}>
            <AboutDeveloper
              userPosition="BackEnd"
              userTier={1}
              userName="김효준"
              userComment="자유롭게 살고 싶어요."
              userImage={hyojun}
            />
            <AboutDeveloper
              userPosition="BackEnd"
              userTier={2}
              userName="이승준"
              userComment="맥북 쓰고 싶어요."
              userImage={seungjun}
            />
          </div>
          <div className={developerDivStyle}>
            <AboutDeveloper
              userPosition="FrontEnd"
              userTier={3}
              userName="서대원"
              userComment="힙합 is my life."
              userImage={daewon}
            />
            <AboutDeveloper
              userPosition="FrontEnd"
              userTier={4}
              userName="박우석"
              userComment="아직도 맥북을 안"
              userImage={wooseok}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
