import { globalTheme } from '@rankit/styles';
import { style } from '@vanilla-extract/css';

export const containerStyle = style({
  marginRight: '9rem',
});

export const paragraphLanguageStyle = style({
  ...globalTheme.fonts.bodySemiBold16,
  color: globalTheme.colors.blue_main,
});

export const headingNameStyle = style({
  ...globalTheme.fonts.titleBold32,
  color: globalTheme.colors.gray_19,
});

export const divStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
  marginTop: '4.8rem',
});

export const nameDivStyle = style({
  display: 'flex',
  gap: '0.9rem',
});
