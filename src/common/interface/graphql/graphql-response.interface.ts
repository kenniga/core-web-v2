import { ApolloError } from '@apollo/client';

import { Query } from '@/contract-gql';
import { IApolloConnection } from '@/modules/apollo/interface';

/**
 * Gen GQL Result
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.29
 */
export type PickGql<K extends keyof Query> = Pick<Query, K>;

/**
 * Gen GQL Result
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.29
 */
export type GenResponse<T> = {
  client: IApolloConnection;
  data?: T;
  error?: ApolloError;
};
