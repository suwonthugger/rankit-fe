import { TierTypes } from '../_types';

export const nextTierMap: Record<TierTypes, TierTypes> = {
  YELLOW: 'GREEN',
  GREEN: 'BLUE',
  BLUE: 'RED',
  RED: 'GREY',
  GREY: 'PURPLE',
  PURPLE: 'PURPLE',
};

/**
 * 현재 티어의 다음 티어를 반환하는 함수
 * @param currentTier 현재 티어
 * @returns 다음 티어
 */
export function getNextTier(currentTier: TierTypes): TierTypes {
  return nextTierMap[currentTier];
}
