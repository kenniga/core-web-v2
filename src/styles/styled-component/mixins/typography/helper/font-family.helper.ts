import { css } from '@emotion/react';

import { getFontFace, getFontFaceByConstant } from '@/styled-component/helper';
import { IFontFamilyType, IMixin } from '@/styled-component/interface';

/**
 * Font Family By Constant Mixin
 * @param {IFontFamilyType} fontName - font name key based on font family constant
 * @returns {SerializedStyles}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const fontFamilyByConstant: IMixin<IFontFamilyType> = (fontName) =>
  css({
    fontFamily: getFontFaceByConstant(fontName)
  });

/**
 * Font Family Mixin
 * @param {string} fontName - font name string
 * @returns {SerializedStyles}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const fontFamily: IMixin<string> = (fontName) =>
  css({
    fontFamily: getFontFace(fontName)
  });
