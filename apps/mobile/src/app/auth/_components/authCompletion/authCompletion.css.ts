import { globalTheme } from '@/shared/styles/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const headingStyle = style({
  ...globalTheme.fonts.mobileTitleBold28,
});

export const iconStyle = style({
  marginTop: '4rem',
});

export const buttonStyle = style({
  marginTop: '9rem',
});
