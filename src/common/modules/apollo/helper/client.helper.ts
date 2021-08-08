import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { NullAble } from '@/interface/general';
import { IApolloConnection } from '@/modules/apollo/interface';

/**
 * Gql Client Singleton
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.07
 */
export class GqlClient {
  private static instance: NullAble<IApolloConnection>;

  /**
   * Execute Generate Apollo Connection
   * @returns {IApolloConnection}
   */
  execute(): IApolloConnection {
    const HTTP_LINK = createHttpLink({
      uri: process.env.NEXT_PUBLIC_GRAPHQL_HOST
    });

    const AUTH_LINK = setContext((_, { headers }) => {
      return {
        headers: {
          ...headers,
          'Accept-Language': `id`,
          'Accept-Version': `2.0`,
          'X-Client': process.env.NEXT_PUBLIC_X_CLIENT,
          authorization: 0
        }
      };
    });

    return new ApolloClient({
      cache: new InMemoryCache(),
      link: AUTH_LINK.concat(HTTP_LINK),
      ssrMode: typeof window === `undefined`
    });
  }

  /**
   * Singleton
   * @returns {NullAble<IApolloConnection>}
   */
  public static singleton(): IApolloConnection {
    if (GqlClient.instance === undefined) {
      GqlClient.instance = new GqlClient().execute();
    }

    return GqlClient.instance;
  }
}

/**
 * Initialize Apollo
 * @param {Record<string, any> | null} initialState - initial state from every pages props
 * @returns {IApolloConnection}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.07
 */
export const initializeApollo = (
  initialState: Record<string, any> | null = null
): IApolloConnection => {
  const client = GqlClient.singleton();

  if (initialState) {
    const existingCache = client.extract();

    client.cache.restore({
      ...existingCache,
      ...initialState
    });
  }

  return client;
};
