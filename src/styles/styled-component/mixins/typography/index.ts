import { css } from '@emotion/react';
import { Property } from 'csstype';

import { NullAble } from '@/interface/general';
import { IMixin } from '@/styled-component/interface';

import {
  DEFAULT_FONT_STYLE,
  DEFAULT_FONT_WEIGHT,
  DEFAULT_TEXT_DECORATION,
  DEFAULT_TEXT_TRANSFORM
} from './constant';
import {
  fontColor,
  fontColorByConstant,
  fontFamily,
  fontFamilyByConstant,
  fontSize,
  fontSizeByConstant,
  lineHeight,
  lineHeightByConstant
} from './helper';
import { IFontFaceByConstantMixin, IFontFaceMixin } from './interface';

export * from './helper';

/**
 * Font Weight Mixin
 * @param {NullAble<Property.FontWeight>} fontWeight - font weight value
 * @returns {SerializedStyles}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const fontWeight: IMixin<NullAble<Property.FontWeight>> = (
  fontWeight = DEFAULT_FONT_WEIGHT
) =>
  css({
    fontWeight
  });

/**
 * Font Style Mixin
 * @param {NullAble<Property.FontStyle>} fontStyle - font style value
 * @returns {SerializedStyles}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const fontStyle: IMixin<NullAble<Property.FontStyle>> = (
  fontStyle = DEFAULT_FONT_STYLE
) =>
  css({
    fontStyle
  });

/**
 * Text Transform Mixin
 * @param {NullAble<Property.TextTransform>} textTransform - text transform value
 * @returns {SerializedStyles}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const textTransform: IMixin<NullAble<Property.TextTransform>> = (
  textTransform = DEFAULT_TEXT_TRANSFORM
) =>
  css({
    textTransform
  });

/**
 * Text Decoration Mixin
 * @param {NullAble<Property.TextDecoration>} TextDecoration - text decoration value
 * @returns {SerializedStyles}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const TextDecoration: IMixin<NullAble<Property.TextDecoration>> = (
  TextDecoration = DEFAULT_TEXT_DECORATION
) =>
  css({
    TextDecoration
  });

/**
 * Font Face Mixin
 * @param {NullAble<Property.TextTransform>} textTransform - text transform value
 * @returns {SerializedStyles}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const fontFace: IMixin<IFontFaceMixin> = ({
  color,
  decoration,
  lineHeight: lineHeightProps,
  name: fontFamilyProps,
  size,
  style,
  transform,
  weight
}) =>
  css`
    ${fontColor(color)}
    ${TextDecoration(decoration)}
    ${lineHeight(lineHeightProps)}
    ${fontFamily(fontFamilyProps)}
    ${fontSize(size)}
    ${fontStyle(style)}
    ${textTransform(transform)}
    ${fontWeight(weight)}
  `;

/**
 * Font Face Mixin
 * @param {NullAble<Property.TextTransform>} textTransform - text transform value
 * @returns {SerializedStyles}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const fontFaceByConstant: IMixin<IFontFaceByConstantMixin> = ({
  color,
  decoration,
  lineHeight: lineHeightProps,
  name: fontFamilyProps,
  size,
  style,
  transform,
  weight
}) =>
  css`
    ${fontColorByConstant(color)}
    ${TextDecoration(decoration)}
    ${lineHeightByConstant(lineHeightProps)}
    ${fontFamilyByConstant(fontFamilyProps)}
    ${fontSizeByConstant(size)}
    ${fontStyle(style)}
    ${textTransform(transform)}
    ${fontWeight(weight)}
  `;
