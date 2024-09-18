import { globalTheme } from '@rankit/styles';
import { style } from '@vanilla-extract/css';

export const DivStyle = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '3.2rem',
  marginTop: '4.8rem',
});

export const DivInputStyle = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2.4rem',
  marginTop: '1.2rem',
});

export const checkboxButtonStyle = style({
  ...globalTheme.fonts.bodyReg16,
  color: globalTheme.colors.gray_19,
  display: 'flex',
  alignItems: 'center',
  gap: '1.2rem',
});
