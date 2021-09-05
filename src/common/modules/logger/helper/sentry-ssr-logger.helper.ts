import * as Sentry from '@sentry/nextjs';
import { LogLevel } from '@sentry/types';

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
