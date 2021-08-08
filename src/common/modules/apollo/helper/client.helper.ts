import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { NullAble } from '@/interface/general';
import { IApolloConnection } from '@/modules/apollo/interface';
import { Ii18nLocales } from '@/modules/i18n/interface';

/**
 * Gql Client Singleton
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.07
 */
export class GqlClient {
  private static instanceID: NullAble<IApolloConnection>;

  private static instanceEN: NullAble<IApolloConnection>;

  /**
   * Execute Generate Apollo Connection
   * @returns {IApolloConnection}
   */
  execute(language: Ii18nLocales = `id`): IApolloConnection {
    const HTTP_LINK = createHttpLink({
      uri: process.env.NEXT_PUBLIC_GRAPHQL_HOST
    });

    const AUTH_LINK = setContext((_, { headers }) => {
      return {
        headers: {
          ...headers,
          'Accept-Language': language,
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
  public static singleton(language: Ii18nLocales = `id`): IApolloConnection {
    switch (language) {
      case `id`: {
        if (GqlClient.instanceID === undefined) {
          GqlClient.instanceID = new GqlClient().execute();
        }

        return GqlClient.instanceID;
      }

      case `en`: {
        if (GqlClient.instanceEN === undefined) {
          GqlClient.instanceEN = new GqlClient().execute(`en`);
        }

        return GqlClient.instanceEN;
      }
    }
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
  initialState: Record<string, any> | null = null,
  language: Ii18nLocales = `id`
): IApolloConnection => {
  const client = GqlClient.singleton(language);

  if (initialState) {
    const existingCache = client.extract();

    client.cache.restore({
      ...existingCache,
      ...initialState
    });
  }

  return client;
};
