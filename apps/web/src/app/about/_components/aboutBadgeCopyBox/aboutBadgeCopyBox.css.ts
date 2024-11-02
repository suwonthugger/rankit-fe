import { style } from '@vanilla-extract/css';
import { globalTheme } from '@/shared/styles/globalTheme.css';

export const divStyle = style({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  padding: '1.6rem',
  marginTop: '4.0rem',
  borderRadius: '0.8rem',
  border: `0.1rem solid ${globalTheme.colors.gray_stroke}`,
  backgroundColor: globalTheme.colors.white,
  ...globalTheme.fonts.bodySemiBold16,
  color: globalTheme.colors.gray_19,
});
