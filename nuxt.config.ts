export default defineNuxtConfig({
  devServer: {
    port: 8080
  },
  devtools: {
    enabled: true
  },
  components: [
    {
      path: '~/components',
    },
  ],
  css: ['~/assets/styles/main.scss'],
  modules: ['@pinia/nuxt'],
  imports: {
    dirs: ['./stores'],
    autoImport: true
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
                    @use "~/assets/styles/_variables" as *;
                    @import "~/assets/styles/_mixins";`
        }
      }
    }
  }
})
