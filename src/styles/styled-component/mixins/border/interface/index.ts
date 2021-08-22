import { Property } from 'csstype';
import { ReactText } from 'react';

import { IColorType } from '@/styled-component/interface';

export type IBorderDirection = 'all' | 'left' | 'right' | 'top' | 'bottom';

/**
 * Border Mixin Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export interface IBorderMixin extends IBaseBorderMixin {
  direction: IBorderDirection;
}

/**
 * Base Border Mixin Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export interface IBaseBorderMixin {
  color: string | IColorType;
  type: Property.BorderStyle;
  width: ReactText;
}
