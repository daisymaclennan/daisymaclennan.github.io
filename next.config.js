const withCSS = require('@zeit/next-css')

module.exports = Object.assign(
  {},
  withCSS({
    cssLoaderOptions: {
      url: false
    }
  }),
  /*{
    exportPathMap: function() {
      return {
        '/': { page: '/' },
        '/my-work': {page: '/my-work'},
        '/qualifications': {page: '/qualifications'},
        '/contact-details': { page: '/contact-details'}
      }
    }
  }*/
  )
