import { style, styleVariants } from '@vanilla-extract/css';
import { globalTheme } from '@/shared/styles/globalTheme.css';

const commonRankBoardContainerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  border: `0.1rem solid ${globalTheme.colors.gray_stroke_E2}`,
  borderRadius: 8,
  width: '57.6rem',
  height: '81.6rem',
  backgroundColor: globalTheme.colors.white,
  boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
});

export const rankBoardContainerStyle = styleVariants({
  desktop: [
    commonRankBoardContainerStyle,
    {
      ...globalTheme.fonts.bodyReg16,
      width: '57.6rem',
      height: '81.6rem',
    },
  ],
  mobile: [
    commonRankBoardContainerStyle,
    {
      ...globalTheme.fonts.mobileBodyReg16,
      width: '35.1rem',
      height: '60rem',
    },
  ],
});

const commonRankBoardHeaderStyle = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: `0.1rem solid ${globalTheme.colors.blue_main}`,
  color: globalTheme.colors.gray_71,
});

export const rankBoardHeaderStyle = styleVariants({
  desktop: [
    commonRankBoardHeaderStyle,
    {
      padding: '1.2rem 4.8rem',
      height: '4.8rem',
    },
  ],
  mobile: [
    commonRankBoardHeaderStyle,
    {
      padding: '1.1rem 2.3rem 1rem 2.3rem',
      height: '3.5rem',
    },
  ],
});

export const rankBoardListStyle = style({
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'auto',
  height: '100%',
  backgroundColor: globalTheme.colors.white,
});

export const rankBoardRowStyle = style({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '1.6rem 0',
  borderBottom: `0.1rem solid ${globalTheme.colors.gray_stroke_E2}`,
  textAlign: 'center',
  color: globalTheme.colors.gray_19,
  ':hover': { backgroundColor: globalTheme.colors.gray_bg_05 },
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

export const spinnerContainerStyle = style({
  display: 'flex',
  flexGrow: 1,
  justifyContent: 'center',
  alignItems: 'center',
});

export const observerStyle = style({
  display: 'flex',
  alignItems: 'center',
  minHeight: 28,
});
