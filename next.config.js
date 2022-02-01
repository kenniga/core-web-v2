const { withSentryConfig } = require('@sentry/nextjs');

const modules = {
  images: {
    domains: [
      'picture.rumah123.com',
      'public.urbanindo.com',
      'imageresizer.rumah123.com'
    ]
  },
  reactStrictMode: true
};

const sentryConfig = {
  silent: true
};

module.exports = withSentryConfig(modules, sentryConfig);
