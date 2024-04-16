let routesArr = []
for (let i:any; i <= 10; i++){
  routesArr.push(`/article/${i}`)
}
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
  },
  // 對指定路由個別設置
  routeRules: {
    //關閉ssr,改csr
    '/xxx/yyy/zzz': { prerender: true },
    //重定向
    '/admin/**': { ssr: false },
    '/old-page': { redirect: '/users/create-or-edit' },
    //自訂頭部載物
    '/users/**': { static: true, headers: { 'cache-control': 'text-text' } },
    //開啟同源政策
    '/api/aaaa': { cors: true }
  },
  nitro: {
    prerender: {
      routes: routesArr
    }
  }
})
