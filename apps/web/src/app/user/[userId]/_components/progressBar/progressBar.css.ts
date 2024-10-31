import { style, createVar, keyframes } from '@vanilla-extract/css';
import { globalTheme } from '@/shared/styles/globalTheme.css';

const widthVar = createVar();

export const vars = {
  widthVar,
};

const expandWidth = keyframes({
  '0%': {
    transform: 'scaleX(0)',
  },
  '100%': {
    transform: 'scaleX(1)',
  },
});

export const outsideStyle = style({
  marginTop: '12rem',
  borderRadius: 8,
  position: 'relative',
  width: '100%',
  height: '2.4rem',
  backgroundColor: globalTheme.colors.gray_bg_04,
});

export const insideStyle = style({
  position: 'absolute',
  zIndex: 1,
  top: 0,
  left: 0,
  borderRadius: 8,
  width: widthVar,
  height: '2.4rem',
  backgroundColor: globalTheme.colors.blue_main,
  transformOrigin: 'left',
  animation: `${expandWidth} 0.5s ease-in-out`,
});

export const currentTierStyle = style({
  position: 'absolute',
  top: '-3.2rem',
});

export const nextTierStyle = style({
  position: 'absolute',
  top: '-3.2rem',
  right: 0,
});

export const currentTierDivStyle = style({
  ...globalTheme.fonts.bodySemiBold16,
  display: 'flex',
  gap: '0.8rem',
  position: 'absolute',
  top: '2.8rem',
  left: 0,
  color: globalTheme.colors.gray_19,
});

export const spanStyle = style({
  ...globalTheme.fonts.detailMed14,
  color: globalTheme.colors.blue_66,
});

export const nextTierDivStyle = style({
  ...globalTheme.fonts.detailMed14,
  display: 'flex',
  gap: '0.8rem',
  position: 'absolute',
  top: '2.8rem',
  right: 0,
  color: globalTheme.colors.blue_66,
});
