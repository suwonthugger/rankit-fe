import { style, styleVariants } from '@vanilla-extract/css';
import { globalTheme } from '@/shared/styles/globalTheme.css';

export const alignCenter = style({
  display: 'flex',
  alignItems: 'center',
});

export const buttonStyle = style([
  alignCenter,
  {
    justifyContent: 'space-between',
    gap: '0.8rem',
    borderRadius: 8,
  },
]);

// 사이즈, 컬러별 variant
export const containerVariant = styleVariants({
  lg: {
    padding: '1rem 3.2rem',
  },
  sm: {
    padding: '0.8rem 1.6rem',
  },
});

export const fontVariant = styleVariants({
  lg: { ...globalTheme.fonts.subheadBold20 },
  sm: { ...globalTheme.fonts.bodySemiBold16 },
});

export const colorVariant = styleVariants({
  primary: {
    backgroundColor: globalTheme.colors.blue_main,
    color: globalTheme.colors.white,
    ':hover': { backgroundColor: globalTheme.colors.blue_hover },
    ':active': { backgroundColor: globalTheme.colors.blue_press },
  },
  secondary: {
    backgroundColor: globalTheme.colors.gray_bg_04,
    color: globalTheme.colors.blue_33,
    ':hover': {
      backgroundColor: globalTheme.colors.gray_bg_05,
      color: globalTheme.colors.blue_hover,
    },
    ':active': {
      backgroundColor: globalTheme.colors.gray_bg_03,
      color: globalTheme.colors.blue_press,
    },
  },
});
