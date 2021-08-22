import { verifiedKeyIsExist } from '@99/helper';

import { SHADOW_GENERAL } from '@/styled-component/constant';

/**
 * Get Shadow Constant
 * @param {string} shadow - shadow name
 * @returns {string}
 * @description Get shadow value from shadow constant based on parameter `shadow`, if the key does not exist on `SHADOW_GENERAL` the method will be returned shadow parameter;
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const getShadow = (shadow: string): string => {
  if (verifiedKeyIsExist(SHADOW_GENERAL, shadow)) {
    return SHADOW_GENERAL[shadow];
  }

  return shadow;
};
