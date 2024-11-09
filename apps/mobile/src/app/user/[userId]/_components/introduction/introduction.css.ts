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
    border: '1px solid transparent',
    color: globalTheme.colors.gray_19,
    width: '100%',
    whiteSpace: 'normal',
  },
  edit: {
    ...globalTheme.fonts.headBold36,
    width: '100%',
    border: `1px solid ${globalTheme.colors.blue_main}`,
    borderRadius: 8,
    color: globalTheme.colors.gray_19,
    backgroundColor: globalTheme.colors.gray_bg_05,
    whiteSpace: 'normal',
  },
});

export const headingSubTitleStyle = style({
  ...globalTheme.fonts.mobileTitleSemiBold20,
  padding: '0 0.6rem',
  color: globalTheme.colors.gray_19,
});

export const paragraphContentStyle = styleVariants({
  default: {
    ...globalTheme.fonts.mobileBodyReg16,
    padding: '0 0.6rem',
    color: globalTheme.colors.blue_33,
    border: '1px solid transparent',
  },
  edit: {
    ...globalTheme.fonts.mobileBodyReg16,
    border: `1px solid ${globalTheme.colors.blue_main}`,
    borderRadius: 8,
    padding: '0 0.6rem',
    color: globalTheme.colors.blue_33,
    backgroundColor: globalTheme.colors.gray_bg_05,
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
