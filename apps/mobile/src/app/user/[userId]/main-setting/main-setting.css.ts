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
  paddingTop: '4rem',
  paddingBottom: '4rem',
  paddingLeft: '2.1rem',
  paddingRight: '2.1rem',
});

export const subDivBetweenStyle = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
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
  //justifyContent: 'space-between',
  alignContent: 'center',
  width: '100%',
});

export const paragraphStyle = style({
  flex: 1,
  textAlign: 'center',
});

export const sectionStyle = style({
  width: '100%',
  marginTop: '4.0rem',
  background: 'white',
  justifyContent: 'column',
  alignItems: 'center',
});

export const subSectionStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
  paddingTop: '0.8rem',
  paddingBottom: '0.8rem',
  borderBottom: `1px ${globalTheme.colors.gray_stroke_E2} solid`,
});

export const paragraphStyle1 = style({
  ...globalTheme.fonts.mobileHeadSemiBold18,
  color: globalTheme.colors.gray_19,
});
export const paragraphStyle2 = style({
  ...globalTheme.fonts.mobileDetailReg14,
  color: globalTheme.colors.gray_71,
});
export const textBtnStyle = style({
  ...globalTheme.fonts.mobileBodyReg16,
  cursor: 'pointer',
  transition: 'color 0.3s ease',
  ':active': {
    color: globalTheme.colors.blue_main, // 또는 원하는 색상으로 변경
  },
});
