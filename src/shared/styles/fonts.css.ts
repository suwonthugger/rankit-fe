// src/styles/fonts.css.ts
import { globalFontFace, style } from '@vanilla-extract/css';

globalFontFace('Pretendard', [
  {
    src: `url('/fonts/Pretendard-Thin.woff2') format('woff2')`,
    fontWeight: '100',
    fontStyle: 'normal',
  },
  {
    src: `url('/fonts/Pretendard-ExtraLight.woff2') format('woff2')`,
    fontWeight: '200',
    fontStyle: 'normal',
  },
  {
    src: `url('/fonts/Pretendard-Light.woff2') format('woff2')`,
    fontWeight: '300',
    fontStyle: 'normal',
  },
  {
    src: `url('/fonts/Pretendard-Regular.woff2') format('woff2')`,
    fontWeight: '400',
    fontStyle: 'normal',
  },
  {
    src: `url('/fonts/Pretendard-Medium.woff2') format('woff2')`,
    fontWeight: '500',
    fontStyle: 'normal',
  },
  {
    src: `url('/fonts/Pretendard-SemiBold.woff2') format('woff2')`,
    fontWeight: '600',
    fontStyle: 'normal',
  },
  {
    src: `url('/fonts/Pretendard-Bold.woff2') format('woff2')`,
    fontWeight: '700',
    fontStyle: 'normal',
  },
  {
    src: `url('/fonts/Pretendard-ExtraBold.woff2') format('woff2')`,
    fontWeight: '800',
    fontStyle: 'normal',
  },
  {
    src: `url('/fonts/Pretendard-Black.woff2') format('woff2')`,
    fontWeight: '900',
    fontStyle: 'normal',
  },
]);

export const font = style({
  fontFamily: 'Pretendard',
});
