import { css } from '@emotion/react';

import { getColor, getColorByConstant } from '@/styled-component/helper';
import { IColorType, IMixin } from '@/styled-component/interface';

/**
 * Font Color By Constant Mixin
 * @param {IColorType} color - color name key based on color constant
 * @returns {SerializedStyles}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const fontColorByConstant: IMixin<IColorType> = (color) =>
  css({
    color: getColorByConstant(color)
  });

/**
 * Font Family Mixin
 * @param {string} color - color string
 * @returns {SerializedStyles}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const fontColor: IMixin<string> = (color) =>
  css({
    color: getColor(color)
  });
