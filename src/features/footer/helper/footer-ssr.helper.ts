import { GetFooterRequest, QueryGetFooterArgs } from '@/contract-gql';
import { IFooterInitialProps } from '@/features/footer/interface';
import { FOOTER_QUERY } from '@/features/footer/query';
import { GenResponse, PickGql } from '@/interface/graphql';
import { GqlClient } from '@/modules/apollo/helper';
import { IApolloConnection } from '@/modules/apollo/interface';

import { translateFooter } from './footer-adapter.helper';

type response = GenResponse<IFooterInitialProps>;

/**
 * Get Initial Footer Response From SSR
 * @param {GetFooterRequest} parameter - get footer request parameter
 * @returns {Promise<GenResponse<'GetFooter'>>}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.07
 */
export const getInitialFooter = async (
  parameter: GetFooterRequest,
  client: IApolloConnection = GqlClient.singleton()
): Promise<response> => {
  try {
    const { page, portalId, priceType, propertyType, uuids } = parameter;
    const { data, error } = await client.query<
      PickGql<'GetFooter'>,
      QueryGetFooterArgs
    >({
      query: FOOTER_QUERY,
      variables: {
        request: {
          page,
          portalId,
          priceType,
          propertyType,
          uuids
        }
      }
    });

    return {
      client,
      data: {
        footer: {
          parameter,
          response: translateFooter(data)
        }
      },
      error
    };
  } catch (e) {
    // TODO: please add logging step on the future
    return {
      client,
      data: undefined,
      error: e
    };
  }
};
