export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Hack This Fall',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Hack This Fall is one of the most thriving hacker communities. It encourages beginner hackers to build unique projects regardless of the tech or field; the only focus is to create something meaningful and enjoy building while also solving the shared struggles of our surroundings.',
      },
      {
        property: 'apple-mobile-web-app-title',
        content: 'Hack This Fall',
      },
      {
        property: 'og:url',
        content: 'https://hackthisfall.tech',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:title',
        content: 'Hack This Fall',
      },
      {
        property: 'og:description',
        content:
          'Hack This Fall is one of the most thriving hacker communities. It encourages beginner hackers to build unique projects regardless of the tech or field; the only focus is to create something meaningful and enjoy building while also solving the shared struggles of our surroundings.',
      },
      {
        property: 'og:image',
        content: 'https://hackthisfall.tech/meetups-2023.png',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:site',
        content: '@hackthisfall',
      },
      {
        name: 'twitter:title',
        content: 'Hack This Fall',
      },
      {
        name: 'twitter:image',
        content: 'https://hackthisfall.tech/meetups-2023.png',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon-dark.ico',
        media: '(prefers-color-scheme:no-preference)',
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon-light.ico',
        media: '(prefers-color-scheme:light)',
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon-dark.ico',
        media: '(prefers-color-scheme:dark)',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['./styles/global.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '~/plugins/v-waypoint.js',
      mode: 'client',
    },
    { src: '~/plugins/vercel.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/style-resources',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/chakra
    '@chakra-ui/nuxt',
    // https://go.nuxtjs.dev/emotion
    '@nuxtjs/emotion',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'nuxt-webfontloader',
  ],
  webfontloader: {
    google: {
      families: ['Poppins:400,500,600,700,800'],
    },
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  styleResources: {
    scss: ['./styles/_mixin.scss'],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  server: {
    port: 8000, // default: 3000
  },
}
