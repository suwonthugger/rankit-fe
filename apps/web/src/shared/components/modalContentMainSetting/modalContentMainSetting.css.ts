import { globalTheme } from '@rankit/styles';
import { style } from '@vanilla-extract/css';

export const headingStyle = style({
  ...globalTheme.fonts.headBold24,
  color: globalTheme.colors.gray_19,
  marginTop: '4.8rem',
  marginBottom: '1.6rem',
  marginLeft: '4.8rem',
});

export const sectionStyle = style({
  width: '100%',
  height: '100%',
  paddingLeft: 48,
  paddingRight: 48,
  paddingTop: 10,
  paddingBottom: 10,
  background: 'white',
  borderBottom: `1px ${globalTheme.colors.gray_stroke_E2} solid`,
  justifyContent: 'space-between',
  alignItems: 'center',
  display: 'inline-flex',
});

export const paragraphStyle1 = style({
  ...globalTheme.fonts.subheadBold20,
  color: globalTheme.colors.gray_19,
});
export const paragraphStyle2 = style({
  ...globalTheme.fonts.bodyReg16,
  color: globalTheme.colors.gray_71,
});
