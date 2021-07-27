import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
    uri: 'http://release.core.rumah123.com/graphql'
});

const authLink = setContext((_, { headers }) => {
    return {
        headers: {
            ...headers,
            'X-Client': 'Y29yZS1jbGllbnQtZm9yLXdlYgo'
        }
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

export default client;
