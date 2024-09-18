import { globalTheme } from '@rankit/styles';
import { style } from '@vanilla-extract/css';

export const contributionDivStyle = style({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '8rem',
  marginBottom: '11.5rem',
  border: `1px solid ${globalTheme.colors.gray_stroke_E2}`,
  borderRadius: 8,
  padding: '1.5rem',
  height: '28.5rem',
  backgroundColor: globalTheme.colors.white,
});

export const contributionTableHeadingStyle = style({
  ...globalTheme.fonts.mobileBodyMed16,
  color: '#767676',
  position: 'absolute',
  top: '1.6rem',
  left: '1.6rem',
});
