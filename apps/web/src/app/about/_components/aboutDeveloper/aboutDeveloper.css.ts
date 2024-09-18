import { style } from '@vanilla-extract/css';
import { globalTheme } from '../../../../shared/styles/globalTheme.css';

export const divStyle = style({
  width: '25.8rem',
  height: '39.5rem',
  borderRadius: '0.8rem',
  border: '0.1rem solid #c0c0c0',
  boxSizing: 'border-box', // 외곽선을 요소 크기에 포함시킴
});

export const divMainContentStyle = style({
  padding: '1.6rem 1.6rem 2.4rem',
  flexDirection: 'column',
  gap: '0.8rem',
});

export const divSubContentStyle1 = style({
  display: 'flex',
  gap: '0.6rem',
  alignItems: 'center',
  marginBottom: '0.8rem',
  justifyContent: 'space-between',
});

export const divSubContentStyle2 = style({
  display: 'flex',
  gap: '0.6rem',
  alignItems: 'center',
  marginBottom: '0.8rem',
});

export const imgStyle = style({
  width: '25.6rem',
  height: '25.6rem',
  borderRadius: '0.8rem',
});

export const userTierStyle = style({
  width: '2.4rem',
  height: '2.4rem',
});

export const userPositionStyle = style({
  ...globalTheme.fonts.bodySemiBold16,
  color: globalTheme.colors.blue_main,
});

export const userNameStyle = style({
  ...globalTheme.fonts.subheadBold20,
  color: globalTheme.colors.gray_19,
});

export const userCommentStyle = style({
  ...globalTheme.fonts.detailMed12,
  color: globalTheme.colors.blue_66,
});

export const divUserCommentStyle = style({
  marginTop: '0.8rem',
  paddingLeft: '0.8rem',
  paddingRight: '0.8rem',
  paddingTop: '0.4rem',
  paddingBottom: '0.4rem',
  background: globalTheme.colors.gray_bg_04,
  borderRadius: '0.4rem',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '1.7rem',
  display: 'inline-flex',
});
