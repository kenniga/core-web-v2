import { ApolloError } from '@apollo/client';

import { GetFooterRequest } from '@/contract-gql';
import {
  IFooter,
  IFooterActionType as Action,
  IFooterReducer as Reducer,
  IFooterTypesEnum as Types
} from '@/features/footer/interface';
import { GenReducer } from '@/interface/general';

/**
 * Footer Reducer
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.30
 */
export const FooterReducer: GenReducer<Reducer, Action> = (
  state,
  { payload, type }
) => {
  switch (type) {
    case Types.setFooter: {
      return {
        ...state,
        footer: payload as IFooter[]
      };
    }

    case Types.setError: {
      return { ...state, error: payload as ApolloError };
    }

    case Types.setParameter: {
      return { ...state, parameter: payload as GetFooterRequest };
    }
  }
};
