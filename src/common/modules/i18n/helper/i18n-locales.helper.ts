import { Ii18nLocales } from '@/modules/i18n/interface';

/**
 * Get Locales Dictionary
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.02.16
 */
export const getLocalesJSON = (
  locale: Ii18nLocales
): Promise<Record<string, any>> => {
  if (locale === `id`) {
    return import(`@/modules/i18n/locales/id.json`).then(
      (item) => item.default
    );
  }

  return import(`@/modules/i18n/locales/en.json`).then((item) => item.default);
};
