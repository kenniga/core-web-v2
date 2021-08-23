export type ILoggerLevel = 'info' | 'error' | 'warning' | 'debug';

/**
 * Logger Param Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.23
 */
export interface ILoggerParam {
  date: Date;
  level: ILoggerLevel;
  message: string;
}
