import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
    uri: 'https://release.core.rumah123.com/graphql/query'
});

const authLink = setContext((_, { headers }) => {
    return {
        headers: {
            ...headers,
            authorization: 0,
            'Accept-Language': 'id',
            // TODO: Accept-Version temp added for performance testing
            'Accept-Version': '2.0',
            // TODO: waiting backend team create dynamic token for gql auth
            'X-Client': 'Y29yZS1jbGllbnQtZm9yLXdlYgo='
        }
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

export default client;
