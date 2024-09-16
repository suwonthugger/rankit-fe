import { style } from '@vanilla-extract/css';
import { globalTheme } from '@/shared/styles/globalTheme.css';

export const modalStyle = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(25, 25, 25, 0.4)', // #191919에 opacity 0.4 적용 grobal theme로 변경해야함
  zIndex: 1000,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const contentStyle = style({
  backgroundColor: globalTheme.colors.white,

  padding: '4.8rem',
  borderRadius: '0.8rem',
  width: '120rem',
  height: '74.8rem',
});

export const divHeaderStyle = style({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '2.4rem',
});

export const headerStyle = style({
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  ...globalTheme.fonts.headBold36,
  color: globalTheme.colors.gray_19,
});

export const ArrowBackStyle = style({
  width: '3.2rem',
  height: '3.2rem',
});
