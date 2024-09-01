import { style, styleVariants } from '@vanilla-extract/css';
import { globalTheme } from '@/shared/styles/globalTheme.css';

export const inputContainerStyle = style({
  ...globalTheme.fonts.subheadSemiBold20,
  display: 'flex',
  alignItems: 'center',
  gap: '1.6rem',
  border: `0.1rem solid ${globalTheme.colors.gray_stroke}`,
  borderRadius: 8,
  backgroundColor: globalTheme.colors.white,
  color: globalTheme.colors.gray_19,
  boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
});

export const inputStyle = style({
  '::placeholder': {
    color: globalTheme.colors.gray_A8,
    opacity: 1,
  },
});

export const inputVariant = styleVariants({
  default: {
    padding: '2.4rem 3.2rem',
  },
  search: {
    padding: '2rem',
  },
});
