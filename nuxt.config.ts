// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    aaaa: 100,
    isServer: true,
    public: {
      bbbb: 200,
      apiBase: 'https://www.google.com'
    }
  }
})
