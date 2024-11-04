import { style } from '@vanilla-extract/css';
import { globalTheme } from '../../../../../../../shared/styles/globalTheme.css';

export const buttonStyle = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
});

export const paragraphGithubStyle = style({
  ...globalTheme.fonts.bodyReg16,
  color: globalTheme.colors.gray_71,
});
