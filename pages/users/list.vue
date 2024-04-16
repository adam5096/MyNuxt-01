<template>
    <div>
        <h1>用戶列表</h1>
        <h2>{{ counter }}</h2>
        <button @click="counter++">加1</button>
        <button @click="addCounter">加2</button>
    </div>
</template>

<script lang="ts" setup>
// 伺服器位於/server目錄下
// 下列語法可以用預設GET方法向API接口發送請求
// useFetch('/api/aaaa').then(res => {
//     console.log(res);
// })
// useFetch('/api/dddd', {
//     method: 'POST',//請求方法
//     body: { account: 'acc', password: 'password' }// 請求主體夾帶參數
// }).then(res => {
//     console.log(res);
// })
const counter = useCounter()
const addCounter = () => {
    counter.value = counter.value+2
}
</script>

<style>

</style>