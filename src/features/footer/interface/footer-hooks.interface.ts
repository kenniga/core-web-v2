import { ApolloError } from '@apollo/client';

import { GetFooterRequest } from '@/contract-gql';
import { NullAble } from '@/interface/general';

import { IFooter } from './footer.interface';
import { IFooterReducer } from './footer-reducers.interface';

/**
 * Footer Hooks Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.08
 */
export interface IFooterHooks {
  action: IFooterHooksAction;
  state: IFooterHooksState;
}

/**
 * Footer Hooks State Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.08
 */
export type IFooterHooksState = IFooterReducer;

/**
 * Footer Hooks Action Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.08
 */
export interface IFooterHooksAction {
  setError(param: NullAble<ApolloError>): void;
  setFooter(param: IFooter[]): void;
  setParameter(param: GetFooterRequest): void;
}
