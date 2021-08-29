import * as Sentry from '@sentry/nextjs';
import { LogLevel } from '@sentry/types';

/**
 * Generate Sentry CSR Client
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.23
 */
export const setupSentryCSRClient = (): void => {
  Sentry.init({
    attachStacktrace: true,
    debug: false,
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    logLevel: LogLevel.Error,
    tracesSampleRate: 1
  });
};
