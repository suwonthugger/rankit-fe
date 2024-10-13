import CircleImage from '../circleImage/circleImage';
import {
  rankBoardContainerStyle,
  rankBoardHeaderStyle,
  rankBoardRowStyle,
  rankBoardListStyle,
  rankBoardItemLargeStyle,
  rankBoardItemSmallStyle,
} from './rankBoard.css';

interface RankBoard {
  device?: 'desktop' | 'mobile';
  variant?: 'default' | 'img';
  title?: string;
  className: string;
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

const RankBoard = ({
  device = 'desktop',
  variant = 'default',
  title = '학교명',
  className,
}: RankBoard) => {
  return (
    <div className={`${rankBoardContainerStyle[device]} ${className}`}>
      <div className={rankBoardHeaderStyle[device]}>
        <h3>순위</h3>
        <h3>{title}</h3>
        <h3>점수</h3>
      </div>

      <ul className={rankBoardListStyle}>
        {USER_RANK.map((item) => (
          <li key={item.name} className={rankBoardRowStyle}>
            <p className={rankBoardItemSmallStyle[device]}>1</p>

            <div className={rankBoardItemLargeStyle[device]}>
              {variant === 'img' && <CircleImage src={item.src} />}
              <p>순dsadsa위</p>
            </div>

            <p className={rankBoardItemSmallStyle[device]}>
              {item.score.toLocaleString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RankBoard;
