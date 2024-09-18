'use client';

import { RankBoard } from '@rankit/ui';
import { useState } from 'react';
import {
  tierDivStyle,
  tierButtonStyle,
  selectedTierButtonStyle,
} from './RankBoardWithTier.css';

const tiers = [1, 2, 3, 4, 5, 6] as const;

const RankBoardWithTier = () => {
  const [selectedTier, setSelectedTier] = useState<(typeof tiers)[number]>(1);

  return (
    <div>
      <div className={tierDivStyle}>
        {tiers.map((tier) => (
          <button
            key={tier}
            className={`${tierButtonStyle} ${tier === selectedTier && selectedTierButtonStyle}`}
            onClick={() => setSelectedTier(tier)}>
            {tier} tier
          </button>
        ))}
      </div>
      <RankBoard title="아이디" variant="img" />
    </div>
  );
};

export default RankBoardWithTier;
