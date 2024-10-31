import { style } from '@vanilla-extract/css';
import { globalTheme } from '@/shared/styles/globalTheme.css';

export const sectionStyle = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  height: '100%',

  '@media': {
    '(max-width: 1180px)': {
      justifyContent: 'center',
      gap: '4rem',
      height: '80%',
    },
  },
});

export const headingStyle = style({
  ...globalTheme.fonts.titleBold64,
});

export const topParagraphStyle = style({
  ...globalTheme.fonts.bodyReg16,
  color: globalTheme.colors.gray_71,
});

export const bottomParagraphStyle = style({
  ...globalTheme.fonts.bodySemiBold16,
  color: globalTheme.colors.blue_main,
});

export const rightDivStyle = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'end',
});

export const rightBottomDivStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
});

export const homeButtonStyle = style({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
});
