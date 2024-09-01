import Image from 'next/image';
import {
  rankBoardContainerStyle,
  rankBoardheaderStyle,
  rankBoardRowStyle,
  rankBoardListStyle,
  rankBoardItemStyle,
  rankBoardImageStyle,
  rankBoardImgeContainer,
} from './rankBoard.css';

interface RankBoard {
  variant?: 'default' | 'img';
  title?: string;
}

const USER_RANK = [
  {
    rank: 1,
    name: '스껄대학교1',
    score: 1010100,
    src: 'https://avatars.githubusercontent.com/u/127329855?v=4',
  },
  {
    rank: 1,
    name: '스껄대학교2',
    score: 1010100,
    src: 'https://avatars.githubusercontent.com/u/127329855?v=4',
  },
  {
    rank: 1,
    name: '스껄대학교3',
    score: 1010100,
    src: 'https://avatars.githubusercontent.com/u/127329855?v=4',
  },
  {
    rank: 1,
    name: '스껄대학교4',
    score: 1010100,
    src: 'https://avatars.githubusercontent.com/u/127329855?v=4',
  },
  {
    rank: 1,
    name: '스껄대학교5',
    score: 1010100,
    src: 'https://avatars.githubusercontent.com/u/127329855?v=4',
  },
  {
    rank: 1,
    name: '스껄대학교6',
    score: 1010100,
    src: 'https://avatars.githubusercontent.com/u/127329855?v=4',
  },
  {
    rank: 1,
    name: '스껄대학교7',
    score: 1010100,
    src: 'https://avatars.githubusercontent.com/u/127329855?v=4',
  },
  {
    rank: 1,
    name: '스껄대학교8',
    score: 1010100,
    src: 'https://avatars.githubusercontent.com/u/127329855?v=4',
  },
  {
    rank: 1,
    name: '스껄대학교9',
    score: 1010100,
    src: 'https://avatars.githubusercontent.com/u/127329855?v=4',
  },
  {
    rank: 1,
    name: '스껄대학교10',
    score: 1010100,
    src: 'https://avatars.githubusercontent.com/u/127329855?v=4',
  },
  {
    rank: 1,
    name: '스껄대학교11',
    score: 1010100,
    src: 'https://avatars.githubusercontent.com/u/127329855?v=4',
  },
  {
    rank: 1,
    name: '스껄대학교12',
    score: 1010100,
    src: 'https://avatars.githubusercontent.com/u/127329855?v=4',
  },
  {
    rank: 1,
    name: '스껄대학교13',
    score: 1010100,
    src: 'https://avatars.githubusercontent.com/u/127329855?v=4',
  },
  {
    rank: 1,
    name: '스껄대학교14',
    score: 1010100,
    src: 'https://avatars.githubusercontent.com/u/127329855?v=4',
  },
  {
    rank: 1,
    name: '스껄대학교15',
    score: 1010100,
    src: 'https://avatars.githubusercontent.com/u/127329855?v=4',
  },
  {
    rank: 1,
    name: '스껄대학교16',
    score: 1010100,
    src: 'https://avatars.githubusercontent.com/u/127329855?v=4',
  },
];

const RankBoard = ({ variant = 'default', title = '학교명' }: RankBoard) => {
  return (
    <div className={rankBoardContainerStyle}>
      <div className={rankBoardheaderStyle}>
        <h3>순위</h3>
        <h3>{title}</h3>
        <h3>점수</h3>
      </div>

      <ul className={rankBoardListStyle}>
        {USER_RANK.map((item) => (
          <li key={item.name} className={rankBoardRowStyle}>
            <p className={rankBoardItemStyle['sm']}>1</p>

            <div className={rankBoardItemStyle['lg']}>
              {variant === 'img' && (
                <div className={rankBoardImgeContainer}>
                  <Image
                    src={item.src}
                    width={460}
                    height={460}
                    alt={'프로필 이미지'}
                    className={rankBoardImageStyle}
                  />
                </div>
              )}
              <p>순dsadsa위</p>
            </div>

            <p className={rankBoardItemStyle['sm']}>
              {item.score.toLocaleString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RankBoard;
