// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
          charset: 'utf-8',
          viewport: 'width=500, initial-scale=1',
          title: 'Acefood',
          meta: [
            { name: 'description', content: 'Detect diseases in tomato plants with your smartphone' }
          ],
        }
      },
      css: ["@/assets/css/tailwind.css"],
})
