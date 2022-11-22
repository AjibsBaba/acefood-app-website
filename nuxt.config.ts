// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      charset: 'utf-8',
      title: 'Acefood',
      meta: [
        { name: 'description', content: 'mobile application that detects diseases in tomato plants in realtime' },
        { name: 'canonical', content: 'https://www.acefood.ajibsbaba.com' },
        {
          name: 'og:title',
          content: 'Acefood | Detect Tomato Diseases today!',
        },
        { name: 'og:type', content: 'website' },
        {
          name: 'og:site_name',
          content: 'Acefood | Detect Tomato Diseases today!',
        },
        { name: 'format-detection', content: 'telephone=no' },
        {
          name: 'keywords',
          content:
            'Ajibade, ios, android, crossplatform, flutter, tflite, tensorflow, diseases, realtime, smartphone, kotlin, dart',
        },
        { name: 'copyright', content: 'Samuel Ajibade (AjibsBaba)' },
        { name: 'twitter:creator', content: '@ajibs_baba' },
        { name: 'twitter:site', content: '@ajibs_baba' },
        { name: 'author', content: 'Samuel Ajibade' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
});
