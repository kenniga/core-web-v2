import { BasicLogger } from '@/modules/logger/builder/logger.builder';
import { ILoggerParam } from '@/modules/logger/interface';

/**
 * Console Logger
 * @param {ILoggerParam} param - logger parameter
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.29
 */
export const consoleLogger = (param: ILoggerParam): void => {
  BasicLogger.getInstance().doLogger(param);
};
