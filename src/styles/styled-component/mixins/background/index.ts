import { css } from '@emotion/react';

import { getColor, getColorByConstant } from '@/styled-component/helper';
import { IColorType, IMixin } from '@/styled-component/interface';

import { IBackgroundImageMixin } from './interface';

/**
 * Background Color Mixin
 * @param {string} color - color value
 * @returns {SerializedStyles}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const backgroundColor: IMixin<string> = (color) =>
  css({
    background: getColor(color)
  });

/**
 * Background Color By Constant Mixin
 * @param {IColorType} color - color value
 * @returns {SerializedStyles}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const backgroundColorByConstant: IMixin<IColorType> = (color) =>
  css({
    background: getColorByConstant(color)
  });

/**
 * Background Image Mixin
 * @param {IBackgroundImageMixin} props - background image mixin parameter
 * @returns {SerializedStyles}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const backgroundImage: IMixin<IBackgroundImageMixin> = ({
  position = `0 0`,
  repeat = `no-repeat`,
  size = `cover`,
  url
}) =>
  css({
    backgroundImage: `url(${url})`,
    backgroundPosition: position,
    backgroundRepeat: repeat,
    backgroundSize: size
  });
