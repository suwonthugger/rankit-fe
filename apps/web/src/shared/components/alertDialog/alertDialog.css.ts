import { style, styleVariants } from '@vanilla-extract/css';
import { globalTheme } from '@/shared/styles/globalTheme.css';

export const alertDialogOverlay = style({
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  position: 'fixed',
  inset: 0,
});

const defaultAlertDialogContentStyle = style({
  borderRadius: '0.8rem',
  boxShadow:
    '0px 10px 38px rgba(0, 0, 0, 0.35), 0px 10px 20px rgba(0, 0, 0, 0.2)',
  padding: '1.6rem',
  position: 'fixed',
  top: '1.6rem',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '37rem',
  //maxWidth: '78rem',
  zIndex: 1000,
});

export const alertDialogContent = styleVariants({
  blue: [
    defaultAlertDialogContentStyle,
    {
      backgroundColor: globalTheme.colors.blue_main,
    },
  ],
  red: [
    defaultAlertDialogContentStyle,
    {
      backgroundColor: globalTheme.colors.error,
    },
  ],
});

export const titleStyle = style({
  color: globalTheme.colors.white,
  ...globalTheme.fonts.subheadBold20,
  marginBottom: '0.8rem',
});

export const descriptionStyle = style({
  color: globalTheme.colors.white,
  ...globalTheme.fonts.bodyReg16,
  marginBottom: '2.4rem',
});

export const buttonStyle = styleVariants({
  textBtn: {
    ...globalTheme.fonts.headerReg16,
    color: globalTheme.colors.blue_33,
    border: 'none',
    cursor: 'pointer',
    ':hover': {
      color: globalTheme.colors.blue_hover,
    },
  },
  normalBtn: {
    ...globalTheme.fonts.bodySemiBold16,
    backgroundColor: globalTheme.colors.blue_main,
    color: globalTheme.colors.white,
    width: '16.2rem',
    height: '4.0rem',
    border: 'none',
    borderRadius: '0.8rem',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    ':hover': {
      backgroundColor: globalTheme.colors.blue_hover,
    },
  },
});

export const confirmBtnStyle = styleVariants({
  red: {
    //사용금지 내부에서 사용됨
    ...globalTheme.fonts.bodySemiBold16,
    backgroundColor: globalTheme.colors.white,
    color: globalTheme.colors.error,
    border: 'none',
    padding: '1rem 6.4rem',
    borderRadius: '0.8rem',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: globalTheme.colors.gray_bg_04,
    },
  },
  blue: {
    //사용금지 내부에서 사용됨
    ...globalTheme.fonts.bodySemiBold16,
    backgroundColor: globalTheme.colors.white,
    color: globalTheme.colors.blue_main,
    border: 'none',
    padding: '1rem 6.4rem',
    borderRadius: '0.8rem',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: globalTheme.colors.gray_bg_04,
    },
  },
});

export const cancelBtnStyle = style({
  //사용금지 내부에서 사용됨
  ...globalTheme.fonts.bodySemiBold16,
  backgroundColor: 'rgba(0, 0, 0, 0)',
  color: globalTheme.colors.white, // 완전히 투명한 글자
  border: `1px solid ${globalTheme.colors.white}`,
  padding: '1rem 6.4rem',
  borderRadius: '0.8rem',
  cursor: 'pointer',
  ':hover': {
    color: globalTheme.colors.gray_bg_04,
  },
});
