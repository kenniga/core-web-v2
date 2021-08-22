import { css } from '@emotion/react';
import { ReactText } from 'react';

import { getFontSizeByConstant } from '@/styled-component/helper';
import { IFontSizeType, IMixin } from '@/styled-component/interface';

/**
 * Font Size By Constant Mixin
 * @param {IFontSizeType} fontSize - font size key based on font size constant
 * @returns {SerializedStyles}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const fontSizeByConstant: IMixin<IFontSizeType> = (fontSize) =>
  css({
    fontSize: getFontSizeByConstant(fontSize)
  });

/**
 * Font Size Mixin
 * @param {ReactText} fontSize - font size text
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const fontSize: IMixin<ReactText> = (fontSize) =>
  css({
    fontSize: getFontSizeByConstant(fontSize as unknown as IFontSizeType)
  });
