// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Dark Sky Photography',
  plugins: [
    {
      use: '@gridsome/source-wordpress',
      options: {
        baseUrl: 'https://dev.brandonduran.com/darkavenue/',
        apiBase: '?rest_route=/',
        typeName: 'WordPress', // GraphQL schema name
      }
    }
  ],
  templates: {
    WordPressCategory: '/:slug'
  }
}
