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
  currentScore?: number;
  nextScore?: number;
}

const ProgressBar = ({
  width,
  currentTier,
  nextTier,
  currentScore,
  nextScore,
}: ProgressBarProps) => {
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
        <span className={spanStyle}>
          {currentScore ? currentScore.toLocaleString() : 0}
        </span>
      </div>

      <div className={nextTierDivStyle}>
        <p>{`level ${nextTier} 까지`}</p>
        <p>{nextScore ? nextScore.toLocaleString() : 0}</p>
      </div>
    </div>
  );
};

export default ProgressBar;
