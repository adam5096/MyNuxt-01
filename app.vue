<script setup lang="ts">
// 頁籤相關設定，此處設定會覆蓋nuxt.config中對於app.head的設定
// useHead({
//   title: 'Adam 哈哈',
// })

useHead({
  // 標題樣板：對每一子元件進行檢查看你有無設置標題
  titleTemplate: (titleChunk) => {
    // 如有子元件有設置，app.vue就用子元件指定標題(即此處的titleChunk變數)+app.vue自訂字串
    // 沒有設置，則僅選用app.vue自訂字串
    return titleChunk ? `${titleChunk}-子件有設置自己的title ` : '無title';
  },
  // script: [
  //   {
  //     src: 'https://third-party-script.com',
  //     // valid options are: 'head' | 'bodyClose' | 'bodyOpen'
  //     tagPosition: 'bodyClose'
  //   }
  // ]
})
</script>


<template>
  <div class="container">
    <h1>根元件App.vue</h1>
    <!-- 跳轉標籤NuxtLink -->
    <!-- NuxtLink會被編譯成a標籤，但不推薦直接使用a標籤
        直接使用a標籤，點擊後會發生頁面刷新，相當於一次全新向伺服器端發起請求
        使用nuxtlink屬於瀏覽器端本地導航切換頁面，即SPA
    -->
    <h2>
      <NuxtLink to="/">首頁 / NuxtLink</NuxtLink>
    </h2>
    <h2>
      <NuxtLink to="/users">用戶預設頁 /users/index NuxtLink</NuxtLink>
    </h2>
    <h2>
      <NuxtLink to="/users/list">用戶列表頁 /users/list.vue NuxtLink</NuxtLink>
    </h2>
    <h2>
      <NuxtLink to="/users/create-or-edit">用戶新增或修改 /users/create-or-edit NuxtLink</NuxtLink>
    </h2>
    <!-- <h2><NuxtLink to="/roles/admin">角色-管理員 /roles/admin NuxtLink</NuxtLink></h2> -->
    <!-- <h2><NuxtLink to="/roles/normal">角色-一般用戶 /roles/normal NuxtLink</NuxtLink></h2> -->
    <!-- <h2><NuxtLink to="/about">關於 /about NuxtLink</NuxtLink></h2> -->
    <!-- <h2><NuxtLink to="/course/[id]">課程 /course/[id] NuxtLink</NuxtLink></h2> -->

    <!-- 展示標籤 概念像挖洞，填內容  -->
    <!-- 想要改變這個位置的內容，要去瀏覽器網址列位置手動輸入對應的到的目錄名稱、層級 -->
    <!-- <NuxtPage /> -->

    <AppHeader></AppHeader>
    <AppAside></AppAside>
    <NuxtPage />
    <AppFooter></AppFooter>
  </div>
</template>

<style scoped>
a {
  margin: 0 20px;
}
</style>