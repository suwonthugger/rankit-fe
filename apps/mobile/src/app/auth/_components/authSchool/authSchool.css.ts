import { style } from '@vanilla-extract/css';
import { globalTheme } from '@/shared/styles/globalTheme.css';

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

export const checkDivStyle = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.2rem',
});

export const spanStyle = style({
  color: globalTheme.colors.blue_main,
});

export const middleDivParagraphStyle = style({
  ...globalTheme.fonts.mobileDetailReg14,
  width: '30rem',
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
  position: 'absolute',
  top: '9.1rem',
  right: 0,
});

export const InputMenuPlaceholderStyle = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
});
