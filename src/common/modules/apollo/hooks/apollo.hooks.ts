import { useMemo } from 'react';

import { initializeApollo } from '@/modules/apollo/helper';
import { IApolloConnection } from '@/modules/apollo/interface';
import { Ii18nLocales } from '@/modules/i18n/interface';

/**
 * Apollo Get Connection Hooks
 * @param {Record<string, any> | null} initialState - initial state from every pages props
 * @returns {IApolloConnection}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.07
 */
export const useApollo = (
  initialState: Record<string, any> | null,
  language: Ii18nLocales = `id`
): IApolloConnection => {
  const store = useMemo(
    () => initializeApollo(initialState, language),
    [initialState, language]
  );

  return store;
};
