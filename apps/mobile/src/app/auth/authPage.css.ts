import { globalTheme } from '@rankit/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '4rem 4.1rem',
  color: globalTheme.colors.gray_19,
});
