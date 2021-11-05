export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ZEN-WENs Blog',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          '歡迎來到我的部落格！我是喜歡手沖咖啡、美食、看迷因的前端工程師。主要文章內容為技術筆記，分享部分生活體驗和興趣。'
      },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://cdn.bootcdn.net/ajax/libs/normalize/8.0.1/normalize.min.css'
      }
    ]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/mixins.scss', '@/assets/scss/variables.scss'],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/style-resources'],
  typescript: {
    typeCheck: {
      eslint: {
        files: './**/*.{ts,js,vue}'
      }
    }
  },
  styleResources: {
    scss: ['./assets/scss/*.scss']
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/stylelint-module'],

  build: {
    postcss: {
      plugins: {
        // Disable `postcss-url`
        'postcss-url': false,
        'postcss-nested': {},
        'postcss-responsive-type': {},
        'postcss-hexrgba': {}
      },
      preset: {
        autoprefixer: {
          grid: true
        }
      }
    }
  }
}
