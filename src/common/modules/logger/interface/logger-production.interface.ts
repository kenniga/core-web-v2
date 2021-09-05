import { IncomingHttpHeaders } from 'http';

import { NullAble } from '@/interface/general';

import { ILoggerBasicResponse } from '.';

/**
 * Logger Production Response Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.29
 */
interface ILoggerProdResponse {
  basic: ILoggerBasicResponse;
  server?: Partial<ILoggerProdServerResponse>;
}

/**
 * Logger Production Server Side Response Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.29
 */
export interface ILoggerProdServerResponse {
  headers: IncomingHttpHeaders;
  ip?: string;
  method: string;
  url: string;
}

/**
 * Logger Prod Response
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.29
 */
export type ILoggerProd = NullAble<ILoggerProdResponse>;
