import { style } from '@vanilla-extract/css';
import { globalTheme } from '@/shared/styles/globalTheme.css';

export const containerStyle = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 8,
  position: 'relative',
  width: 167,
  height: 145,
  color: globalTheme.colors.gray_19,
  backgroundColor: globalTheme.colors.gray_bg_04,
});

export const headingStyle = style({
  ...globalTheme.fonts.mobileDetailReg14,
  position: 'absolute',
  top: '1.6rem',
  left: '1.6rem',
});

export const contentParagraphStyle = style({
  ...globalTheme.fonts.mobileTitleBold28,
});

export const subContentParagraphStyle = style({
  ...globalTheme.fonts.mobileDetailReg14,
  position: 'absolute',
  bottom: '1.6rem',
  left: '1.6rem',
});
