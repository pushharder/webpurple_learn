import { css, CSSObject, SimpleInterpolation, FlattenSimpleInterpolation } from "styled-components";

export const colorGrape = '#432867';
export const colorWarmGrey = '#a1a1a1';
export const colorGreyishBrown = '#545454';
export const colorLipstick = '#e62270';
export const colorVividPurple = '#9012fe';
export const colorVerise = '#ee2a7b';
export const colorWarmPurple = '#662d91';
export const colorRouge = '#b21d3d';
export const colorRosePink = '#f290b7';
export const colorLiliac = '#c788fe';

interface Sizes {
  [label: string]: number;
}

interface Medias {
  [label: string]: (...args: [CSSObject | TemplateStringsArray, ...SimpleInterpolation[]]) => FlattenSimpleInterpolation;
}

export const sizes: Sizes = {
  phone: 599,
  tablet: 768,
  desktop: 1200,
  hd: 1800,
}

export const media: Medias = Object.keys(sizes).reduce((accumulator: Medias, label) => {
  const emSize = sizes[label] / 16

  accumulator[label] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})