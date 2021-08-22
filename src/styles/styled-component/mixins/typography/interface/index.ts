import { Property } from 'csstype';
import { ReactText } from 'react';

import {
  IColorType,
  IFontFamilyType,
  IFontSizeType,
  ILineHeightType
} from '@/styled-component/interface';

/**
 * Base Font Face Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export interface IBaseFontFace {
  decoration: Property.TextDecoration;
  style: Property.FontStyle;
  transform: Property.TextTransform;
  weight: Property.FontWeight;
}

/**
 * Font Face Custom Mixin Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export interface IFontFaceByConstantMixin extends Partial<IBaseFontFace> {
  color: IColorType;
  lineHeight: ILineHeightType;
  name?: IFontFamilyType;
  size: IFontSizeType;
}

/**
 * Font Face Mixin Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export interface IFontFaceMixin extends Partial<IBaseFontFace> {
  color: string;
  lineHeight: ReactText;
  name?: string;
  size: ReactText;
}
