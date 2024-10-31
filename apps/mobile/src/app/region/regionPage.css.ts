import { style } from '@vanilla-extract/css';
import { globalTheme } from '@/shared/styles/globalTheme.css';

export const heading2Style = style({
  ...globalTheme.fonts.mobileTitleBold28,
});

export const heading1Style = style({
  ...globalTheme.fonts.mobileTitleSemiBold20,
  color: globalTheme.colors.blue_main,
});

export const flexColumnCenter = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const flexRow = style({
  display: 'flex',
  gap: '0.8rem',
});

export const container = style([
  flexColumnCenter,
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
]);

export const divStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
  padding: '4rem 2.1rem',
});

export const paragraphStyle = style({
  ...globalTheme.fonts.mobileBodyMed16,
});

export const inputStyle = style({
  marginTop: '1.6rem',
});

export const boardStyle = style({
  marginTop: '0.8rem',
});
