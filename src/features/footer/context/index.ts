import { createContext } from 'react';

import { IFooterHooks } from '@/features/footer/interface';
import { NullAble } from '@/interface/general';

/**
 * Footer Context
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.08
 */
const FooterContext = createContext<NullAble<IFooterHooks>>(undefined);

export default FooterContext;
