import { style } from '@vanilla-extract/css';
import { globalTheme } from '@/shared/styles/globalTheme.css';

export const containerStyle = style({
  display: 'flex',
  flexDirection: 'row',
});

export const paragraphLanguageStyle = style({
  ...globalTheme.fonts.mobileBodyMed16,
  color: globalTheme.colors.blue_main,
});

export const headingNameStyle = style({
  ...globalTheme.fonts.mobileTitleBold28,
  color: globalTheme.colors.gray_19,
  marginTop: '0.7rem',
  marginBottom: '1.2rem',
});

export const divStyle = style({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '0.5rem',
  marginLeft: '1.2rem',
});

export const nameDivStyle = style({
  display: 'flex',
  marginTop: '0.7rem',
  marginBottom: '1.2rem',
});

export const profileImgDivStyle = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
});

export const tierImgStyle = style({
  position: 'absolute',
  top: '8.8rem',
  left: '8.8rem',
});
