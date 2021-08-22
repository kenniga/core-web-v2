import { css } from '@emotion/react';

import { getShadow } from '@/styled-component/helper';
import { IMixin } from '@/styled-component/interface';
import { IShadowType } from '@/styled-component/interface/box-shadow.interface';

/**
 * Box Shadow Mixin
 * @param {string[]} args - box shadow value
 * @returns {SerializedStyles}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const boxShadow: IMixin<string[]> = (args) =>
  css({
    boxShadow: args.join(`, `)
  });

/**
 * Box Shadow By Constant Mixin
 * @param {IShadowType} shadowType - shadow type based on SHADOW_GENERAL constant
 * @returns {SerializedStyles}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const boxShadowByConstant: IMixin<IShadowType> = (shadowType) =>
  css({
    boxShadow: getShadow(shadowType)
  });

/**
 * No Box Shadow Mixin
 * @returns {SerializedStyles}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const noBoxShadow: IMixin = () => boxShadow([`initial`]);

/**
 * Text Shadow Mixin
 * @param {string[]} args - text shadow value
 * @returns {SerializedStyles}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const textShadow: IMixin<string[]> = (args) =>
  css({
    textShadow: args.join(`, `)
  });

/**
 * No Text Shadow Mixin
 * @returns {SerializedStyles}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const noTextShadow: IMixin = () => textShadow([`initial`]);
