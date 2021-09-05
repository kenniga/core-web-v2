import { ILoggerDev } from './logger-development.interface';
import { ILoggerProd } from './logger-production.interface';
import { ILoggerParam } from '.';

/**
 * Generate Logger Instance
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.29
 */
export interface GenLoggerInstance<T> {
  doLogger(param: ILoggerParam): T;
}

/**
 * Logger Instance
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.02.20
 */
export interface ILoggerInstance {
  getInstance: () => GenLoggerInstance<ILoggerProd | ILoggerDev>;
}
