import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: `https://release.core.rumah123.com/graphql/query`
});

const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    'Accept-Language': `id`,
    // TODO: Accept-Version temp added for performance testing
    'Accept-Version': `2.0`,

    // TODO: waiting backend team create dynamic token for gql auth
    'X-Client': `Y29yZS1jbGllbnQtZm9yLXdlYgo=`,

    authorization: 0
  }
}));

const client = new ApolloClient({
  cache: new InMemoryCache().restore({}),
  link: authLink.concat(httpLink)
});

export default client;
