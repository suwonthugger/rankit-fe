import { style } from '@vanilla-extract/css';
import { globalTheme } from '@/shared/styles/globalTheme.css';

export const tierDivStyle = style({
  ...globalTheme.fonts.mobileDetailSemiBold14,
  color: globalTheme.colors.gray_19,
  display: 'flex',
  gap: '0.6rem',

  marginTop: '2.4rem',
  marginBottom: '1.6rem',
  padding: '1.5rem 1.1rem 1.1rem 1.1rem',

  borderRadius: 8,

  boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
});

export const tierButtonStyle = style({
  textAlign: 'center',
  width: '5rem',
  height: '3.3rem',

  borderRadius: 8,
});

export const selectedTierButtonStyle = style({
  backgroundColor: globalTheme.colors.blue_main,
  color: globalTheme.colors.white,
});
