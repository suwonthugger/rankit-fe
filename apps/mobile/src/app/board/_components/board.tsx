import CircleImage from '@/shared/components/circleImage/circleImage';
import {
  boardContainerStyle,
  boardHeaderStyle,
  boardRowStyle,
  boardListStyle,
  paragraphStyle,
} from './board.css';

const USER_RANK = [
  {
    id: 1,
    contents:
      ' 모바일 기준 최대 2줄 글자수 확인 필요 필요 필요 필요 필요 필요 필요',
    src: 'https://avatars.githubusercontent.com/u/127329855?v=4',
  },
  {
    id: 2,
    contents:
      ' 모바일 기준 최대 2줄 글자수 확인 필요 필요 필요 필요 필요 필요 필요',
    src: 'https://avatars.githubusercontent.com/u/127329855?v=4',
  },
  {
    id: 3,
    contents:
      ' 모바일 기준 최대 2줄 글자수 확인 필요 필요 필요 필요 필요 필요 필요',
    src: 'https://avatars.githubusercontent.com/u/127329855?v=4',
  },
  {
    id: 4,
    contents:
      ' 모바일 기준 최대 2줄 글자수 확인 필요 필요 필요 필요 필요 필요 필요',
    src: 'https://avatars.githubusercontent.com/u/127329855?v=4',
  },
  {
    id: 5,
    contents:
      ' 모바일 기준 최대 2줄 글자수 확인 필요 필요 필요 필요 필요 필요 필요',
    src: 'https://avatars.githubusercontent.com/u/127329855?v=4',
  },
  {
    id: 6,
    contents:
      ' 모바일 기준 최대 2줄 글자수 확인 필요 필요 필요 필요 필요 필요 필요',
    src: 'https://avatars.githubusercontent.com/u/127329855?v=4',
  },
  {
    id: 7,
    contents:
      ' 모바일 기준 최대 2줄 글자수 확인 필요 필요 필요 필요 필요 필요 필요',
    src: 'https://avatars.githubusercontent.com/u/127329855?v=4',
  },
  {
    id: 8,
    contents:
      ' 모바일 기준 최대 2줄 글자수 확인 필요 필요 필요 필요 필요 필요 필요',
    src: 'https://avatars.githubusercontent.com/u/127329855?v=4',
  },
  {
    id: 9,
    contents:
      ' 모바일 기준 최대 2줄 글자수 확인 필요 필요 필요 필요 필요 필요 필요',
    src: 'https://avatars.githubusercontent.com/u/127329855?v=4',
  },
  {
    id: 10,
    contents:
      ' 모바일 기준 최대 2줄 글자수 확인 필요 필요 필요 필요 필요 필요 필요',
    src: 'https://avatars.githubusercontent.com/u/127329855?v=4',
  },
];

const Board = () => {
  return (
    <div className={boardContainerStyle}>
      <div className={boardHeaderStyle}>
        <h3>최근 30개의 멘트만 표시됩니다.</h3>
      </div>

      <ul className={boardListStyle}>
        {USER_RANK.map((item) => (
          <li key={item.id} className={boardRowStyle}>
            <CircleImage src={item.src} size="mobileSm" />
            <p className={paragraphStyle}>{item.contents}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Board;
