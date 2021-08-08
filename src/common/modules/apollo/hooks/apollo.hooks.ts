import { useMemo } from 'react';

import { initializeApollo } from '@/modules/apollo/helper';
import { IApolloConnection } from '@/modules/apollo/interface';

/**
 * Apollo Get Connection Hooks
 * @param {Record<string, any> | null} initialState - initial state from every pages props
 * @returns {IApolloConnection}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.07
 */
export const useApollo = (
  initialState: Record<string, any> | null
): IApolloConnection => {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);

  return store;
};
