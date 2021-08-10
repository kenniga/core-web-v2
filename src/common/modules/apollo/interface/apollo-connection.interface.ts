import { ApolloClient, NormalizedCacheObject } from '@apollo/client';

/**
 * Apollo Connection Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description type apollo connection object from result generate `ApolloClient`
 * @since 2021.08.07
 */
export type IApolloConnection = ApolloClient<NormalizedCacheObject>;
