
module.exports = {
  mode: 'universal',

  server: {
    port: 5000, // default: 5000
  },

  /*
  ** Headers of the page
  */
  head: {
    title: '首页',
    titleTemplate: '%s · Bruce Wei\'s Blog',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'cleartype', content: 'on' },
      { 'http-equiv': 'Cache-Control' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      { hid: 'keywords', name: 'keywords', content: 'Bruce Wei\'s Blog' },
      { name: 'author', content: 'brusw@outlook.com' },
      { hid: 'description', name: 'description', content: 'Bruce Wei\'s Blog' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'dns-prefetch', href: '//resource.brusw.com' },
      { rel: 'dns-prefetch', href: '//api.brusw.com' },
    ],
    script: [
      {
        async: 'async',
        type: 'text/javascript',
        src: 'https://resource.brusw.com/intersection-polyfill.js'
      }
    ],
    noscript: [
      {
        innerHTML: 'This website requires JavaScript.'
      }
    ],
    __dangerouslyDisableSanitizers: ['script']
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    {
      src: './assets/scss/index.scss',
      lang: 'sass'
    },
    'highlight.js/styles/github.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {
      src: '~/plugins/marked.js'
    },
    {
      src: '~/plugins/highlight.js'
    },
    {
      src: '~/plugins/gravatar.js'
    },
    {
      src: '~/plugins/filter.js'
    },
    {
      src: '~/plugins/global-component.js'
    },
    // {
    //   src: '~/plugins/copy.js',
    //   ssr: false
    // }
  ],
  /**
   * router config
   */
  router: {
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/google-analytics',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    [
      '@nuxtjs/component-cache',
      {
        max: 10000,
        maxAge: 1000 * 60 * 60
      }
    ],
  ],

  googleAnalytics: {
    id: 'G-5G64B7TQRG'
  },

  styleResources: {
    scss: ['./assets/scss/variables.scss', './assets/scss/mixin.scss']
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
