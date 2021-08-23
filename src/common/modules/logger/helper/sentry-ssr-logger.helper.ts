import * as Sentry from '@sentry/nextjs';
import { LogLevel } from '@sentry/types';

import { ILoggerParam } from '@/modules/logger/interface';

/**
 * Generate Sentry SSR Client
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.23
 */
export const setupSentrySSRClient = (): void => {
  Sentry.init({
    attachStacktrace: true,
    debug: false,
    dsn: process.env.SENTRY_DSN,
    logLevel: LogLevel.Error,
    tracesSampleRate: 1
  });
};

/**
 * Sentry Logger Helper
 * @param {ILoggerParam} param - logger parameter
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.23
 */
export const sentryLogger = ({ level, message }: ILoggerParam): void => {
  switch (level) {
    case `error`:
      console.debug(message);
      break;

    case `info`:
      console.debug(message);
      break;

    case `warning`:
      console.debug(message);
      break;

    case `debug`:
      console.debug(message);
      break;
  }
};
