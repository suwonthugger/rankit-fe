import { style } from '@vanilla-extract/css';
import { globalTheme } from '@/shared/styles/globalTheme.css';

export const boardContainerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  border: `0.1rem solid ${globalTheme.colors.gray_stroke_E2}`,
  borderRadius: 8,
  width: '57.6rem',
  height: '81.6rem',
  backgroundColor: globalTheme.colors.white,
  boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
});

export const boardHeaderStyle = style({
  ...globalTheme.fonts.bodyReg16,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1.4rem 0',
  borderBottom: `0.1rem solid ${globalTheme.colors.blue_main}`,
  height: '4.8rem',
  color: globalTheme.colors.gray_71,
});

export const boardListStyle = style({
  display: 'flex',
  flexDirection: 'column',
  overflow: 'auto',
});

export const boardRowStyle = style({
  ...globalTheme.fonts.bodyReg16,
  display: 'flex',
  alignItems: 'center',
  gap: '1.6rem',
  padding: '2.4rem 5rem',
  borderBottom: `0.1rem solid ${globalTheme.colors.gray_stroke_E2}`,
  color: globalTheme.colors.gray_19,
});
