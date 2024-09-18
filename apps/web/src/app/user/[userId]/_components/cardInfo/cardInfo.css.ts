import { globalTheme } from '@rankit/styles';
import { style } from '@vanilla-extract/css';

export const containerStyle = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 8,
  position: 'relative',
  width: 258,
  height: 224,
  color: globalTheme.colors.gray_19,
  backgroundColor: globalTheme.colors.gray_bg_04,
});

export const headingStyle = style({
  ...globalTheme.fonts.bodyReg16,
  position: 'absolute',
  top: '1.6rem',
  left: '1.6rem',
});

export const contentParagraphStyle = style({
  ...globalTheme.fonts.titleBold32,
});

export const subContentParagraphStyle = style({
  ...globalTheme.fonts.bodyReg16,
  position: 'absolute',
  bottom: '1.6rem',
  left: '1.6rem',
});
