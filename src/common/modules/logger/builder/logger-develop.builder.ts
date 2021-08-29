import { bind } from '@99/helper';

import { NullAble } from '@/interface/general';
import { LoggerAbstract } from '@/modules/logger/abstract/logger.abstract';
import { LOGGER_PALLETE_COLOR } from '@/modules/logger/constant';
import {
  ILoggerBasicResponse,
  ILoggerDev,
  ILoggerParam
} from '@/modules/logger/interface';

/**
 * Logger Development
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.29
 */
export class LoggerDevelopment extends LoggerAbstract<ILoggerDev> {
  private static instance: LoggerDevelopment;

  /**
   * Generates base info
   * @param {ILoggerParam} param - logger param
   * @returns {ILoggerBasicResponse}
   */
  private generateBaseInfo({
    level,
    payload
  }: ILoggerParam): ILoggerBasicResponse {
    let message = ``;
    let stackTrace: NullAble<string>;

    if (typeof payload === `string`) {
      message = payload;
    } else if (payload instanceof Error) {
      message = payload.message;
      stackTrace = payload.stack;
    }

    return {
      message,
      stackTrace,
      type: level
    };
  }

  /**
   * Generates logger message
   * @param {ILoggerParam} param - logger param
   * @returns logger message
   */
  @bind
  generateLoggerMessage(param: ILoggerParam): string {
    const { date, level } = param;
    const { generateBaseInfo } = this;
    const time = (date || new Date()).toISOString().split(`T`).join(` `);
    const { message, stackTrace } = generateBaseInfo(param);
    const color = LOGGER_PALLETE_COLOR[level];

    return `${color}[${level.toUpperCase()}]: ${time} - ${message}${
      stackTrace ? `\n    ${stackTrace}` : ``
    }\x1b[0m`;
  }

  /**
   * Get Instance
   * @returns {LoggerProduction}
   */
  public static getInstance(): LoggerDevelopment {
    if (LoggerDevelopment.instance === undefined) {
      LoggerDevelopment.instance = new LoggerDevelopment();
    }

    return LoggerDevelopment.instance;
  }
}
