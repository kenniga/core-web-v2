import { verifiedKeyIsExist } from '@99/helper';
import { rgba } from 'emotion-rgba';

import { COLOR_GENERAL } from '@/styled-component/constant';
import { IColorType } from '@/styled-component/interface';

/**
 * Get Color By Constant
 * @param {IColorType} color - color name
 * @description Get color value from color constant based on parameter `color`, if the key does not exist on `SHADOW_GENERAL` the method will be throw some Error;
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const getColorByConstant = (color: IColorType): string => {
  if (verifiedKeyIsExist(COLOR_GENERAL, color)) {
    return COLOR_GENERAL[color];
  }

  throw new Error(`[Error] color is not found`);
};

/**
 * Get Color
 * @param {string} color - color name
 * @description Get color value from color constant based on parameter `color`, if the key does not exist on `SHADOW_GENERAL` the method will be return the color parameter;
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const getColor = (color: string): string => {
  try {
    return getColorByConstant(color as IColorType);
  } catch {
    return color;
  }
};

/**
 * Get Rgba Color
 * @param {string} color - color name
 * @param {number} alpha - alpha ratio for the value we can set 0 until 100
 * @description Get RGBA color based on color parameter
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const getRGBAColor = (color: string, alpha: number): string => {
  let inputColor: string = color;
  try {
    inputColor = getColorByConstant(color as IColorType);
  } catch {
    inputColor = color;
  }

  return rgba(inputColor, alpha / 100);
};
