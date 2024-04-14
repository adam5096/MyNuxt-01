<template>
    <div>
        <h1>目錄user的預設元件(首頁) /page/users/</h1>
        <MyComponent></MyComponent>
        <!-- 用法一：位在components目錄內的原件都屬全局元件，省去敲打匯入語法import，直接敲打檔案名稱就可直接使用 -->
        <xxx></xxx>
        <!-- 用法二：駝峰寫法(單字的首字母大寫) 拼接目錄名+檔案名，也可直接敲打檔案名稱 -->
        <UserDialog></UserDialog>
    </div>
</template>

<script lang="ts" setup>
import MyComponent from '~/pages/users/my-component.vue'
</script>

<style>

</style>