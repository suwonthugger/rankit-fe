import { style } from '@vanilla-extract/css';
import { globalTheme } from '../../../shared/styles/globalTheme.css';

export const flexColumnCenter = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const containerStyle = style([
  flexColumnCenter,
  {
    width: '100%',
  },
]);

export const divStyle = style({
  width: '39.3rem',
});

export const sharedDivStyle = style({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',

  margin: '0 auto',
  padding: '0 2.1rem',
});

export const topDivStyle = style({
  paddingTop: '4rem',
  backgroundColor: globalTheme.colors.white,
});

export const buttonDivStyle = style({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '0.8rem',
  marginTop: '8.8rem',
  marginBottom: '8.8rem',
});

export const middleDivStyle = style({
  backgroundColor: globalTheme.colors.gray_bg_06,
});

export const middleContentDivStyle = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1.7rem',
  marginTop: '10.4rem',
  marginBottom: '8.8rem',
});

export const bottomDivStyle = style({
  minHeight: 669,
  backgroundColor: globalTheme.colors.white,
});

export const bottomDivHeadingStyle = style({
  ...globalTheme.fonts.headBold24,
  marginTop: '8.8rem',
  color: globalTheme.colors.gray_19,
});

export const bottomDivRefreshButtonStyle = style({
  ...globalTheme.fonts.headerReg16,
  color: globalTheme.colors.blue_33,
  textAlign: 'end',
});

export const listStyle = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1.7rem',
  justifyContent: 'space-between',
  marginTop: '2rem',
  marginBottom: '6.8rem',
});

export const flexColumn = style({
  display: 'flex',
  flexDirection: 'column',
});

export const topSectionStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4.4rem',
});
