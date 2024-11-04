import { style } from '@vanilla-extract/css';
import { globalTheme } from '@/shared/styles/globalTheme.css';

export const headingTitleStyle = style({
  ...globalTheme.fonts.headBold36,
  color: globalTheme.colors.gray_19,
  width: '100%',
  whiteSpace: 'normal',
});

export const headingSubTitleStyle = style({
  ...globalTheme.fonts.mobileTitleSemiBold20,
  color: globalTheme.colors.gray_19,
});

export const paragraphContentStyle = style({
  ...globalTheme.fonts.mobileBodyReg16,
  color: globalTheme.colors.blue_33,
});

export const contentDivStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4.8rem',
  marginTop: '4.3rem',
});

export const contentStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
});
