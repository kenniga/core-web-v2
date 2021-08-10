import { GetFooterRequest, QueryGetFooterArgs } from '@/contract-gql';
import { IFooterInitialProps } from '@/features/footer/interface';
import { FOOTER_QUERY } from '@/features/footer/query';
import { GenResponse, PickGql } from '@/interface/graphql';
import { GqlClient } from '@/modules/apollo/helper';
import { Ii18nLocales } from '@/modules/i18n/interface';

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
  language: Ii18nLocales = `en`
): Promise<response> => {
  try {
    const { page, portalId, priceType, propertyType, uuids } = parameter;
    const { data, error } = await GqlClient.singleton(language).query<
      PickGql<'GetFooter'>,
      QueryGetFooterArgs
    >({
      context: {
        headers: {
          language
        }
      },
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
      data: undefined,
      error: e
    };
  }
};
