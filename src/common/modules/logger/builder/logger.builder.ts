import { bind, verifiedIsNotEmpty } from '@99/helper';

import { IsProduction } from '@/helper';
import {
  GenLoggerInstance,
  ILoggerInstance,
  ILoggerParam
} from '@/modules/logger/interface';

/**
 * Basic Logger
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.02.20
 */
export class BasicLogger implements GenLoggerInstance<void> {
  private static instance: BasicLogger;

  private logger: ILoggerInstance;

  constructor(logger: ILoggerInstance) {
    this.logger = logger;
  }

  /**
   * Do logger
   * @param param
   */
  @bind
  public doLogger(param: ILoggerParam): void {
    const { generateLoggerMessages } = this;
    generateLoggerMessages(param);
  }

  /**
   * Generates logger message
   * @param {ILoggerParam} param - logger param
   * @returns logger message
   */
  @bind
  private generateLoggerMessages(param: ILoggerParam): void {
    const { logger } = this;
    const { level } = param;
    const response = logger.getInstance().doLogger(param);

    if (
      typeof response === `string` ||
      (verifiedIsNotEmpty(response) && typeof window !== `undefined`)
    ) {
      // eslint-disable-next-line no-console
      console[level](response);
    } else if (verifiedIsNotEmpty(response) && typeof window === `undefined`) {
      // eslint-disable-next-line no-console
      console[level](JSON.stringify(response));
    }
  }

  /**
   * Generate Instance
   * @returns {ILoggerInstance}
   */
  private static generateInstance(): ILoggerInstance {
    let lib: ILoggerInstance;

    if (IsProduction()) {
      lib =
        require(`@/modules/logger/builder/logger-production.builder.ts`).LoggerProduction;
    } else {
      lib =
        require(`@/modules/logger/builder/logger-develop.builder.ts`).LoggerDevelopment;
    }

    return lib;
  }

  /**
   * Get Instance
   * @return {LoggerHelper}
   */
  public static getInstance(): BasicLogger {
    if (BasicLogger.instance === undefined) {
      const instance = BasicLogger.generateInstance();
      BasicLogger.instance = new BasicLogger(instance);
    }

    return BasicLogger.instance;
  }
}
