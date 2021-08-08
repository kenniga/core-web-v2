import { AppPropsType } from 'next/dist/next-server/lib/utils';

import { Ii18nLocales } from '.';

/**
 * I18n Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.08
 */
export interface I18nBasicProps {
  locale: Ii18nLocales;
  localeDictionary: Record<string, any>;
}

/**
 * I18n Provider Props
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.02.16
 */
export type I18nProviderProps = AppPropsType & I18nBasicProps;
