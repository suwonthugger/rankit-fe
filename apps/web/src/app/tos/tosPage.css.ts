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

export const contentStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4.4rem',
});

export const titleStyle = style({
  ...globalTheme.fonts.headBold36,
  color: globalTheme.colors.gray_19,
});

export const headingStyle = style({
  ...globalTheme.fonts.subheadBold20,
  color: globalTheme.colors.gray_19,
  marginBottom: '1.6rem',
});

export const paragraphStyle = style({
  ...globalTheme.fonts.bodyReg16,
  color: globalTheme.colors.gray_19,
});
