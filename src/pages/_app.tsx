import { ApolloProvider } from '@apollo/client';
import { AppType } from 'next/dist/next-server/lib/utils';

import '@/styles/globals.css';
import { useApollo } from '@/modules/apollo/hooks/apollo.hooks';
import { getLocalesFromProps } from '@/modules/i18n/helper';
import { withI18n } from '@/modules/i18n/hoc';

/**
 * App Instance
 * @returns {ReactNode}
 */
const App: AppType = ({ Component, pageProps, router }) => {
  const apolloClient = useApollo(
    pageProps.initialApolloState,
    getLocalesFromProps(router.locale)
  );

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default withI18n(App);
