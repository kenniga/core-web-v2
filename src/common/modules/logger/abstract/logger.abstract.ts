import { bind } from '@99/helper';

import {
  GenLoggerInstance as Logger,
  ILoggerParam
} from '@/modules/logger/interface';

/**
 * Logger Abstract
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.02.20
 */
export abstract class LoggerAbstract<T> implements Logger<T> {
  abstract generateLoggerMessage(param: ILoggerParam): T;

  /**
   * Do Logger
   * @param {ILoggerParam} param - logger parameter
   * @returns {T}
   */
  @bind
  public doLogger(param: ILoggerParam): T {
    const { generateLoggerMessage } = this;

    return generateLoggerMessage(param);
  }
}
