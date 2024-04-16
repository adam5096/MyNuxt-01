// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
  //伺服器端可以渲染到的一些屬性與值(包含public目錄裡面的屬性與值)
    aaaa: 100,
    isServer: true,
    public: {//客戶端只渲染得到public目錄裡的內容
      bbbb: 200,
      apiBase: 'https://www.google.com'
    }
  }
})
