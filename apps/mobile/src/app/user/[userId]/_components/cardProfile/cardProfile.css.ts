import { style } from '@vanilla-extract/css';
import { globalTheme } from '@/shared/styles/globalTheme.css';

export const containerStyle = style({
  border: `1px solid ${globalTheme.colors.gray_stroke}`,
  borderRadius: 8,
  width: '16.7rem',
  overflow: 'hidden',
});

export const imageDivStyle = style({
  borderRadius: 8,
  width: '16.7rem',
  height: '16.7rem',
});

export const imageStyle = style({
  objectFit: 'cover',
});

export const contentDivStyle = style({
  paddingTop: '0.73rem',
  paddingLeft: '1rem',
  paddingRight: '1rem',
});

export const languageParagraphStyle = style({
  ...globalTheme.fonts.mobileDetailSemiBold14,
  color: globalTheme.colors.blue_main,
  marginBottom: '0.36rem',
});

export const titleDivStyle = style({
  ...globalTheme.fonts.mobileHeadSemiBold18,
  display: 'flex',
  alignItems: 'row',
  gap: '0.3rem',
});

export const labelDivStyle = style({
  display: 'flex',
  gap: '0.5em',
});

export const labelStyle = style({
  ...globalTheme.fonts.detailMed12,
  marginTop: '1.0rem',
  marginBottom: '1.36rem',
  borderRadius: 4,
  padding: '0.4rem 0.8rem',
  color: globalTheme.colors.blue_66,
  backgroundColor: globalTheme.colors.gray_bg_04,
});
