import { ApolloProvider } from '@apollo/client';
import { AppType } from 'next/dist/next-server/lib/utils';

import '@/styles/globals.css';
import { useApollo } from '@/modules/apollo/hooks/apollo.hooks';

/**
 * App Instance
 * @returns {ReactNode}
 */
const App: AppType = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default App;
