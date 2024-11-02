import { style } from '@vanilla-extract/css';
import { globalTheme } from '@/shared/styles/globalTheme.css';

export const flexCenter = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const sectionStyle = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  height: '100%',

  '@media': {
    '(max-width: 1180px)': {
      justifyContent: 'center',
      height: '80%',
    },
  },
});

export const headingStyle = style({
  ...globalTheme.fonts.titleBold64,
});

export const paragraphStyle = style({
  ...globalTheme.fonts.bodyReg16,
  color: globalTheme.colors.gray_71,
});

export const rightDivStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2.4rem',
});

export const rightDivParagraphStyle = style({
  ...globalTheme.fonts.bodyReg16,
  display: 'flex',
  alignItems: 'center',
  gap: '1.2rem',
});

export const nextDivStyle = style({
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  gap: '2.4rem',
});

export const skipButtonStyle = style({
  position: 'absolute',
  right: 0,
  bottom: 9,
});

export const InputMenuPlaceholderStyle = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
});
