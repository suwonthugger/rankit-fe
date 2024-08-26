// styles/globalTheme.css.ts
import { createGlobalTheme } from '@vanilla-extract/css';

const fontSizes = {
  titleBold64: '6.4rem',
  titleSemiBold56: '5.6rem',
  titleBold32: '3.2rem',
  headBold36: '3.6rem',
  headBold24: '2.4rem',
  subheadBold20: '2rem',
  subheadSemiBold20: '2rem',
  bodySemiBold26: '2.6rem',
  bodySemiBold16: '1.6rem',
  bodyReg16: '1.6rem',
  detailMed14: '1.4rem',
  detailMed12: '1.2rem',
  headerReg16: '1.6rem',
  mobileTitleBold28: '2.8rem',
  mobileTitleBold20: '2rem',
  mobileTitleSemiBold20: '2rem',
  mobileHeadSemiBold18: '1.8rem',
  mobileSubheadMed18: '1.8rem',
  mobileBodyMed16: '1.6rem',
  mobileBodyReg16: '1.6rem',
  mobileDetailSemiBold14: '1.4rem',
  mobileDetailReg14: '1.4rem',
};

const fontWeights = {
  bold: '700',
  semiBold: '600',
  medium: '500',
  regular: '400',
};

const lineHeights = {
  large: '160%',
  medium: '150%',
  small: '140%',
  xsmall: '120%',
};

export const globalTheme = createGlobalTheme(':root', {
  fonts: {
    titleBold64: {
      fontSize: fontSizes.titleBold64,
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights.large,
    },
    titleSemiBold56: {
      fontSize: fontSizes.titleSemiBold56,
      fontWeight: fontWeights.semiBold,
      lineHeight: lineHeights.small,
    },
    titleBold32: {
      fontSize: fontSizes.titleBold32,
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights.medium,
    },
    headBold36: {
      fontSize: fontSizes.headBold36,
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights.medium,
    },
    headBold24: {
      fontSize: fontSizes.headBold24,
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights.medium,
    },
    subheadBold20: {
      fontSize: fontSizes.subheadBold20,
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights.medium,
    },
    subheadSemiBold20: {
      fontSize: fontSizes.subheadSemiBold20,
      fontWeight: fontWeights.semiBold,
      lineHeight: lineHeights.xsmall,
    },
    bodySemiBold26: {
      fontSize: fontSizes.bodySemiBold26,
      fontWeight: fontWeights.semiBold,
      lineHeight: lineHeights.medium,
    },
    bodySemiBold16: {
      fontSize: fontSizes.bodySemiBold16,
      fontWeight: fontWeights.semiBold,
      lineHeight: lineHeights.xsmall,
    },
    bodyReg16: {
      fontSize: fontSizes.bodyReg16,
      fontWeight: fontWeights.regular,
      lineHeight: lineHeights.small,
    },
    detailMed14: {
      fontSize: fontSizes.detailMed14,
      fontWeight: fontWeights.medium,
      lineHeight: lineHeights.small,
    },
    detailMed12: {
      fontSize: fontSizes.detailMed12,
      fontWeight: fontWeights.medium,
      lineHeight: lineHeights.small,
    },
    headerReg16: {
      fontSize: fontSizes.headerReg16,
      fontWeight: fontWeights.regular,
      lineHeight: lineHeights.small,
    },
    mobileTitleBold28: {
      fontSize: fontSizes.mobileTitleBold28,
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights.medium,
    },
    mobileTitleBold20: {
      fontSize: fontSizes.mobileTitleBold20,
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights.medium,
    },
    mobileTitleSemiBold20: {
      fontSize: fontSizes.mobileTitleSemiBold20,
      fontWeight: fontWeights.semiBold,
      lineHeight: lineHeights.medium,
    },
    mobileHeadSemiBold18: {
      fontSize: fontSizes.mobileHeadSemiBold18,
      fontWeight: fontWeights.semiBold,
      lineHeight: lineHeights.medium,
    },
    mobileSubheadMed18: {
      fontSize: fontSizes.mobileSubheadMed18,
      fontWeight: fontWeights.medium,
      lineHeight: lineHeights.medium,
    },
    mobileBodyMed16: {
      fontSize: fontSizes.mobileBodyMed16,
      fontWeight: fontWeights.medium,
      lineHeight: lineHeights.medium,
    },
    mobileBodyReg16: {
      fontSize: fontSizes.mobileBodyReg16,
      fontWeight: fontWeights.regular,
      lineHeight: lineHeights.medium,
    },
    mobileDetailSemiBold14: {
      fontSize: fontSizes.mobileDetailSemiBold14,
      fontWeight: fontWeights.semiBold,
      lineHeight: lineHeights.small,
    },
    mobileDetailReg14: {
      fontSize: fontSizes.mobileDetailReg14,
      fontWeight: fontWeights.regular,
      lineHeight: lineHeights.small,
    },
  },
  colors: {
    blue_main: '#1368E8',
    blue_hover: '#247BFE',
    blue_press: '#1B5ECB',
    blue_disable: '#799BCE',

    gray_bg_01: '#212730',
    gray_bg_02: '#4E5968',
    gray_bg_03: '#BDBDBD',
    gray_bg_04: '#E6E8EA',
    gray_bg_05: '#F3F4F5',
    gray_bg_06: '#F9FAFB',

    gray_19: '#191919',
    blue_33: '#333D44',
    blue_66: '#666E7A',
    gray_71: '#717171',
    gray_A8: '#A8A8A8',

    error: '#FF5F5F',
    error_press: '#C42424',

    white: '#FFFFFF',
    gray_shadow: '#7E7E7E80', // 투명도 추가
    gray_stroke: '#E7E7E7',
    gray_stroke_E2: '#E2E2E2',
  },
});
