import { NextApiRequest } from 'next';

import { ILoggerLevel } from '.';

/**
 * Logger Param Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.29
 */
export interface ILoggerParam {
  date?: Date;
  level: ILoggerLevel;
  payload: string | Error;
  req?: NextApiRequest;
}
