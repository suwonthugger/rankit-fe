import { globalTheme } from '@rankit/styles';
import { style } from '@vanilla-extract/css';

export const divStyle = style({
  margin: '0 auto',
  padding: '0 3.8rem',
  width: '1180px',

  '@media': {
    '(max-width: 1180px)': {
      width: '100%',
    },
  },
});

export const sectionStyle = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  marginTop: '22rem',
  marginBottom: '66rem',

  '@media': {
    '(max-width: 1180px)': {
      justifyContent: 'center',
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

export const rightDivStyle = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  textAlign: 'end',
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
