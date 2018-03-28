const cdn = 'http://oyhnfm85i.bkt.clouddn.com/cbl'
const prdRoot = 'http://localhost:8000'

const externals = [
  // Those vendors that have been added to static/vendor by @nuxt/vender module or externals.
  { src: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.40/js/uikit.min.js', type: 'text/javascript' },
  { src: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.40/js/uikit-icons.min.js', type: 'text/javascript' },
]
module.exports = {
  // env: {
  //   baseURL: (process.env.NODE_ENV === 'production' ? prdRoot : 'http://localhost:3000'),
  // },
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
    browserBaseURL: (process.env.NODE_ENV === 'production' ? prdRoot : 'http://localhost:3000'), // Can be also an object with default options
  },
  /*
  ** Headers of the page
  */
  head: {
    title: '',
    titleTemplate: '%s | Cloudybay Lighting',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Cloudybay Lighting, Cloudybay, Lighting, LED Lighting' },
    ],
    script: [],
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
    { src: '~/plugins/uikit', ssr: false },
    { src: '~/plugins/lazysizes', ssr: false },
    { src: '~/plugins/axios' }
  ],

  css: [
    // 项目中的 less 文件
    { src: '@/assets/style/main.less', lang: 'less' }
  ],

  /*
  ** Build configuration
  */
  build: {
    analyze: {
      analyzerMode: 'static'
    },

    // babel: {
    //   presets: ['es2015', 'stage-0']
    // },

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
      // console.log(config)
      config.node = {
        fs: 'empty'
      }
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
