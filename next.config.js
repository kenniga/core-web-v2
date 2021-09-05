const { withSentryConfig } = require('@sentry/nextjs');

const modules = {
  i18n: {
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'id',

    // These are all the locales you want to support in
    // your application
    locales: ['en', 'id']
  },
  reactStrictMode: true
};

const sentryConfig = {
  silent: true
};

module.exports = withSentryConfig(modules, sentryConfig);
