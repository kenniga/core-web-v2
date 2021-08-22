import { verifiedIsNotEmpty } from '@99/helper';
import { css } from '@emotion/react';

import { getColor } from '@/styled-component/helper';
import { IMixin } from '@/styled-component/interface';

import { BORDER_KEY, DEFAULT_BORDER_ATTRIBUTE } from './constant';
import { IBaseBorderMixin, IBorderMixin } from './interface';

/**
 * Border Mixin
 * @param {IBorderMixin} props - border mixin props you can read furthermore on this file `src/styles/styled-component/mixins/border/interface/index.ts`
 * @returns {SerializedStyles}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const border: IMixin<IBorderMixin> = ({
  color,
  direction,
  type,
  width
}) => {
  try {
    const key = BORDER_KEY[direction];

    if (verifiedIsNotEmpty(key))
      throw new Error(`[ERROR] direction parameter not match`);

    if (verifiedIsNotEmpty(type))
      throw new Error(`[ERROR] value type must not null / undefined`);

    if (verifiedIsNotEmpty(color))
      throw new Error(`[ERROR] value color must not null / undefined`);

    if (verifiedIsNotEmpty(width))
      throw new Error(`[ERROR] value width must not null / undefined`);

    return css({
      [`${key}`]: `${width} ${type} ${getColor(color)}`
    });
  } catch {
    return css({});
  }
};

/**
 * Border Left
 * @param {IBaseBorderMixin} props - border mixin props you can read furthermore on this file `src/styles/styled-component/mixins/border/interface/index.ts`
 * @returns {SerializedStyles}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const marginLeft: IMixin<IBaseBorderMixin> = (props) =>
  border({ direction: `left`, ...props });

/**
 * Border Right
 * @param {IBaseBorderMixin} props - border mixin props you can read furthermore on this file `src/styles/styled-component/mixins/border/interface/index.ts`
 * @returns {SerializedStyles}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const marginRight: IMixin<IBaseBorderMixin> = (value) =>
  border({ direction: `right`, ...value });

/**
 * Border Top
 * @param {IBaseBorderMixin} props - border mixin props you can read furthermore on this file `src/styles/styled-component/mixins/border/interface/index.ts`
 * @returns {SerializedStyles}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const marginTop: IMixin<IBaseBorderMixin> = (value) =>
  border({ direction: `top`, ...value });

/**
 * Border Bottom
 * @param {IBaseBorderMixin} props - border mixin props you can read furthermore on this file `src/styles/styled-component/mixins/border/interface/index.ts`
 * @returns {SerializedStyles}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const marginBottom: IMixin<IBaseBorderMixin> = (value) =>
  border({ direction: `top`, ...value });

/**
 * Set No Border
 * @returns {SerializedStyles}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const noBorder: IMixin = () =>
  border({ direction: `all`, ...DEFAULT_BORDER_ATTRIBUTE });

/**
 * Set No Border Top
 * @returns {SerializedStyles}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const noBorderTop: IMixin = () =>
  border({ direction: `top`, ...DEFAULT_BORDER_ATTRIBUTE });

/**
 * Set No Border Left
 * @returns {SerializedStyles}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const noBorderLeft: IMixin = () =>
  border({ direction: `left`, ...DEFAULT_BORDER_ATTRIBUTE });

/**
 * Set No Border Right
 * @returns {SerializedStyles}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const noBorderRight: IMixin = () =>
  border({ direction: `right`, ...DEFAULT_BORDER_ATTRIBUTE });

/**
 * Set No Border Bottom
 * @returns {SerializedStyles}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const noBorderBottom: IMixin = () =>
  border({ direction: `bottom`, ...DEFAULT_BORDER_ATTRIBUTE });
