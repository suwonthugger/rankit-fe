import { assignInlineVars } from '@vanilla-extract/dynamic';
import SVGTier from '../SVGTier/SVGTier';
import { TierTypes } from '../profile/types';
import {
  outsideStyle,
  insideStyle,
  currentTierStyle,
  nextTierStyle,
  currentTierDivStyle,
  nextTierDivStyle,
  vars,
  spanStyle,
} from './progressBar.css';

interface ProgressBarProps {
  width: number;
  currentTier?: TierTypes;
  nextTier?: TierTypes;
}

const ProgressBar = ({ width, currentTier, nextTier }: ProgressBarProps) => {
  const dynamicWidth = `${width}%`;

  return (
    <div className={outsideStyle}>
      <div
        className={insideStyle}
        style={assignInlineVars({
          [vars.widthVar]: dynamicWidth,
        })}
      />

      <SVGTier size="default" tier={currentTier} className={currentTierStyle} />
      <SVGTier size="default" tier={nextTier} className={nextTierStyle} />

      <div className={currentTierDivStyle}>
        <p>{`level ${currentTier}`}</p>
        <span className={spanStyle}>5,000</span>
      </div>

      <div className={nextTierDivStyle}>
        <p>{`level ${nextTier} 까지`}</p>
        <p>3,000</p>
      </div>
    </div>
  );
};

export default ProgressBar;
