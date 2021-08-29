export * from './logger-param.interface';
export * from './logger-instance.interface';
export * from './logger-production.interface';
export * from './logger-development.interface';

export type ILoggerLevel = 'info' | 'error' | 'warn' | 'debug';

/**
 * Logger Basic Response Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.29
 */
export interface ILoggerBasicResponse {
  date?: string;
  message: string;
  stackTrace?: string;
  type: ILoggerLevel;
}
