'use client';

import Link from 'next/link';
import CircleImage from '@/shared/components/circleImage/circleImage';
import { useGetGuestbook } from '@/shared/apis/board/queries';
import {
  boardContainerStyle,
  boardHeaderStyle,
  boardRowStyle,
  boardListStyle,
} from './board.css';

const Board = () => {
  const { data } = useGetGuestbook();

  return (
    <div className={boardContainerStyle}>
      <div className={boardHeaderStyle}>
        <h3>최근 30개의 멘트만 표시됩니다.</h3>
      </div>

      <ul className={boardListStyle}>
        {data?.map(({ userId, profileImg, boardContent, username }, index) => (
          <li key={`${userId}-${boardContent}-${index}`}>
            <Link href={`/user/${username}`} className={boardRowStyle}>
              <CircleImage src={profileImg} />
              <p>{boardContent}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Board;
