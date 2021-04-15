// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Dark Avenue Photography',
  plugins: [
    {
      use: '@gridsome/source-wordpress',
      options: {
        baseUrl: 'http://wp.darkavenuephotography.com/',
        apiBase: '?rest_route=/',
        typeName: 'WordPress', // GraphQL schema name
      }
    }
  ],
  templates: {
    WordPressCategory: '/:slug'
  }
}
