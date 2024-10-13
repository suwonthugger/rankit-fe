import { globalTheme } from '@rankit/styles/dist';
import { style } from '@vanilla-extract/css';

export const boardContainerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '0.8rem',
  border: `0.1rem solid ${globalTheme.colors.gray_stroke_E2}`,
  borderRadius: 8,
  width: '35.1rem',
  height: '60rem',
  backgroundColor: globalTheme.colors.white,
  boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
});

export const boardHeaderStyle = style({
  ...globalTheme.fonts.mobileDetailReg14,
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
  padding: '0.8rem 1.6rem',
  borderBottom: `0.1rem solid ${globalTheme.colors.gray_stroke_E2}`,
  color: globalTheme.colors.gray_19,
});

export const paragraphStyle = style({
  width: '27.9rem',
});
