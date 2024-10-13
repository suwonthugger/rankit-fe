import { style, styleVariants } from '@vanilla-extract/css';

export const divStyle = styleVariants({
  mobileSm: {
    borderRadius: '50%',
    width: '24px',
    height: '24px',
    overflow: 'hidden',
  },
  mobileLg: {
    borderRadius: '50%',
    width: '124px',
    height: '124px',
    overflow: 'hidden',
  },
  sm: {
    borderRadius: '50%',
    width: '32px',
    height: '32px',
    overflow: 'hidden',
  },
  lg: {
    borderRadius: '50%',
    width: '222px',
    height: '222px',
    overflow: 'hidden',
  },
});

export const imageStyle = style({
  objectFit: 'cover',
});
