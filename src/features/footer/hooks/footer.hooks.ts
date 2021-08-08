import { ApolloError, useQuery } from '@apollo/client';
import { useCallback, useContext, useReducer, useRef } from 'react';

import { GetFooterRequest, QueryGetFooterArgs } from '@/contract-gql';
import { translateFooter } from '@/features/footer/helper';
import {
  IFooter,
  IFooterHooks,
  IFooterInitialProps,
  IFooterReducer,
  IFooterTypesEnum
} from '@/features/footer/interface';
import { FOOTER_QUERY } from '@/features/footer/query';
import { FooterReducer } from '@/features/footer/reducers';
import { NullAble } from '@/interface/general';
import { PickGql } from '@/interface/graphql';

import FooterContext from '../context';

/**
 * Footer Hooks
 * @param {Partial<IFooterInitialProps>} props - props who collect from getServerSideProps every pages
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.08
 */
export const useFooter = ({
  footer
}: Partial<IFooterInitialProps>): IFooterHooks => {
  const { current: initialState } = useRef<IFooterReducer>({
    footer: footer?.response || [],
    parameter: footer?.parameter || {}
  });
  const [state, dispatch] = useReducer(FooterReducer, initialState);

  const setError = useCallback((payload: NullAble<ApolloError>): void => {
    dispatch({
      payload,
      type: IFooterTypesEnum.setError
    });
  }, []);

  const setFooter = useCallback((payload: IFooter[]): void => {
    dispatch({
      payload,
      type: IFooterTypesEnum.setFooter
    });
  }, []);

  const setParameter = useCallback((payload: GetFooterRequest): void => {
    dispatch({
      payload,
      type: IFooterTypesEnum.setParameter
    });
  }, []);

  useQuery<PickGql<'GetFooter'>, QueryGetFooterArgs>(FOOTER_QUERY, {
    onCompleted: (response) => {
      setFooter(translateFooter(response));
    },
    onError: setError,
    skip: typeof window === `undefined`, // must be will be invoked on client side
    variables: {
      request: state.parameter
    }
  });

  return {
    action: {
      setError,
      setFooter,
      setParameter
    },
    state
  };
};

/**
 * Footer Context
 * @returns {IFooterHooksAction}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.01
 */
export const useFooterContext = (): IFooterHooks => {
  const context = useContext(FooterContext);

  if (context === undefined) {
    throw new Error(
      `useFooterContext must be used within a <FooterFeatures />`
    );
  }

  return context;
};
