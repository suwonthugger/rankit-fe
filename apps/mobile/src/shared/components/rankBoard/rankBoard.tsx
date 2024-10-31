import { Spinner } from '@radix-ui/themes';
import { createContext, useContext, ReactNode } from 'react';
import CircleImage from '../circleImage/circleImage';
import useInfiniteScroll from './hooks/useInfiniteScroll';
import {
  rankBoardContainerStyle,
  rankBoardHeaderStyle,
  rankBoardRowStyle,
  rankBoardListStyle,
  rankBoardItemLargeStyle,
  rankBoardItemSmallStyle,
  observerStyle,
  spinnerContainerStyle,
  rankBoardRowParagraphStyle,
} from './rankBoard.css';

interface RankBoardProps {
  title: string;
  isLoading: boolean;
  children: ReactNode;
  fetchNextPage: () => void;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  device?: 'desktop' | 'mobile';
  className?: string;
}

interface RankBoardContextProps {
  device: 'desktop' | 'mobile';
}

const RankBoardContext = createContext<RankBoardContextProps | null>(null);

const RankBoardRoot = ({
  title = '학교명',
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
  isLoading,
  children,
  device = 'desktop',
  className,
}: RankBoardProps) => {
  const loaderRef = useInfiniteScroll({
    fetchNextPage: fetchNextPage,
    hasNextPage: hasNextPage,
    isFetchingNextPage: isFetchingNextPage,
  });

  const contextValue: RankBoardContextProps = {
    device,
  };

  return (
    <RankBoardContext.Provider value={contextValue}>
      <div className={`${rankBoardContainerStyle[device]} ${className}`}>
        <div className={rankBoardHeaderStyle[device]}>
          <h3>순위</h3>
          <h3>{title}</h3>
          <h3>점수</h3>
        </div>

        <ul className={rankBoardListStyle}>
          {isLoading && (
            <div className={spinnerContainerStyle}>
              <Spinner size="3" loading={isLoading} />
            </div>
          )}

          {children}

          {hasNextPage && (
            <Spinner loading={isFetchingNextPage}>
              <div ref={loaderRef} className={observerStyle} />
            </Spinner>
          )}
        </ul>
      </div>
    </RankBoardContext.Provider>
  );
};

interface RankBoardListItemProps {
  rank: number;
  name: string;
  score: number;
  profileImg?: string;
}

const RankBoardListItem = ({
  rank,
  name,
  score,
  profileImg,
}: RankBoardListItemProps) => {
  const context = useContext(RankBoardContext);
  const device = context?.device || 'desktop';

  return (
    <li key={rank} className={rankBoardRowStyle}>
      <p className={rankBoardItemSmallStyle[device]}>{rank}</p>

      <div className={rankBoardItemLargeStyle[device]}>
        {profileImg && <CircleImage src={profileImg} />}
        <p className={rankBoardRowParagraphStyle[device]}>{name}</p>
      </div>

      <p className={rankBoardItemSmallStyle[device]}>
        {score.toLocaleString()}
      </p>
    </li>
  );
};

const RankBoard = Object.assign(RankBoardRoot, { ListItem: RankBoardListItem });

export default RankBoard;
