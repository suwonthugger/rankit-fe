import Button from '@/shared/components/button/button';
import {
  bottomDivHeadingStyle,
  bottomDivRefreshButtonStyle,
  bottomDivStyle,
  buttonDivStyle,
  containerStyle,
  listStyle,
  middleContentDivStyle,
  middleDivStyle,
  sharedDivStyle,
  topDivStyle,
  topSectionStyle,
} from './UserPage.css';
import CardInfo from './_components/cardInfo/cardInfo';
import CardProfile from './_components/cardProfile/cardProfile';
import Contributions from './_components/contributions/contributions';
import Introduction from './_components/introduction/introduction';
import Profile from './_components/profile/profile';
import ProgressBar from './_components/progressBar/progressBar';

//임시 목데이터
const cardProfileData = [
  {
    imageSrc: 'https://avatars.githubusercontent.com/u/48755175?v=4',
    language: 'javascript',
    tier: 1,
    userName: 'suwonthugger1',
    school: '광운대학교',
    region: '경기도',
  },
  {
    imageSrc: 'https://avatars.githubusercontent.com/u/48755175?v=4',
    language: 'javascript',
    tier: 1,
    userName: 'suwonthugger2',
    school: '광운대학교',
    region: '경기도',
  },
  {
    imageSrc: 'https://avatars.githubusercontent.com/u/48755175?v=4',
    language: 'javascript',
    tier: 1,
    userName: 'suwonthugger3',
    school: '광운대학교',
    region: '경기도',
  },
  {
    imageSrc: 'https://avatars.githubusercontent.com/u/48755175?v=4',
    language: 'javascript',
    tier: 1,
    userName: 'suwonthugger4',
    school: '광운대학교',
    region: '경기도',
  },
];

const UserPage = () => {
  return (
    <div className={containerStyle}>
      <div className={topDivStyle}>
        <div className={sharedDivStyle}>
          <section className={topSectionStyle}>
            <Profile />
            <Introduction />
          </section>

          <div className={buttonDivStyle}>
            <Button container="sm" color="secondary">
              수정
            </Button>
            <Button container="sm" color="secondary">
              설정
            </Button>
          </div>
        </div>
      </div>

      <div className={middleDivStyle}>
        <div className={sharedDivStyle}>
          <ProgressBar width={50} currentTier={1} nextTier={2} />

          <div className={middleContentDivStyle}>
            <CardInfo title="rank" content="12등" subContent="유저간 순위" />
            <CardInfo title="school" content="1등" subContent="광운대학교" />
            <CardInfo title="region" content="1등" subContent="경기도" />
            <CardInfo title="Language" content="Javascript" />
          </div>

          <Contributions userName="suwonthugger" />
        </div>
      </div>

      <div className={bottomDivStyle}>
        <div className={sharedDivStyle}>
          <h3 className={bottomDivHeadingStyle}>추천친구</h3>

          <button className={bottomDivRefreshButtonStyle}>새로고침</button>

          <ul className={listStyle}>
            {cardProfileData.map((data) => (
              <li key={data.userName}>
                <button>
                  <CardProfile {...data} />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
