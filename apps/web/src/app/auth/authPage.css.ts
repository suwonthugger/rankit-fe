import { style } from '@vanilla-extract/css';

export const divStyle = style({
  margin: '0 auto',
  padding: '0 3.8rem',
  width: '1180px',

  '@media': {
    '(max-width: 1180px)': {
      width: '100%',
    },
  },
});
