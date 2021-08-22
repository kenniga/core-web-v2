import { verifiedIsNotEmpty } from '@99/helper';
import { css } from '@emotion/react';

import { IMixin } from '@/styled-component/interface';

import { PADDING_KEY } from './constant';
import { IPaddingMixin } from './interface';

/**
 * Padding Mixin
 * @param {IPaddingMixin} props - padding mixin props you can read furthermore on this file `src/styles/styled-component/mixins/padding/interface/index.ts`
 * @returns {SerializedStyles}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const padding: IMixin<IPaddingMixin> = ({ direction, value }) => {
  try {
    const key = PADDING_KEY[direction];

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
 * Padding Left
 * @param {number} value - padding left value
 * @returns {SerializedStyles}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const paddingLeft: IMixin = ({ value }) =>
  padding({ direction: `left`, value });

/**
 * Padding Right
 * @param {number} value - padding right value
 * @returns {SerializedStyles}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const paddingRight: IMixin = ({ value }) =>
  padding({ direction: `right`, value });

/**
 * Padding Top
 * @param {number} value - padding top value
 * @returns {SerializedStyles}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const paddingTop: IMixin = ({ value }) =>
  padding({ direction: `top`, value });

/**
 * Padding Bottom
 * @param {number} value - padding bottom value
 * @returns {SerializedStyles}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const paddingBottom: IMixin = ({ value }) =>
  padding({ direction: `top`, value });

/**
 * Set No Padding
 * @returns {SerializedStyles}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const noPadding: IMixin = () => padding({ direction: `all`, value: 0 });

/**
 * Set No Padding Top
 * @returns {SerializedStyles}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const noPaddingTop: IMixin = () =>
  padding({ direction: `top`, value: 0 });

/**
 * Set No Padding Left
 * @returns {SerializedStyles}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const noPaddingLeft: IMixin = () =>
  padding({ direction: `left`, value: 0 });

/**
 * Set No Padding Right
 * @returns {SerializedStyles}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const noPaddingRight: IMixin = () =>
  padding({ direction: `right`, value: 0 });

/**
 * Set No Padding Bottom
 * @returns {SerializedStyles}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const noPaddingBottom: IMixin = () =>
  padding({ direction: `bottom`, value: 0 });
