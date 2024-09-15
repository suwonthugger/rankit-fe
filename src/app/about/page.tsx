import ImsiImg from '@/shared/assets/svg/imsiImg.svg';
import Tier1 from '@/shared/assets/svg/tier_img/tier1.svg';
import Tier2 from '@/shared/assets/svg/tier_img/tier2.svg';
import Tier3 from '@/shared/assets/svg/tier_img/tier3.svg';
import Tier4 from '@/shared/assets/svg/tier_img/tier4.svg';
import Tier5 from '@/shared/assets/svg/tier_img/tier5.svg';
import Tier6 from '@/shared/assets/svg/tier_img/tier6.svg';
import AboutDeveloper from './_components/aboutDeveloper/aboutDeveloper';
import {
  divStyle,
  sectionStyle,
  headingStyle1,
  headingStyle2,
  headingStyle3,
  paragraphStyle,
  rightDivStyle,
  titleStyle1,
  titleStyle2,
  tierImgDivStyle,
} from './aboutPage.css';

const AboutPage = () => {
  return (
    <div className={divStyle}>
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
            그들의 작업물을 확인하자
          </p>
        </div>
      </section>

      <section className={sectionStyle}>
        <div>
          <p className={titleStyle1}>학교랭킹</p>
          <h1 className={headingStyle3}>
            어느 학교가,
            <br /> 그 학교의 누가, <br />
            가장 잘 하나요?
          </h1>
          <ImsiImg />
        </div>

        <div className={rightDivStyle}>
          <ImsiImg />
          <p className={titleStyle2}>지역랭킹</p>
          <h1 className={headingStyle1}>
            당신의 지역은
            <br /> 전국에서 <br />몇 번째일까요?
          </h1>
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
          userImage="https://github.com/user-attachments/assets/78408aad-484c-4792-b7ee-c9b8eefa66c5"
        />
        <AboutDeveloper
          userPosition="BackEnd"
          userTier={2}
          userName="이승준"
          userComment="맥북 쓰고 싶어요."
          userGithub="https://github.com/leesj000603"
          userImage="https://github.com/user-attachments/assets/9ce3ddbf-1732-445d-a1ee-26d8517cbe12"
        />
        <AboutDeveloper
          userPosition="FrontEnd"
          userTier={3}
          userName="서대원"
          userComment="힙합 is my life."
          userGithub="https://github.com/suwonthugger"
          userImage="https://github.com/user-attachments/assets/64129d9c-b8a4-4cd6-8ec9-9ceb715d059f"
        />
        <AboutDeveloper
          userPosition="FrontEnd"
          userTier={4}
          userName="박우석"
          userComment="아직도 맥북을 안 쓰나요?"
          userGithub="https://github.com/jamooooong"
          userImage="https://github.com/user-attachments/assets/9a0bb458-e7d1-4d63-aa7a-83db868d7a6f"
        />
      </section>
    </div>
  );
};

export default AboutPage;
