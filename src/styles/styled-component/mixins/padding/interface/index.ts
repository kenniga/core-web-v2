import { ReactText } from 'react';

export type IPaddingDirection = 'all' | 'left' | 'right' | 'top' | 'bottom';

/**
 * Padding Mixin Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export interface IPaddingMixin extends IBasePaddingMixin {
  direction: IPaddingDirection;
}

/**
 * Base Padding Mixin Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export interface IBasePaddingMixin {
  value: ReactText;
}
