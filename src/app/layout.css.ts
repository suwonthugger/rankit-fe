import { style } from '@vanilla-extract/css';

export const mainStyle = style({
  display: 'flex',
  flexGrow: 1,
  margin: '0 auto',
  padding: '0 3.8rem',
  width: '1180px',

  '@media': {
    '(max-width: 1180px)': {
      width: '100%',
    },
  },
});
