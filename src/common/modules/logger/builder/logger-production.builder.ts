import { bind } from '@99/helper';

import { NullAble } from '@/interface/general';
import { LoggerAbstract } from '@/modules/logger/abstract/logger.abstract';
import {
  ILoggerBasicResponse,
  ILoggerParam,
  ILoggerProd,
  ILoggerProdServerResponse
} from '@/modules/logger/interface';

/**
 * Logger Production
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.29
 */
export class LoggerProduction extends LoggerAbstract<ILoggerProd> {
  private static instance: LoggerProduction;

  /**
   * Generates base info
   * @param {ILoggerParam} param - logger param
   * @returns {ILoggerBasicResponse}
   */
  @bind
  private generateBaseInfo({
    date,
    level,
    payload
  }: ILoggerParam): ILoggerBasicResponse {
    let message = ``;
    let stackTrace: undefined | string;
    const time = (date || new Date()).toISOString().split(`T`).join(` `);

    if (typeof payload === `string`) {
      message = payload;
    } else if (payload instanceof Error) {
      message = (payload as Error).message;
      stackTrace = (payload as Error).stack;
    }

    return {
      date: time,
      message,
      stackTrace,
      type: level
    };
  }

  /**
   * Generates server side info
   * @param {ILoggerParam} param - logger param
   * @returns {ILoggerServerSideResponse}
   */
  private generateServerSideInfo({
    req
  }: ILoggerParam): NullAble<ILoggerProdServerResponse> {
    if (req) {
      const { headers, method, url } = req;

      return {
        headers,
        method,
        url
      };
    }

    return undefined;
  }

  /**
   * Generates logger message
   * @param {ILoggerParam} param - logger param
   * @returns logger message
   */
  @bind
  generateLoggerMessage(param: ILoggerParam): ILoggerProd {
    const { generateBaseInfo, generateServerSideInfo } = this;
    const { level } = param;

    switch (level) {
      case `error`:
      case `warn`:
        return {
          basic: generateBaseInfo(param),
          server: generateServerSideInfo(param)
        };
    }
  }

  /**
   * Get Instance
   * @returns {LoggerProduction}
   */
  public static getInstance(): LoggerProduction {
    if (LoggerProduction.instance === undefined) {
      LoggerProduction.instance = new LoggerProduction();
    }

    return LoggerProduction.instance;
  }
}
