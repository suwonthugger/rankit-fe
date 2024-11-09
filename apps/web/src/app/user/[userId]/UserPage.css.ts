import { style } from '@vanilla-extract/css';
import { globalTheme } from '../../../shared/styles/globalTheme.css';

export const containerStyle = style({
  width: '100%',
});

export const sharedDivStyle = style({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',

  margin: '0 auto',
  padding: '0 3.8rem',
  width: 1180,

  '@media': {
    '(max-width: 1180px)': {
      justifyContent: 'center',
      gap: '3rem',
      width: '100%',
    },
  },
});

export const topDivStyle = style({
  paddingTop: '12rem',
  minHeight: 728,
  backgroundColor: globalTheme.colors.white,
});

export const buttonDivStyle = style({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '0.8rem',
  marginBottom: '8.8rem',
});

export const middleDivStyle = style({
  minHeight: 921,
  backgroundColor: globalTheme.colors.gray_bg_06,
});

export const middleContentDivStyle = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '2.4rem',
  marginTop: '10.4rem',

  '@media': {
    '(max-width: 1180px)': {
      justifyContent: 'center',
      width: '100%',
    },
  },
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
  ':hover': { color: globalTheme.colors.blue_hover },
  ':active': { color: globalTheme.colors.blue_press },
  textAlign: 'end',
});

export const listStyle = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '2.4rem',
  justifyContent: 'space-between',
  marginTop: '2rem',

  '@media': {
    '(max-width: 1180px)': {
      justifyContent: 'center',
      width: '100%',
    },
  },
});

export const flexColumn = style({
  display: 'flex',
  flexDirection: 'column',
});

export const topSectionStyle = style({
  display: 'flex',
  marginBottom: '8.8rem',
});

export const spinnerTopDiveStyle = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '46.2rem',
});

export const spinnerMiddleDivStyle = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '33.9rem',
});
