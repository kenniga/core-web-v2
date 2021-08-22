import { css } from '@emotion/react';
import { ReactText } from 'react';

import { getLineHeightByConstant } from '@/styled-component/helper';
import { ILineHeightType, IMixin } from '@/styled-component/interface';

/**
 * Line Height By Constant Mixin
 * @param {ILineHeightType} lineHeight - line height key based on line height constant
 * @returns {SerializedStyles}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const lineHeightByConstant: IMixin<ILineHeightType> = (lineHeight) =>
  css({
    lineHeight: getLineHeightByConstant(lineHeight)
  });

/**
 * Line Height Mixin
 * @param {ReactText} lineHeight - line height text
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const lineHeight: IMixin<ReactText> = (lineHeight) =>
  css({
    lineHeight: getLineHeightByConstant(
      lineHeight as unknown as ILineHeightType
    )
  });
