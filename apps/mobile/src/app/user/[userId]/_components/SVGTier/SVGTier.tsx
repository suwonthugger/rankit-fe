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
import { TierTypes } from '../profile/types';

interface SVGTierProps extends SVGAttributes<SVGElement> {
  size?: 'default' | 'sm' | 'lg';
  tier?: TierTypes;
}

const defaultComponent: Record<TierTypes, FC<SVGAttributes<SVGElement>>> = {
  YELLOW: Tier1DefaultIcon,
  GREEN: Tier2DefaultIcon,
  BLUE: Tier3DefaultIcon,
  RED: Tier4DefaultIcon,
  GREY: Tier5DefaultIcon,
  PURPLE: Tier6DefaultIcon,
};

const lgComponent: Record<TierTypes, FC<SVGAttributes<SVGElement>>> = {
  YELLOW: Tier1LargeIcon,
  GREEN: Tier2LargeIcon,
  BLUE: Tier3LargeIcon,
  RED: Tier4LargeIcon,
  GREY: Tier5LargeIcon,
  PURPLE: Tier6LargeIcon,
};

const smComponent: Record<TierTypes, FC<SVGAttributes<SVGElement>>> = {
  YELLOW: Tier1SmallIcon,
  GREEN: Tier2SmallIcon,
  BLUE: Tier3SmallIcon,
  RED: Tier4SmallIcon,
  GREY: Tier5SmallIcon,
  PURPLE: Tier6SmallIcon,
};

const SVGTier = ({
  size = 'default',
  tier = 'YELLOW',
  ...props
}: SVGTierProps) => {
  const TierComponent =
    size === 'default'
      ? defaultComponent[tier]
      : size === 'lg'
        ? lgComponent[tier]
        : smComponent[tier];

  if (!TierComponent) {
    return null;
  }
  return <TierComponent {...props} />;
};

export default SVGTier;
