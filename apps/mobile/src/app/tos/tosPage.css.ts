import { style } from '@vanilla-extract/css';
import { globalTheme } from '@/shared/styles/globalTheme.css';

export const flexColumnCenter = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const containerStyle = style([
  flexColumnCenter,
  {
    //width: '100%',
    marginTop: '4rem',
    marginBottom: '8.8rem',
    width: '39.3rem',
  },
]);

export const contentStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4.4rem',
});

export const titleStyle = style({
  ...globalTheme.fonts.headBold36,
  color: globalTheme.colors.gray_19,
});

export const headingStyle = style({
  ...globalTheme.fonts.subheadBold20,
  color: globalTheme.colors.gray_19,
  marginBottom: '1.6rem',
});

export const paragraphStyle = style({
  ...globalTheme.fonts.bodyReg16,
  color: globalTheme.colors.gray_19,
});
