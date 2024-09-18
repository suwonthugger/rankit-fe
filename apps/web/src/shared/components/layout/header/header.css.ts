import { style } from '@vanilla-extract/css';
import { globalTheme } from '../../../styles/globalTheme.css';

export const headerStyle = style({
  display: 'flex',
  justifyContent: 'center',
  padding: '2rem',
  borderBottom: `1px solid ${globalTheme.colors.gray_stroke}`,
  width: '100vw',
  height: '6.8rem',
  backgroundColor: globalTheme.colors.white,
});

export const contentStyle = style({
  display: 'flex',
  justifyContent: 'space-between',
  width: '1180px',

  '@media': {
    '(max-width: 1180px)': {
      width: '100%',
    },
  },
});

export const navStyle = style({
  ...globalTheme.fonts.headerReg16,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '4rem',
  color: globalTheme.colors.blue_33,
});
