import { ReactText } from 'react';

export type IMarginDirection = 'all' | 'left' | 'right' | 'top' | 'bottom';

/**
 * Margin Mixin Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export interface IMarginMixin extends IBaseMarginMixin {
  direction: IMarginDirection;
}

/**
 * Base Margin Mixin Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export interface IBaseMarginMixin {
  value: ReactText;
}
