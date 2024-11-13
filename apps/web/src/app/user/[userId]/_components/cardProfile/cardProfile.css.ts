import { style } from '@vanilla-extract/css';
import { globalTheme } from '@/shared/styles/globalTheme.css';

export const containerStyle = style({
  border: `1px solid ${globalTheme.colors.gray_stroke}`,
  borderRadius: 8,
  width: '25.8rem',
  height: '39.5rem',
  overflow: 'hidden',
});

export const imageDivStyle = style({
  borderRadius: 8,
  width: '25.8rem',
  height: '25.8rem',
});

export const imageStyle = style({
  objectFit: 'cover',
});

export const contentDivStyle = style({
  padding: '1.6rem',
});

export const languageParagraphStyle = style({
  ...globalTheme.fonts.bodySemiBold16,
  color: globalTheme.colors.blue_main,
  marginBottom: '0.8rem',
});

export const titleDivStyle = style({
  ...globalTheme.fonts.subheadBold20,
  display: 'flex',
  alignItems: 'center',
  gap: '0.6rem',
});

export const labelDivStyle = style({
  display: 'flex',
  gap: '0.8rem',
  marginBottom: '0.8rem',
});

export const labelStyle = style({
  ...globalTheme.fonts.detailMed12,
  marginTop: '1.6rem',
  borderRadius: 4,
  padding: '0.4rem 0.8rem',
  color: globalTheme.colors.blue_66,
  backgroundColor: globalTheme.colors.gray_bg_04,
});
