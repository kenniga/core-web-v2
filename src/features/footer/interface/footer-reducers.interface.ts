import { ApolloError } from '@apollo/client';

import { GetFooterRequest } from '@/contract-gql';
import { GenActionMap, NullAble } from '@/interface/general';

import { IFooter } from './footer.interface';

/**
 * Footer Reducer Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.08
 */
export interface IFooterReducer {
  error?: ApolloError;
  footer: IFooter[];
  parameter: GetFooterRequest;
}

/**
 * Footer Types Enum
 * @author Irfan Andriansyah <irfan@99.co>
 * @description enum for toggle dispacth footer reducer
 * @since 2021.08.08
 */
export enum IFooterTypesEnum {
  setError = `SET_ERROR`,
  setFooter = `SET_FOOTER`,
  setParameter = `SET_PARAMETER`
}

/**
 * Footer Payload Action Reducers
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.08
 */
type IFooterPayload = {
  [IFooterTypesEnum.setError]: NullAble<ApolloError>;
  [IFooterTypesEnum.setFooter]: IFooter[];
  [IFooterTypesEnum.setParameter]: GetFooterRequest;
};

export type IFooterActionType =
  GenActionMap<IFooterPayload>[keyof GenActionMap<IFooterPayload>];
