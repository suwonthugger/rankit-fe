import { SVGAttributes, FC } from 'react';
import Tier1DefaultIcon from '@/shared/assets/svgs/tier/default/tier_1.svg';
import Tier2DefaultIcon from '@/shared/assets/svgs/tier/default/tier_2.svg';
import Tier3DefaultIcon from '@/shared/assets/svgs/tier/default/tier_3.svg';
import Tier4DefaultIcon from '@/shared/assets/svgs/tier/default/tier_4.svg';
import Tier5DefaultIcon from '@/shared/assets/svgs/tier/default/tier_5.svg';
import Tier6DefaultIcon from '@/shared/assets/svgs/tier/default/tier_6.svg';
import Tier1LargeIcon from '@/shared/assets/svgs/tier/lg/tier_1.svg';
import Tier2LargeIcon from '@/shared/assets/svgs/tier/lg/tier_2.svg';
import Tier3LargeIcon from '@/shared/assets/svgs/tier/lg/tier_3.svg';
import Tier4LargeIcon from '@/shared/assets/svgs/tier/lg/tier_4.svg';
import Tier5LargeIcon from '@/shared/assets/svgs/tier/lg/tier_5.svg';
import Tier6LargeIcon from '@/shared/assets/svgs/tier/lg/tier_6.svg';
import Tier1SmallIcon from '@/shared/assets/svgs/tier/sm/tier_1.svg';
import Tier2SmallIcon from '@/shared/assets/svgs/tier/sm/tier_2.svg';
import Tier3SmallIcon from '@/shared/assets/svgs/tier/sm/tier_3.svg';
import Tier4SmallIcon from '@/shared/assets/svgs/tier/sm/tier_4.svg';
import Tier5SmallIcon from '@/shared/assets/svgs/tier/sm/tier_5.svg';
import Tier6SmallIcon from '@/shared/assets/svgs/tier/sm/tier_6.svg';

interface SVGTierProps extends SVGAttributes<SVGElement> {
  size?: 'default' | 'sm' | 'lg';
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

const lgComponent: Record<number, FC<SVGAttributes<SVGElement>>> = {
  1: Tier1LargeIcon,
  2: Tier2LargeIcon,
  3: Tier3LargeIcon,
  4: Tier4LargeIcon,
  5: Tier5LargeIcon,
  6: Tier6LargeIcon,
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
    size === 'default'
      ? defaultComponent[tier]
      : size === 'lg'
        ? lgComponent[tier]
        : smComponent[tier];

  return <TierComponent {...props} />;
};

export default SVGTier;
