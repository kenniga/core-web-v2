import { css } from '@emotion/react';

import { IMixin } from '@/styled-component/interface';

import { ITransformMixin } from './interface';

/**
 * Transform Mixin
 * @param {ITransformMixin} props - transform mixin props you can read furthermore on this file `src/styles/styled-component/mixins/transform/interface/index.ts`
 * @returns {SerializedStyles}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const transform: IMixin<ITransformMixin> = ({ value }) =>
  css({
    transform: value
  });

/**
 * Transform Rotate Mixin
 * @param {number} deg - radius for rotate component
 * @returns {SerializedStyles}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const rotate: IMixin<number> = (deg) =>
  transform({ value: `rotate(${deg}deg)` });

/**
 * Transform Rotate X Mixin
 * @param {number} deg - radius for rotate component
 * @returns {SerializedStyles}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const rotateX: IMixin<number> = (deg) =>
  transform({ value: `rotateX(${deg}deg)` });

/**
 * Transform Rotate Y Mixin
 * @param {number} deg - radius for rotate component
 * @returns {SerializedStyles}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const rotateY: IMixin<number> = (deg) =>
  transform({ value: `rotateY(${deg}deg)` });

/**
 * Transform Rotate Z Mixin
 * @param {number} deg - radius for rotate component
 * @returns {SerializedStyles}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const rotateZ: IMixin<number> = (deg) =>
  transform({ value: `rotateZ(${deg}deg)` });

/**
 * Transform Scale Mixin
 * @param {number} scale - scale value for transform component
 * @returns {SerializedStyles}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const scale: IMixin<number> = (scale) =>
  transform({ value: `scale(${scale})` });

/**
 * Transform Scale X Mixin
 * @param {number} scale - scale value for transform component
 * @returns {SerializedStyles}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const scaleX: IMixin<number> = (scale) =>
  transform({ value: `scaleX(${scale})` });

/**
 * Transform Scale Y Mixin
 * @param {number} scale - scale value for transform component
 * @returns {SerializedStyles}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const scaleY: IMixin<number> = (scale) =>
  transform({ value: `scaleY(${scale})` });

/**
 * Transform Scale Z Mixin
 * @param {number} scale - scale value for transform component
 * @returns {SerializedStyles}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const scaleZ: IMixin<number> = (scale) =>
  transform({ value: `scaleZ(${scale})` });

/**
 * Transform Scale 3D Mixin
 * @param {[number, number, number]} scale - scale value x, y, z for transform component
 * @returns {SerializedStyles}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const scale3D: IMixin<[number, number, number]> = ([x, y, z]) =>
  transform({ value: `scale3d(${x}, ${y}, ${z})` });

/**
 * Transform Skew Mixin
 * @param {[number, number]} deg - radius for skew component
 * @returns {SerializedStyles}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const skew: IMixin<[number, number]> = ([deg1, deg2]) =>
  transform({ value: `skew(${deg1}deg, ${deg2}deg)` });

/**
 * Transform Skew X Mixin
 * @param {number} deg - radius for skew component
 * @returns {SerializedStyles}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const skewX: IMixin<number> = (deg) =>
  transform({ value: `skewX(${deg}deg)` });

/**
 * Transform Skew Y Mixin
 * @param {number} deg - radius for skew component
 * @returns {SerializedStyles}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const skewY: IMixin<number> = (deg) =>
  transform({ value: `rotateY(${deg}deg)` });

/**
 * Transform Translate Mixin
 * @param {number} position - position value for transform component
 * @returns {SerializedStyles}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const translate: IMixin<[number, number]> = ([position1, position2]) =>
  transform({ value: `scale(${position1}, ${position2})` });

/**
 * Transform Translate X Mixin
 * @param {number} position - position value for transform component
 * @returns {SerializedStyles}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const translateX: IMixin<number> = (position) =>
  transform({ value: `translateX(${position})` });

/**
 * Transform Translate Y Mixin
 * @param {number} position - position value for transform component
 * @returns {SerializedStyles}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const translateY: IMixin<number> = (position) =>
  transform({ value: `translateY(${position})` });

/**
 * Transform Translate Z Mixin
 * @param {number} position - position value for transform component
 * @returns {SerializedStyles}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const translateZ: IMixin<number> = (position) =>
  transform({ value: `translateZ(${position})` });

/**
 * Transform Translate 3D Mixin
 * @param {[number, number, number]} position - position value x, y, z for transform component
 * @returns {SerializedStyles}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const translate3D: IMixin<[number, number, number]> = ([x, y, z]) =>
  transform({ value: `translate3d(${x}, ${y}, ${z})` });
