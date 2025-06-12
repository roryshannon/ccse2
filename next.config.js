const { withNetlify } = require('@netlify/next');

module.exports = withNetlify({
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'Content-Security-Policy',
          value: "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline';"
        },
      ],
    },
  ],
});
