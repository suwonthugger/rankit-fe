import { style } from '@vanilla-extract/css';
import { globalTheme } from '@/shared/styles/globalTheme.css';

export const footerStyle = style({
  ...globalTheme.fonts.mobileDetailReg14,
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
  padding: '2.2rem 2.1rem',
  backgroundColor: globalTheme.colors.gray_bg_04,
  color: globalTheme.colors.blue_33,
});
