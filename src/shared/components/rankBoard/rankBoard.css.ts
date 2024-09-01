import { style, styleVariants } from '@vanilla-extract/css';
import { globalTheme } from '@/shared/styles/globalTheme.css';

export const rankBoardContainerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  border: `0.1rem solid ${globalTheme.colors.gray_stroke_E2}`,
  borderRadius: 8,
  width: '57.6rem',
  height: '81.6rem',
  backgroundColor: globalTheme.colors.white,
  boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
});

export const rankBoardheaderStyle = style({
  ...globalTheme.fonts.bodyReg16,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1.2rem 4.8rem',
  borderBottom: `0.1rem solid ${globalTheme.colors.blue_main}`,
  height: '4.8rem',
  color: globalTheme.colors.gray_71,
});

export const rankBoardListStyle = style({
  display: 'flex',
  flexDirection: 'column',
  overflow: 'auto',
});

export const rankBoardRowStyle = style({
  ...globalTheme.fonts.bodyReg16,
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

export const rankBoardImgeContainer = style({
  borderRadius: '50%',
  width: '32px',
  height: '32px',
  overflow: 'hidden',
});

export const rankBoardImageStyle = style({
  objectFit: 'cover',
});
