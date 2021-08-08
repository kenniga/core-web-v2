import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';

import {
  EnumFooterPage,
  EnumPriceType,
  GetFooterRequest
} from '@/contract-gql';
import { getInitialFooter } from '@/features/footer/helper';
import { GqlClient } from '@/modules/apollo/helper';
import { getLocalesFromProps } from '@/modules/i18n/helper';
import { HOMEPAGE_PROPS_NAME } from '@/services/homepage/constant';
import { IHomepageInitialProps } from '@/services/homepage/interface';

/**
 * Get Basic Homepage Props
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.08
 */
export const getBasicHomepageProps = ({
  locale,
  req
}: GetServerSidePropsContext<ParsedUrlQuery>): IHomepageInitialProps => {
  return {
    [HOMEPAGE_PROPS_NAME]: {
      language: getLocalesFromProps(locale),
      page: req.url,
      tracker: [],
      type: `sale`
    }
  };
};

/**
 * Generate Footer Parameter Helper
 * @param {IHomepageInitialProps} initialProps - initial props homepage
 * @returns {GetFooterRequest}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.08
 */
const generateFooterParameter = ({
  homepage: { type }
}: IHomepageInitialProps): GetFooterRequest => {
  let page: EnumFooterPage = EnumFooterPage.Homepage;
  let priceType: EnumPriceType = EnumPriceType.Sale;
  switch (type) {
    case `sale`: {
      page = EnumFooterPage.Homepage;
      priceType = EnumPriceType.Sale;
      break;
    }

    case `rent`: {
      page = EnumFooterPage.Homepage;
      priceType = EnumPriceType.Rent;
      break;
    }

    case `new-launch`: {
      page = EnumFooterPage.Newlaunch;
      priceType = EnumPriceType.Sale;
      break;
    }

    default:
      break;
  }

  return {
    page,
    priceType,
    propertyType: 0,
    uuids: []
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
  const homePageInitialProps = getBasicHomepageProps(props);
  const { data: footerInitialProps } = await getInitialFooter(
    generateFooterParameter(homePageInitialProps),
    getLocalesFromProps(props.locale)
  );

  return {
    props: {
      ...homePageInitialProps,
      ...footerInitialProps,
      initialApolloState: GqlClient.singleton().cache.extract()
    }
  };
};
