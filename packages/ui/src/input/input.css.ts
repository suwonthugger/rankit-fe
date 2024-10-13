import { globalTheme } from '@rankit/styles';
import { style, styleVariants } from '@vanilla-extract/css';

const inputContainerCommonStyle = style({
  ...globalTheme.fonts.subheadSemiBold20,
  display: 'flex',
  alignItems: 'center',
  border: `0.1rem solid ${globalTheme.colors.gray_stroke}`,
  borderRadius: 8,
  backgroundColor: globalTheme.colors.white,
  color: globalTheme.colors.gray_19,
  boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
});

export const inputContainerStyle = styleVariants({
  desktop: [
    inputContainerCommonStyle,
    {
      ...globalTheme.fonts.subheadSemiBold20,
      gap: '1.6rem',
      width: '57.6rem',
      height: '7.2rem',
    },
  ],
  mobile: [
    inputContainerCommonStyle,
    {
      ...globalTheme.fonts.mobileBodyMed16,
      gap: '0.6rem',
      width: '35.1rem',
      height: '6rem',
    },
  ],
});

export const inputStyle = style({
  width: '100%',
  '::placeholder': {
    color: globalTheme.colors.gray_A8,
    opacity: 1,
  },
});

export const inputPaddingDefaultStyle = styleVariants({
  desktop: {
    padding: '2.4rem 3.2rem',
  },
  mobile: {
    padding: '2rem 1.6rem',
  },
});

export const inputPaddingSearchStyle = styleVariants({
  desktop: {
    padding: '2rem',
  },
  mobile: {
    padding: '2rem 1.6rem',
  },
});
