import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { ReactNode } from 'react';

import HomepageView from '@/services/homepage';
import { getSSRHomepageProps } from '@/services/homepage/helper';

/**
 * Homepage Apps
 */
export default function Home(props): ReactNode {
  return <HomepageView {...props} />;
}

/**
 * Get Server Side Props
 * @param {Promise<GetServerSidePropsResult<P>>}
 */
export const getServerSideProps: GetServerSideProps = async (
  props: GetServerSidePropsContext<ParsedUrlQuery>
) => {
  return await getSSRHomepageProps(props);
};
