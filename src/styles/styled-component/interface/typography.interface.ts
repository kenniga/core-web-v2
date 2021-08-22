import {
  FONT_FACE_GENERAL,
  FONT_SIZE_GENERAL,
  LINE_HEIGHT_GENERAL
} from '@/styles/styled-component/constant';

export type IFontSizeType = keyof typeof FONT_SIZE_GENERAL;

export type ILineHeightType = keyof typeof LINE_HEIGHT_GENERAL;

export type IFontFamilyType = keyof typeof FONT_FACE_GENERAL;

/**
 * Text Size Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export interface ITextSize<FontSize = string, LineHeight = string> {
  fontSize: FontSize;
  lineHeight: LineHeight;
}
