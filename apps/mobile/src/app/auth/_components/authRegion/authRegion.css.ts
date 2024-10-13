import { globalTheme } from '@rankit/styles/*';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
});

export const topDivStyle = style({
  ...globalTheme.fonts.mobileTitleBold28,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const topDivIconStyle = style({
  position: 'absolute',
  left: 0,
});

export const middleDivStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '4rem',
  gap: '1.6rem',
});

export const paragraphStyle = style({
  ...globalTheme.fonts.mobileDetailReg14,
  width: '32.3rem',
  textAlign: 'center',
});

export const bottomDivStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '2.4rem',
  marginTop: '2.4rem',
  position: 'relative',
  width: '100%',
});

export const skipButtonStyle = style({
  ...globalTheme.fonts.mobileDetailReg14,
  position: 'absolute',
  top: '1.1rem',
  right: 0,
  color: globalTheme.colors.blue_33,
});
