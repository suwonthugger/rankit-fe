import { style } from '@vanilla-extract/css';
import { globalTheme } from '@/shared/styles/globalTheme.css';

export const flexColumnCenter = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const container = style([
  flexColumnCenter,
  {
    width: '100%',
  },
]);

export const divStyle = style({
  width: '39.3rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  alignContent: 'center',
  paddingTop: '4rem',
  paddingBottom: '4rem',
  paddingLeft: '2.1rem',
  paddingRight: '2.1rem',
});

export const headingStyle = style({
  ...globalTheme.fonts.mobileTitleBold28,
  color: globalTheme.colors.gray_19,
  textAlign: 'center',
  flex: 1,
});

export const topDivIconStyle = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  alignContent: 'center',
  width: '100%',
  marginBottom: '1.6rem',
});

export const sectionStyle = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  marginTop: '2.4rem',
  background: 'white',
  justifyContent: 'column',
  alignItems: 'center',
  alignContent: 'center',
  gap: '1.6rem',
});

export const middleDivParagraphStyle = style({
  ...globalTheme.fonts.mobileDetailReg14,
  marginBottom: '0.8rem',
});
