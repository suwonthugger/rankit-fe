import { style } from '@vanilla-extract/css';
import { globalTheme } from '@/shared/styles/globalTheme.css';

export const sectionStyle = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100%',
});

export const topDivStyle = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
});

export const headingStyle = style({
  ...globalTheme.fonts.titleBold64,
});

export const bottonDiv = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
});

export const topParagraphStyle = style({
  ...globalTheme.fonts.bodyReg16,
  color: globalTheme.colors.gray_71,
});

export const bottomParagraphStyle = style({
  ...globalTheme.fonts.bodySemiBold16,
  color: globalTheme.colors.blue_main,
});
