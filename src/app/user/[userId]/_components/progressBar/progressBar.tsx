import { assignInlineVars } from '@vanilla-extract/dynamic';
import SVGTier from '../SVGTier/SVGTier';
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
  currentTier: number;
  nextTier: number;
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

      <SVGTier size="sm" tier={currentTier} className={currentTierStyle} />
      <SVGTier size="sm" tier={nextTier} className={nextTierStyle} />

      <div className={currentTierDivStyle}>
        <p>{`level ${1}`}</p>
        <span className={spanStyle}>5,000</span>
      </div>

      <div className={nextTierDivStyle}>
        <p>{`level ${2} 까지`}</p>
        <p>-3,000</p>
      </div>
    </div>
  );
};

export default ProgressBar;
