import { css } from '@emotion/react';

import { IMixin } from '@/styled-component/interface';

/**
 * Transition Mixin
 * @param {string[]} args - transition value
 * @returns {SerializedStyles}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export const transition: IMixin<string[]> = (...args) =>
  css({
    transition: args.join(`, `)
  });
