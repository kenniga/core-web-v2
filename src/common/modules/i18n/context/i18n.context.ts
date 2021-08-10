import { createContext } from 'react';

import { NullAble } from '@/interface/general';
import { II18nContext } from '@/modules/i18n/interface';

/**
 * I18n Context
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.08
 */
const I18nContext = createContext<NullAble<II18nContext>>(undefined);

export default I18nContext;
