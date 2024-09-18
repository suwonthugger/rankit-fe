import { style } from '@vanilla-extract/css';
import { globalTheme } from '../../styles/globalTheme.css';

export const DivStyle = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2.4rem',
  marginTop: '17.2rem',
});

export const DivParagraphStyle = style({
  ...globalTheme.fonts.bodyReg16,
  color: globalTheme.colors.gray_19,
  display: 'flex',
  alignItems: 'center',
  gap: '1.2rem',
});
