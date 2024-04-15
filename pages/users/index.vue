<template>
    <div>
        <h1>目錄user的預設元件(首頁) /page/users/</h1>
        <!-- <MyComponent></MyComponent> -->
        <!-- 用法一：位在components目錄內的原件都屬全局元件，省去書寫匯入語法import，改書寫檔案名稱就可直接使用 -->
        <!-- <xxx></xxx> -->
        <!-- 用法二：駝峰寫法(單字的首字母大寫) 拼接目錄名+檔案名，也可直書寫檔案名稱 -->
        <!-- <UserDialog></UserDialog> -->
        
        <!--  -->
        <!-- <img src="/img/vue.png" alt="" width="200px"> -->
        <!-- <img src="~/assets/img/tailwindcss.png" alt="" width="200px"> -->
    </div>
</template>

<script lang="ts" setup>
import MyComponent from '~/pages/users/my-component.vue'
useHead({
    title: '/pages/uers/index.vue',
})
const config = useRuntimeConfig()
console.log(config.aaaa);
// console.log(config.public.bbbb);
console.log(config.public.apiBase);
if (config.isServer) {
    console.log('只在Server Side Render');
}
</script>

<style>

</style>