import { style } from '@vanilla-extract/css';
import { globalTheme } from '@/shared/styles/globalTheme.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
});

export const topDivStyle = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignContent: 'center',
  width: '100%',
  backgroundColor: globalTheme.colors.gray_D7,
});

export const topDivContentStyle = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  margin: '0 auto',
  padding: '12rem 3.8rem',

  width: '1180px',

  '@media': {
    '(max-width: 1180px)': {
      width: '100%',
    },
  },
});

export const headingStyle = style({
  ...globalTheme.fonts.titleBold64,
  color: globalTheme.colors.gray_19,
  textAlign: 'center',

  '@media': {
    '(max-width: 1180px)': {
      ...globalTheme.fonts.titleBold32,
    },
  },
});

export const buttonDivStyle = style({
  display: 'flex',
  justifyContent: 'center',
  gap: '1.6rem',

  marginTop: '6.4rem',
});

export const topDivPragraphStyle = style({
  ...globalTheme.fonts.bodyReg16,
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',

  marginTop: '10.9rem',

  color: globalTheme.colors.gray_19,
});

export const inputDivStyle = style({
  display: 'flex',
  justifyContent: 'center',

  marginTop: '1.1rem',
});

export const topDivSpanStyle = style({
  color: globalTheme.colors.blue_main,
});

export const IconStyle = style({
  marginTop: '22.4rem',
});

export const bottomDivStyle = style({
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',

  margin: '0 auto',
  padding: '14.4rem 3.8rem',

  width: '1180px',

  '@media': {
    '(max-width: 1180px)': {
      justifyContent: 'center',
      width: '100%',
    },
  },
});

export const heading2Style = style({
  ...globalTheme.fonts.titleBold32,
  color: globalTheme.colors.blue_main,
  marginBottom: '0.8rem',
});

export const topParagraphStyle = style({
  ...globalTheme.fonts.titleSemiBold56,
  color: globalTheme.colors.gray_19,
});

export const bottomParagraphStyle = style({
  ...globalTheme.fonts.bodySemiBold26,
  color: globalTheme.colors.gray_19,
});
