'use client';

import { useState } from 'react';
import RankBoard from '@/shared/components/rankBoard/rankBoard';
import { useGetUserGradeList } from '@/shared/apis/main/queries';
import {
  tierDivStyle,
  tierButtonStyle,
  selectedTierButtonStyle,
} from './RankBoardWithTier.css';

const tiers = [
  { label: 1, value: 'PURPLE' },
  { label: 2, value: 'GREY' },
  { label: 3, value: 'RED' },
  { label: 4, value: 'BLUE' },
  { label: 5, value: 'GREEN' },
  { label: 6, value: 'YELLOW' },
] as const;

const RankBoardWithTier = () => {
  const [selectedTier, setSelectedTier] = useState<(typeof tiers)[number]>(
    tiers[0],
  );

  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetUserGradeList({ grade: selectedTier.value });

  return (
    <div>
      <div className={tierDivStyle}>
        {tiers.map((tier) => (
          <button
            key={tier.label}
            className={`${tierButtonStyle} ${tier.label === selectedTier.label && selectedTierButtonStyle}`}
            onClick={() => setSelectedTier(tier)}>
            {tier.label} tier
          </button>
        ))}
      </div>

      <RankBoard
        device="mobile"
        title="아이디"
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
        isLoading={isLoading}>
        {data?.pages.map((page) =>
          page.userList.map((user) => (
            <RankBoard.ListItem
              key={user.username}
              rank={user.userRank}
              name={user.username}
              score={user.userscore}
              profileImg={user.profileImg}
            />
          )),
        )}
      </RankBoard>
    </div>
  );
};

export default RankBoardWithTier;
