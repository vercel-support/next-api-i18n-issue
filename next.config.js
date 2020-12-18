module.exports = {
  i18n: {
    locales: ['en', 'de'],
    defaultLocale: 'en',
  },
  async rewrites() {
    return [
      {
        source: '/api/v1/test',
        destination: '/api/test'
      }
    ]
  }
}
