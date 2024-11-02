import { style } from '@vanilla-extract/css';
import { globalTheme } from '@/shared/styles/globalTheme.css';

export const mainDivStyle = style({
  margin: '0 auto',
  padding: '0 4.8rem',
  width: '1180px',

  '@media': {
    '(max-width: 1180px)': {
      width: '100%',
    },
  },
});

export const divStyle = style({
  margin: '0 auto',
  width: '1180px',

  '@media': {
    '(max-width: 1180px)': {
      width: '100%',
    },
  },
});

export const badgeSectionStyle = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  marginTop: '22rem',
  marginBottom: '6.4rem',
  paddingLeft: '6rem',
  paddingRight: '6rem',
  '@media': {
    '(max-width: 1180px)': {
      gap: '4rem',
    },
  },
});

export const sectionStyle = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  marginTop: '22rem',
  marginBottom: '22rem',

  '@media': {
    '(max-width: 1180px)': {
      gap: '4rem',
    },
  },
});

// headingStyle 관련
const baseHeadingStyle = {
  ...globalTheme.fonts.titleSemiBold56,
  color: globalTheme.colors.gray_19,
};

export const headingStyle1 = style(baseHeadingStyle);
export const headingStyle2 = style({
  ...baseHeadingStyle,
  marginBottom: '2.4rem',
});
export const headingStyle3 = style({
  ...baseHeadingStyle,
  marginBottom: '22rem',
});

// paragraphStyle 관련
export const paragraphStyle = style({
  ...globalTheme.fonts.bodySemiBold26,
  color: globalTheme.colors.gray_19,
});

export const smallParagraphStyle = style({
  ...globalTheme.fonts.bodyReg16,
  color: globalTheme.colors.gray_19,
});

export const rightDivStyle = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  textAlign: 'end',
  gap: '1.6rem',
});

// titleStyle 관련
export const titleStyle1 = style({
  ...globalTheme.fonts.titleBold32,
  color: globalTheme.colors.blue_main,
  marginBottom: '3.6rem',
});
export const titleStyle2 = style({
  ...globalTheme.fonts.titleBold32,
  color: globalTheme.colors.blue_main,
  marginTop: '22rem',
  marginBottom: '3.6rem',
});

export const tierImgDivStyle = style({
  display: 'flex',
  flexDirection: 'row',
  height: '4.8rem',
  gap: '1.6rem',
  marginBottom: '5.6rem',
});

export const tierIntroduceDivStyle = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '3.2rem',
});

export const tierIntroduceSubDivStyle = style({
  display: 'flex',
  flexDirection: 'row',
  height: '4.8rem',
  gap: '1.6rem',
  marginTop: '0.8rem',
  marginBottom: '0.8rem',
  ...globalTheme.fonts.bodySemiBold26,
});
