import { verifiedIsNotEmpty } from '@99/helper';
import { css } from '@emotion/react';

import { IMixin } from '@/styled-component/interface';

import { MARGIN_KEY } from './constant';
import { IMarginMixin } from './interface';

/**
 * Margin Mixin
 * @param {IMarginMixin} props - margin mixin props you can read furthermore on this file `src/styles/styled-component/mixins/margin/interface/index.ts`
 * @returns {SerializedStyles}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const margin: IMixin<IMarginMixin> = ({ direction, value }) => {
  try {
    const key = MARGIN_KEY[direction];

    if (verifiedIsNotEmpty(key))
      throw new Error(`[ERROR] direction parameter not match`);

    if (verifiedIsNotEmpty(value))
      throw new Error(`[ERROR] value parameter is not null / undefined`);

    return css({
      [`${key}`]: value
    });
  } catch {
    return css({});
  }
};

/**
 * Margin Left
 * @param {number} value - margin left value
 * @returns {SerializedStyles}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const marginLeft: IMixin<number> = (value) =>
  margin({ direction: `left`, value });

/**
 * Margin Right
 * @param {number} value - margin right value
 * @returns {SerializedStyles}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const marginRight: IMixin<number> = (value) =>
  margin({ direction: `right`, value });

/**
 * Margin Top
 * @param {number} value - margin top value
 * @returns {SerializedStyles}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const marginTop: IMixin<number> = (value) =>
  margin({ direction: `top`, value });

/**
 * Margin Bottom
 * @param {number} value - margin bottom value
 * @returns {SerializedStyles}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const marginBottom: IMixin<number> = (value) =>
  margin({ direction: `top`, value });

/**
 * Set No Margin
 * @returns {SerializedStyles}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const noMargin: IMixin = () => margin({ direction: `all`, value: 0 });

/**
 * Set No Margin Top
 * @returns {SerializedStyles}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const noMarginTop: IMixin = () => margin({ direction: `top`, value: 0 });

/**
 * Set No Margin Left
 * @returns {SerializedStyles}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const noMarginLeft: IMixin = () =>
  margin({ direction: `left`, value: 0 });

/**
 * Set No Margin Right
 * @returns {SerializedStyles}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const noMarginRight: IMixin = () =>
  margin({ direction: `right`, value: 0 });

/**
 * Set No Margin Bottom
 * @returns {SerializedStyles}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const noMarginBottom: IMixin = () =>
  margin({ direction: `bottom`, value: 0 });
