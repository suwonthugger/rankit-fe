import { style } from '@vanilla-extract/css';
import { globalTheme } from '@/shared/styles/globalTheme.css';

export const heading2Style = style({
  ...globalTheme.fonts.mobileTitleBold28,
});

export const heading1Style = style({
  ...globalTheme.fonts.mobileTitleSemiBold20,
  color: globalTheme.colors.blue_main,
});

globalTheme;
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
    width: '100%',
  },
]);

export const topDivStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100vw',
  padding: '3.2rem 2.1rem 4rem 2.1rem',
  paddingTop: '4rem',
  paddingBottom: '3.2rem',
  backgroundImage: 'url(/images/background.jpeg)',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
});

export const bottomDivStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
  padding: '3.2rem 2.1rem',
});

export const buttonDivStyle = style([flexRow, { marginTop: '2.4rem' }]);

export const inputStyle = style({
  marginTop: '4.8rem',
});

export const textCenter = style({
  textAlign: 'center',
});

export const paragraphStyle = style({
  ...globalTheme.fonts.mobileBodyMed16,
});

export const InputListPlaceholderStyle = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
});
