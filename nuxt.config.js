export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'El rancho de Seli',
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.png' },
      {
        rel: 'stylesheet',
        href: '/app.css'
      },
      {
        rel: 'stylesheet',
        href: '/bundle.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://bimberonline.com/dogworks/wp-content/themes/hello-elementor/style.min.css?ver=2.6.1'
      },
      {
        rel: 'stylesheet',
        href: 'https://bimberonline.com/dogworks/wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min.css?ver=5.16.0'
      },
      {
        rel: 'stylesheet',
        href: 'https://bimberonline.com/dogworks/wp-content/plugins/elementor/assets/css/frontend-legacy.min.css?ver=3.7.6'
      },
      {
        rel: 'stylesheet',
        href: 'https://bimberonline.com/dogworks/wp-content/plugins/elementor/assets/css/frontend.min.css?ver=3.7.6'
      },
      {
        rel: 'stylesheet',
        href: 'https://bimberonline.com/dogworks/wp-content/uploads/sites/82/elementor/css/post-374.css?ver=1663303626'
      },
      {
        rel: 'stylesheet',
        href: 'https://bimberonline.com/dogworks/wp-content/plugins/elementor-pro/assets/css/frontend.min.css?ver=3.7.6'
      },
      {
        rel: 'stylesheet',
        href: 'https://bimberonline.com/dogworks/wp-content/uploads/sites/82/elementor/css/post-404.css?ver=1663303627'
      },
      {
        rel: 'stylesheet',
        href: 'https://bimberonline.com/dogworks/wp-content/uploads/sites/82/elementor/css/post-407.css?ver=1663303627'
      },
      {
        rel: 'stylesheet',
        href: 'https://bimberonline.com/dogworks/wp-content/uploads/sites/82/elementor/css/post-1154.css?ver=1663309274'
      },
      {
        rel: 'stylesheet',
        href: 'https://bimberonline.com/dogworks/wp-content/plugins/elementor/assets/lib/animations/animations.min.css?ver=3.7.6'
      },
      {
        rel: 'stylesheet',
        href: 'https://bimberonline.com/dogworks/wp-includes/css/dist/block-library/style.min.css?ver=6.0.2'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Bowlby+One+SC%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7COutfit%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CFuzzy+Bubbles%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CNoto+Sans+Thai%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&display=auto&ver=6.0.2'
      },
      {
        rel: 'stylesheet',
        href: 'https://bimberonline.com/dogworks/wp-content/plugins/elementor/assets/lib/font-awesome/css/fontawesome.min.css?ver=5.15.3'
      },
      {
        rel: 'stylesheet',
        href: 'https://bimberonline.com/dogworks/wp-content/plugins/elementor/assets/lib/font-awesome/css/solid.min.css?ver=5.15.3'
      },
      {
        rel: 'stylesheet',
        href: 'https://bimberonline.com/dogworks/wp-content/plugins/elementor/assets/lib/font-awesome/css/brands.min.css?ver=5.15.3'
      },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.13.0/css/all.css'
      }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  env: {
    environment: process.env.NODE_ENV
  }
}
