import { globalTheme } from '@rankit/styles';
import { style, styleVariants } from '@vanilla-extract/css';

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
  },
  secondary: {
    backgroundColor: globalTheme.colors.gray_bg_04,
    color: globalTheme.colors.blue_33,
  },
});
