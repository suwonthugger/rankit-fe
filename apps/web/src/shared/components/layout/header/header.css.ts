import { style, styleVariants } from '@vanilla-extract/css';
import { globalTheme } from '../../../styles/globalTheme.css';

export const headerStyle = style({
  display: 'flex',
  justifyContent: 'center',
  padding: '2rem',
  borderBottom: `1px solid ${globalTheme.colors.gray_stroke}`,
  width: '100vw',
  height: '6.8rem',
  backgroundColor: globalTheme.colors.white,
});

export const contentStyle = style({
  display: 'flex',
  justifyContent: 'space-between',
  width: '1180px',

  '@media': {
    '(max-width: 1180px)': {
      width: '100%',
    },
  },
});

export const navStyle = style({
  ...globalTheme.fonts.headerReg16,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '4rem',
  color: globalTheme.colors.blue_33,
});

// under 700 style

export const under700headerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  borderBottom: `1px solid ${globalTheme.colors.gray_stroke}`,
  zIndex: 10,
  overflow: 'hidden',
});

export const under700topDivStyle = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingLeft: '2.8rem',
  paddingRight: '2rem',
  minHeight: '6rem',
});

export const under700topRightDivStyle = style({
  display: 'flex',
  alignItems: 'center',
  gap: 19,
});

const under700commonButtonStyle = style({
  ...globalTheme.fonts.mobileBodyMed16,
  padding: '0.4rem 2.1rem',
  borderRadius: 40,
});

export const under700buttonStyle = styleVariants({
  primary: [
    under700commonButtonStyle,
    {
      backgroundColor: globalTheme.colors.blue_main,
      color: globalTheme.colors.white,
    },
  ],
  secondary: [
    under700commonButtonStyle,
    {
      backgroundColor: globalTheme.colors.gray_bg_04,
      color: globalTheme.colors.gray_19,
    },
  ],
});

export const under700ulCommonStyle = style({
  borderBottom: `1px solid ${globalTheme.colors.gray_stroke}`,
  width: '100%',
  position: 'absolute',
  overflow: 'hidden',
  transition: 'max-height 0.5s ease, opacity 0.5s ease',
});

export const under700ulStyle = styleVariants({
  open: [
    under700ulCommonStyle,
    {
      maxHeight: '30rem',
      opacity: 1,
    },
  ],
  close: [
    under700ulCommonStyle,
    {
      maxHeight: '0',
      opacity: 0,
    },
  ],
});

export const under700listStyle = style({
  ...globalTheme.fonts.mobileBodyReg16,
  padding: '1.8rem 2.7rem',
  width: '100%',
  color: globalTheme.colors.gray_19,
  backgroundColor: globalTheme.colors.white,
});
