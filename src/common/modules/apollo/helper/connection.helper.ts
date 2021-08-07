import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

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

const client = new ApolloClient({
  cache: new InMemoryCache().restore({}),
  link: AUTH_LINK.concat(HTTP_LINK)
});

export default client;
