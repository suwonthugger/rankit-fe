import { style, styleVariants } from '@vanilla-extract/css';
import { globalTheme } from '@/shared/styles/globalTheme.css';

export const headerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  borderBottom: `1px solid ${globalTheme.colors.gray_stroke}`,
  zIndex: 10,
  overflow: 'hidden',
});

export const topDivStyle = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingLeft: '2.8rem',
  paddingRight: '2rem',
  minHeight: '6rem',
});

export const topRightDivStyle = style({
  display: 'flex',
  alignItems: 'center',
  gap: 19,
});

const commonButtonStyle = style({
  ...globalTheme.fonts.mobileBodyMed16,
  padding: '0.4rem 2.1rem',
  borderRadius: 40,
});

export const buttonStyle = styleVariants({
  primary: [
    commonButtonStyle,
    {
      backgroundColor: globalTheme.colors.blue_main,
      color: globalTheme.colors.white,
    },
  ],
  secondary: [
    commonButtonStyle,
    {
      backgroundColor: globalTheme.colors.gray_bg_04,
      color: globalTheme.colors.gray_19,
    },
  ],
});

export const ulCommonStyle = style({
  borderBottom: `1px solid ${globalTheme.colors.gray_stroke}`,
  width: '100%',
  position: 'absolute',
  overflow: 'hidden',
  transition: 'max-height 0.5s ease, opacity 0.5s ease',
});

export const ulStyle = styleVariants({
  open: [
    ulCommonStyle,
    {
      maxHeight: '30rem',
      opacity: 1,
    },
  ],
  close: [
    ulCommonStyle,
    {
      maxHeight: '0',
      opacity: 0,
    },
  ],
});

export const listStyle = style({
  ...globalTheme.fonts.mobileBodyReg16,
  padding: '1.8rem 2.7rem',
  width: '100%',
  color: globalTheme.colors.gray_19,
  backgroundColor: globalTheme.colors.white,
});
