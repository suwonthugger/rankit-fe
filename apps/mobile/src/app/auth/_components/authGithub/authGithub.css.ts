import { globalTheme } from '@/shared/styles/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const headingStyle = style({
  ...globalTheme.fonts.mobileTitleBold28,
});

export const paragraphStyle = style({
  ...globalTheme.fonts.mobileBodyReg16,
  marginTop: '0.8rem',
  textAlign: 'center',
});

export const buttonStyle = style({
  marginTop: '2.4rem',
});
