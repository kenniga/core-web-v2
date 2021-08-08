import { GetFooterRequest } from '@/contract-gql';
import { FOOTER_PROPS_NAME } from '@/features/footer/constant';

import { IFooter } from '.';

/**
 * Basic Response Footer From SSR
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.08
 */
export interface IFooterResponseSSR {
  parameter: GetFooterRequest;
  response: IFooter[];
}

/**
 * Footer Initial Props
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.02.15
 */
export interface IFooterInitialProps {
  [FOOTER_PROPS_NAME]: IFooterResponseSSR;
}
