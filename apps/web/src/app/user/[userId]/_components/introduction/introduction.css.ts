import { style, styleVariants } from '@vanilla-extract/css';
import { globalTheme } from '@/shared/styles/globalTheme.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});

export const headingTitleStyle = styleVariants({
  default: {
    ...globalTheme.fonts.headBold36,
    padding: '0 1.2rem',
    color: globalTheme.colors.gray_19,
    border: '1px solid transparent',
  },
  edit: {
    ...globalTheme.fonts.headBold36,
    padding: '0 1.2rem',
    border: `1px solid ${globalTheme.colors.blue_main}`,
    borderRadius: 8,
    color: globalTheme.colors.gray_19,
    backgroundColor: globalTheme.colors.gray_bg_05,
  },
});

export const headingSubTitleStyle = style({
  ...globalTheme.fonts.subheadBold20,
  padding: '0 1.2rem',
  color: globalTheme.colors.gray_19,
});

export const paragraphContentStyle = styleVariants({
  default: {
    ...globalTheme.fonts.bodyReg16,
    color: globalTheme.colors.blue_33,
    padding: '0.9rem 1.2rem',
    border: '1px solid transparent',
  },
  edit: {
    ...globalTheme.fonts.bodyReg16,
    padding: '0.9rem 1.2rem',
    color: globalTheme.colors.blue_33,
    backgroundColor: globalTheme.colors.gray_bg_05,
    border: `1px solid ${globalTheme.colors.blue_main}`,
    borderRadius: 8,
  },
});

export const contentDivStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4.8rem',
  marginTop: '4.3rem',
});

export const contentStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
});
