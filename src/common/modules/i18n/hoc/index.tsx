import { NextRouter } from 'next/dist/client/router';
import {
  AppContextType,
  AppInitialProps,
  AppType
} from 'next/dist/next-server/lib/utils';

import I18nContext from '@/modules/i18n/context/i18n.context';
import { getLocalesJSON } from '@/modules/i18n/helper';
import { useRosetta } from '@/modules/i18n/hooks/i18n.hooks';
import { I18nProviderProps } from '@/modules/i18n/interface';

/**
 * HOC For Generate I18n Instance
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.08
 */
export const withI18n = (App: AppType) => {
  /**
   * Wrapper Redux Component
   * @param {IWrapperProps} props - props component
   * @returns {ReactNode}
   */
  const Wrapper = (props: I18nProviderProps) => {
    const { locale, localeDictionary, ...res } = props;
    const contextValue = useRosetta({ locale, localeDictionary });

    return (
      <I18nContext.Provider value={contextValue}>
        <App {...res} />
      </I18nContext.Provider>
    );
  };

  Wrapper.getInitialProps = async (context: AppContextType<NextRouter>) => {
    const {
      router: { locale }
    } = context;
    let initialProps: AppInitialProps = { pageProps: {} };
    const localeDictionary = await getLocalesJSON(
      locale === `id` ? `id` : `en`
    );

    if (App.getInitialProps) {
      initialProps = await App.getInitialProps(context);
    }

    return {
      ...initialProps,
      locale,
      localeDictionary
    };
  };

  Wrapper.displayName = `withI18n(WrappedApp)`;

  return Wrapper as unknown as AppType;
};
