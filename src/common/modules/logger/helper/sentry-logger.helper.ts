import { verifiedIsNotEmpty } from '@99/helper';
import * as Sentry from '@sentry/nextjs';

import { ILoggerParam } from '@/modules/logger/interface';

import { consoleLogger } from './console-logger.helper';

/**
 * Sentry Logger Helper
 * @param {ILoggerParam} param - logger parameter
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.23
 */
export const sentryLogger = ({ level, ...res }: ILoggerParam): void => {
  switch (level) {
    case `error`: {
      if (verifiedIsNotEmpty(res.payload) && res.payload instanceof Error) {
        Sentry.captureException(res.payload);
      } else if (
        verifiedIsNotEmpty(res.payload) &&
        typeof res.payload === `string`
      ) {
        Sentry.captureException(new Error(`${res.payload}`));
      }

      consoleLogger({ level, ...res });
      break;
    }
    case `info`:
    case `warn`:
    case `debug`:
      consoleLogger({ level, ...res });
      break;
  }
};
