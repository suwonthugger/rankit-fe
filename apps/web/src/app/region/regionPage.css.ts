import { style } from '@vanilla-extract/css';
import { globalTheme } from '@/shared/styles/globalTheme.css';

export const containerStyle = style({
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',

  margin: '12rem auto',
  padding: '0 3.8rem',
  width: '1180px',

  '@media': {
    '(max-width: 1180px)': {
      justifyContent: 'center',
      gap: '3rem',

      width: '100%',
    },
  },
});

export const leftDivStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2.8rem',

  '@media': {
    '(max-width: 1180px)': {
      width: '57.6rem',
    },
  },
});

export const headingStyle = style({
  ...globalTheme.fonts.titleSemiBold56,
  color: globalTheme.colors.gray_19,
});

export const spanStyle = style({
  color: globalTheme.colors.blue_main,
  ...globalTheme.fonts.titleBold32,
});

export const paragraphStyle = style({
  ...globalTheme.fonts.bodySemiBold26,
  color: globalTheme.colors.gray_19,
});

export const rightDivStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2.4rem',
});
