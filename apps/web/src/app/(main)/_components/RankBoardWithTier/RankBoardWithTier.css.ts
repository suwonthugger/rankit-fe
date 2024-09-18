import { globalTheme } from '@rankit/styles';
import { style } from '@vanilla-extract/css';

export const tierDivStyle = style({
  ...globalTheme.fonts.subheadSemiBold20,
  color: globalTheme.colors.gray_19,
  display: 'flex',
  gap: '1.4rem',

  marginTop: '7.2rem',
  marginBottom: '1.6rem',
  padding: '1.8rem',

  borderRadius: 8,

  boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
});

export const tierButtonStyle = style({
  textAlign: 'center',
  width: '7.8rem',
  height: '4rem',

  borderRadius: 8,
});

export const selectedTierButtonStyle = style({
  backgroundColor: globalTheme.colors.blue_main,
  color: globalTheme.colors.white,
});
