import { SVGAttributes, FC } from 'react';
import Tier1DefaultIcon from '@/shared/assets/svg/tier/default/tier_1.svg';
import Tier2DefaultIcon from '@/shared/assets/svg/tier/default/tier_2.svg';
import Tier3DefaultIcon from '@/shared/assets/svg/tier/default/tier_3.svg';
import Tier4DefaultIcon from '@/shared/assets/svg/tier/default/tier_4.svg';
import Tier5DefaultIcon from '@/shared/assets/svg/tier/default/tier_5.svg';
import Tier6DefaultIcon from '@/shared/assets/svg/tier/default/tier_6.svg';
import Tier1SmallIcon from '@/shared/assets/svg/tier/sm/tier_1.svg';
import Tier2SmallIcon from '@/shared/assets/svg/tier/sm/tier_2.svg';
import Tier3SmallIcon from '@/shared/assets/svg/tier/sm/tier_3.svg';
import Tier4SmallIcon from '@/shared/assets/svg/tier/sm/tier_4.svg';
import Tier5SmallIcon from '@/shared/assets/svg/tier/sm/tier_5.svg';
import Tier6SmallIcon from '@/shared/assets/svg/tier/sm/tier_6.svg';

interface SVGTierProps extends SVGAttributes<SVGElement> {
  size?: 'default' | 'sm';
  tier?: number;
}

const defaultComponent: Record<number, FC<SVGAttributes<SVGElement>>> = {
  1: Tier1DefaultIcon,
  2: Tier2DefaultIcon,
  3: Tier3DefaultIcon,
  4: Tier4DefaultIcon,
  5: Tier5DefaultIcon,
  6: Tier6DefaultIcon,
};

const smComponent: Record<number, FC<SVGAttributes<SVGElement>>> = {
  1: Tier1SmallIcon,
  2: Tier2SmallIcon,
  3: Tier3SmallIcon,
  4: Tier4SmallIcon,
  5: Tier5SmallIcon,
  6: Tier6SmallIcon,
};

const SVGTier = ({ size = 'default', tier = 1, ...props }: SVGTierProps) => {
  const TierComponent =
    size === 'default' ? defaultComponent[tier] : smComponent[tier];

  return <TierComponent {...props} />;
};

export default SVGTier;
