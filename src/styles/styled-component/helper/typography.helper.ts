import { bulkVerifiedIsNotEmpty, verifiedKeyIsExist } from '@99/helper';
import { ReactText } from 'react';

import {
  FONT_SIZE_GENERAL,
  LINE_HEIGHT_GENERAL
} from '@/styled-component/constant';
import {
  IFontSizeType,
  ILineHeightType,
  ITextSize
} from '@/styled-component/interface';

/**
 * Get Font Size By Constant
 * @param {IFontSizeType} fontSize - font size key
 * @returns {ReactText}
 * @description Get font size value from font size constant based on parameter `fontSize`, if the key does not exist on `FONT_SIZE_GENERAL` the method will be returned fontSize parameter;
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const getFontSizeByConstant = (fontSize: IFontSizeType): ReactText => {
  if (verifiedKeyIsExist(FONT_SIZE_GENERAL, fontSize)) {
    return FONT_SIZE_GENERAL[fontSize];
  }

  return fontSize as ReactText;
};

/**
 * Get Line Height By Constant
 * @param {ILineHeightType} lineHeight - line height key
 * @returns {ReactText}
 * @description Get line height value from line height constant based on parameter `lineHeight`, if the key does not exist on `LINE_HEIGHT_GENERAL` the method will be returned lineHeight parameter;
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const getLineHeightByConstant = (
  lineHeight: ILineHeightType
): ReactText => {
  if (verifiedKeyIsExist(LINE_HEIGHT_GENERAL, lineHeight)) {
    return LINE_HEIGHT_GENERAL[lineHeight];
  }

  return lineHeight as ReactText;
};

/**
 * Get Text Size By Constant
 * @param {ReactText | ITextSize<IFontSizeType, ILineHeightType>} param - parameter function maybe contains string, number or object
 * @returns {ITextSize<ReactText, ReactText>}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const getTextSizeByConstant = (
  param: ReactText | ITextSize<IFontSizeType, ILineHeightType>
): ITextSize<ReactText, ReactText> => {
  try {
    switch (typeof param) {
      case `string`:
      case `number`:
        return {
          fontSize: param,
          lineHeight: param
        };

      case `object`: {
        const { fontSize, lineHeight } = param;
        if (bulkVerifiedIsNotEmpty([fontSize, lineHeight])) {
          return {
            fontSize: getFontSizeByConstant(fontSize),
            lineHeight: getLineHeightByConstant(lineHeight)
          };
        }

        throw new Error(
          `[ERROR] parameter fontSize or lineHeight must be not undefined`
        );
      }

      default:
        throw new Error(`[ERROR] parameter not match`);
    }
  } catch {
    return {
      fontSize: FONT_SIZE_GENERAL.label,
      lineHeight: LINE_HEIGHT_GENERAL.label
    };
  }
};

/**
 * Get Text Size By Constant
 * @param {ReactText | ITextSize<ReactText, ReactText>} param - parameter function maybe contains string, number or object
 * @returns {ITextSize<ReactText, ReactText>}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const getTextSize = (
  param: ReactText | ITextSize<ReactText, ReactText>
): ITextSize<ReactText, ReactText> => {
  return getTextSizeByConstant(
    param as ReactText | ITextSize<IFontSizeType, ILineHeightType>
  );
};
