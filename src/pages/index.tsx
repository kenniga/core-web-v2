import { GetServerSideProps } from 'next';
import { ReactNode } from 'react';

import { EnumFooterPage, EnumPriceType } from '@/contract-gql';
import FooterFeatures from '@/features/footer';
import { getInitialFooter } from '@/features/footer/helper';
import { GqlClient } from '@/modules/apollo/helper';

/**
 * Homepage Apps
 */
export default function Home(props): ReactNode {
  return (
    <>
      <FooterFeatures {...props} />
    </>
  );
}

/**
 * Get Server Side Props
 * @param {Promise<GetServerSidePropsResult<P>>}
 */
export const getServerSideProps: GetServerSideProps = async () => {
  const { data: footerInitialProps } = await getInitialFooter({
    page: EnumFooterPage.Homepage,
    priceType: EnumPriceType.Sale,
    propertyType: 0,
    uuids: []
  });

  return {
    props: {
      ...footerInitialProps,
      initialApolloState: GqlClient.singleton().cache.extract()
    }
  };
};
