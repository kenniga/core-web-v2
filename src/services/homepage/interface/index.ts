import { IBasicServiceProps } from '@/interface/service';
import { HOMEPAGE_PROPS_NAME } from '@/services/homepage/constant';

/**
 * Homepage Type
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.08
 */
export type IHomepageType = 'sale' | 'rent' | 'new-launch';

/**
 * Homepage Service Props
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.08
 */
export interface IHomepageServiceProps extends IBasicServiceProps {
  type: IHomepageType;
}

/**
 * Homepage Initial Props
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.02.15
 */
export interface IHomepageInitialProps {
  [HOMEPAGE_PROPS_NAME]: IHomepageServiceProps;
}
