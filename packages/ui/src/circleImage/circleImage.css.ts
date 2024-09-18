import { style, styleVariants } from '@vanilla-extract/css';

export const divStyle = styleVariants({
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
