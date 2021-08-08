import { useContext, useEffect, useMemo, useRef, useState } from 'react';
import rosetta, { Rosetta } from 'rosetta';

import I18nContext from '@/modules/i18n/context/i18n.context';
import { I18nBasicProps, II18nContext } from '@/modules/i18n/interface';

const i18n = rosetta();

/**
 * Rosetta Generate Context Value
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.08
 */
export const useRosetta = (
  { locale, localeDictionary }: I18nBasicProps,
  instance: Rosetta<unknown> = i18n
): II18nContext => {
  const activeLocaleRef = useRef(locale || `id`);
  const [, setTick] = useState(0);
  const firstRender = useRef(true);

  const context = useMemo(
    (): II18nContext => ({
      activeLocale: activeLocaleRef.current,
      locale: (l, dict) => {
        instance.locale(l);
        activeLocaleRef.current = l;
        if (dict) {
          instance.set(l, dict);
        }

        setTick((tick) => tick + 1);
      },
      t: (...args) => instance.t(...args)
    }),
    [instance]
  );

  if (locale && firstRender.current === true) {
    firstRender.current = false;
    context.locale(locale, localeDictionary);
  }

  // when locale is updated
  useEffect(() => {
    if (locale) {
      context.locale(locale, localeDictionary);
    }
  }, [localeDictionary, locale, context]);

  return context;
};

/**
 * Use I18n Context
 * @returns {II18nContext}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.01
 */
export const useI18n = (): II18nContext => {
  const context = useContext(I18nContext);

  if (context === undefined) {
    throw new Error(`useI18n must be used within a withI18n(App)`);
  }

  return context;
};
