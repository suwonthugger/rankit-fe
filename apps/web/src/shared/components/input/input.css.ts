import { style, styleVariants } from '@vanilla-extract/css';
import { globalTheme } from '@/shared/styles/globalTheme.css';

export const container = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
});

const inputContainerCommonStyle = style({
  ...globalTheme.fonts.subheadSemiBold20,
  display: 'flex',
  alignItems: 'center',
  border: `0.1rem solid ${globalTheme.colors.gray_stroke}`,
  borderRadius: 8,
  backgroundColor: globalTheme.colors.white,
  color: globalTheme.colors.gray_19,
  boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
});

export const inputContainerStyle = styleVariants({
  desktop: [
    inputContainerCommonStyle,
    {
      ...globalTheme.fonts.subheadSemiBold20,
      gap: '1.6rem',
      width: '57.6rem',
      height: '7.2rem',
    },
  ],
  mobile: [
    inputContainerCommonStyle,
    {
      ...globalTheme.fonts.mobileBodyMed16,
      gap: '0.6rem',
      width: '35.1rem',
      height: '6rem',
    },
  ],
});

export const inputStyle = style({
  width: '100%',
  '::placeholder': {
    color: globalTheme.colors.gray_A8,
    opacity: 1,
  },
});

export const inputPaddingDefaultStyle = styleVariants({
  desktop: {
    padding: '2.4rem 3.2rem',
  },
  mobile: {
    padding: '2rem 1.6rem',
  },
});

export const inputPaddingSearchStyle = styleVariants({
  desktop: {
    padding: '2rem',
  },
  mobile: {
    padding: '2rem 1.6rem',
  },
});

export const InputMenuStyle = styleVariants({
  desktop: {
    ...globalTheme.fonts.bodyReg16,
    position: 'absolute',
    top: '7.2rem',
    width: '57.6rem',
    height: '23.8rem',
    padding: '8px 0',
    border: `1px solid ${globalTheme.colors.gray_stroke}`,
    borderRadius: 8,
    backgroundColor: globalTheme.colors.white,
    overflowY: 'auto',
    boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
    zIndex: 1,
  },
  mobile: {
    ...globalTheme.fonts.bodyReg16,
    position: 'absolute',
    top: '6rem',
    width: '35.1rem',
    height: '23.8rem',
    padding: '8px 0',
    border: `1px solid ${globalTheme.colors.gray_stroke}`,
    borderRadius: 8,
    backgroundColor: globalTheme.colors.white,
    overflowY: 'auto',
    boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
    zIndex: 1,
  },
});

export const inputMenuItemStyle = styleVariants({
  desktop: {
    ...globalTheme.fonts.bodyReg16,
    width: '57.6rem',
    height: '5.4rem',
    padding: '1.6rem 4.6rem',
    borderBottom: `0.1rem solid ${globalTheme.colors.gray_stroke}`,
    cursor: 'pointer',
    selectors: {
      '&:first-child': {
        borderTop: `0.1rem solid ${globalTheme.colors.gray_stroke}`,
      },
      '&:hover': {
        backgroundColor: globalTheme.colors.gray_bg_04,
      },
    },
  },
  mobile: {
    width: '35.1rem',
    height: '5.4rem',
    padding: '1.6rem',
    borderBottom: `0.1rem solid ${globalTheme.colors.gray_stroke}`,
    cursor: 'pointer',
    selectors: {
      '&:first-child': {
        borderTop: `0.1rem solid ${globalTheme.colors.gray_stroke}`,
      },
      '&:hover': {
        backgroundColor: globalTheme.colors.gray_bg_04,
      },
    },
  },
});

export const rankBoardRowStyle = style({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '1.6rem 0',
  borderBottom: `0.1rem solid ${globalTheme.colors.gray_stroke_E2}`,
  textAlign: 'center',
  color: globalTheme.colors.gray_19,
});

export const rankBoardItemStyle = styleVariants({
  lg: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.8rem',
    width: '20rem',
  },
  sm: {
    width: '12rem',
  },
});

export const rankBoardItemLargeStyle = styleVariants({
  desktop: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.8rem',
    width: '20rem',
  },
  mobile: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.8rem',
    width: '14rem',
  },
});

export const rankBoardRowParagraphStyle = styleVariants({
  desktop: {
    width: '14rem',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
  mobile: {
    width: '10rem',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
});

export const rankBoardItemSmallStyle = styleVariants({
  desktop: {
    width: '12rem',
  },
  mobile: {
    width: '8rem',
  },
});
