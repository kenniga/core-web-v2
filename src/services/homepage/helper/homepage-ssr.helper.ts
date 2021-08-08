import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';

import { EnumFooterPage, EnumPriceType } from '@/contract-gql';
import { getInitialFooter } from '@/features/footer/helper';
import { IBasicServiceProps } from '@/interface/service';
import { GqlClient } from '@/modules/apollo/helper';

/**
 * Get Basic Homepage Props
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.08
 */
export const getBasicHomepageProps = ({
  locale,
  req
}: GetServerSidePropsContext<ParsedUrlQuery>): IBasicServiceProps => {
  return {
    language: locale === `id` ? `id` : `en`,
    page: req.url,
    tracker: []
  };
};

/**
 * Get SSR Homepage Props
 * @param {GetServerSidePropsContext<ParsedUrlQuery>} props - get server side props
 * @returns {Promise<GetServerSidePropsResult<P>>}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.08
 */
export const getSSRHomepageProps: GetServerSideProps = async (props) => {
  const { data: footerInitialProps } = await getInitialFooter({
    page: EnumFooterPage.Homepage,
    priceType: EnumPriceType.Sale,
    propertyType: 0,
    uuids: []
  });

  return {
    props: {
      ...footerInitialProps,
      homepage: getBasicHomepageProps(props),
      initialApolloState: GqlClient.singleton().cache.extract()
    }
  };
};
