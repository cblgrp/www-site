const cdn = 'http://oyhnfm85i.bkt.clouddn.com/cbl'
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '',
    titleTemplate: '%s - Cloudybay Lighting',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
    ],
    script: [
      // Those vendors that have been added to static/vendor by @nuxt/vender module.
      // ...

      // Externals
      // { src: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.40/js/uikit.min.js' },
      // { src: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.40/js/uikit-icons.min.js' },
    ],
    link: [
      { rel: 'favicon', type: 'image/png', sizes: "16x16", href: `${cdn}/favicon-16x16.png` },
      { rel: 'favicon', type: 'image/png', sizes: "32x32", href: `${cdn}/favicon-32x32.png` },
      { rel: 'shortcut icon', type: 'image/png', sizes: "96x96", href: `${cdn}/favicon-96x96.png` },
      // { rel: 'icon', type: 'image/x-icon', href: `${cdn}/favicon.ico` }
    ],
  },

  /*
  ** Customize the progress bar color
  */
  // loading: '~/components/loading.vue',
  loading: { color: '#52B246' },

  plugins: [
    { src: '~/plugins/uikit.js', ssr: false },
    { src: '~/plugins/lazysizes.js', ssr: false }
  ],

  css: [
    // 项目中的 less 文件
    { src: '@/assets/style/main.less', lang: 'less' }
  ],

  /*
  ** Build configuration
  */
  build: {
    // analyze: true,

    filenames: {
      chunk: '[name].[chunkhash].js', // default: [name].[chunkhash].js
    },

    vendor: [ 'uikit', 'lazysizes' ],
    // The max chunk file size. (default: 300k per file)
    maxChunkSize: 300000,

    // publicPath: process.env.NODE_ENV === 'production' ? 'https://cdn.nuxtjs.org' : '/_static/',
    publicPath: '/_static/',

    /* Run ESLint on save */
    extend (config, { isDev, isClient }) {
      // Extend the 'data-src' & 'data-srcset' prop to vue-loader img for lazysizes.
      const vueLoader = config.module.rules.find((rule) => rule.loader === 'vue-loader')
      vueLoader.options.transformToRequire['img'] = ['src', 'data-src', 'data-srcset']
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
