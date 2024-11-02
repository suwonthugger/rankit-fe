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
  gap: '16.0rem',
  padding: '4rem 2.1rem',
});

export const sectionStyle = style({
  display: 'flex',
});

export const sectionBetweenStyle = style([
  sectionStyle,
  {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
]);

export const imgStyle = style({
  maxWidth: '50%',
  width: 'auto',
  height: 'auto',
  objectFit: 'contain',
});

export const headingStyle1 = style({
  ...globalTheme.fonts.mobileTitleBold28,
});
export const titleStyle1 = style({
  ...globalTheme.fonts.mobileTitleSemiBold20,
  color: globalTheme.colors.blue_main,
});

export const paragraphEndStyle = style({
  ...globalTheme.fonts.mobileBodyMed16,
  textAlign: 'right',
});

export const paragraphCenterStyle = style({
  ...globalTheme.fonts.mobileBodyMed16,
  textAlign: 'center',
});

//티어 관련
export const tierIntroduceDivStyle = style({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'row',
  gap: '1.6rem',
});

export const tierIntroduceSubDivStyle = style({
  ...globalTheme.fonts.mobileBodyMed16,
  display: 'flex',
  flexDirection: 'row',
  gap: '0.8rem',
  marginTop: '0.4rem',
  marginBottom: '0.4rem',
});

export const developerDivStyle = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '1.6rem',
  marginBottom: '1.6rem',
});
