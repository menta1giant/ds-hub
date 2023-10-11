// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    SECRET_CODE: process.env.SECRET_CODE,
    CLIENT_ID: process.env.CLIENT_ID,
    REDIRECT_URL: process.env.REDIRECT_URL,
    public: {
      SOCKETS: process.env.SOCKETS
    }
  },
  modules: ['@pinia/nuxt'],
  imports: {
    dirs: ['./stores', './types'],
  },

  pinia: {
    autoImports: ['defineStore'],
  },
});
