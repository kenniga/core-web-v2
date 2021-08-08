import { Rosetta } from 'rosetta';

import { Ii18nLocales } from '.';

/**
 * i18n Translate Param Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.02.16
 */
export interface I18nTranslateParam {
  key: string | (string | number)[];
  lang?: string;
  params?: Record<string, any> | any[];
}

/**
 * I18n Context Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.02.16
 */
export interface II18nContext extends Pick<Rosetta<any>, 't'> {
  activeLocale: Ii18nLocales;
  locale(language: Ii18nLocales, payload: Record<string, any>): void;
}
