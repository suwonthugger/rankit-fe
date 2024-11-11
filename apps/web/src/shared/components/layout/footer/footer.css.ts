import { style } from '@vanilla-extract/css';
import { globalTheme } from '../../../styles/globalTheme.css';

export const footerStlye = style({
  display: 'flex',
  justifyContent: 'center',
  padding: '2rem 1.9rem 0 2rem',
  backgroundColor: globalTheme.colors.gray_bg_05,
  width: '100vw',
  height: '12rem',
});

export const linkBtnStyle = style({
  ':hover': {
    textDecoration: 'underline',
  },
});
export const contentStyle = style({
  ...globalTheme.fonts.headerReg16,
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
  width: '1180px',
  color: globalTheme.colors.gray_71,

  '@media': {
    '(max-width: 1180px)': {
      width: '100%',
    },
  },
});
