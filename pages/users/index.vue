<template>
    <div>
        <h1>目錄user的預設元件(首頁) /page/users/</h1>
        <h2>{{ data }}</h2>
    </div>
</template>

<script setup>
const config = {
    baseURL: 'https://jsonplaceholder.typicode.com/',
    // 請求攔截器
    onRequest({ request, options }) {
        console.log('送出邀請了!!!!!');
        console.log(options);
    },
    // 回應攔截器
    onResponse({ request, response, options }) {
        console.log('對方同意了!!!!!');
    }
}
// useLazyFetch,點擊具有換頁+請求資料的綜合功能按鈕時
// 不等待請求資料回到客戶端後，先把新頁的靜態結構展示到頁面上，隨後才放上請求回來的資料內容
const { data } = await useLazyFetch('/posts', {
    method: 'GET',
    params: { id: 3 },
    ...config
})
// useFetch 點擊具有換頁+請求資料的綜合功能按鈕時
// 會等待請求資料回到客戶端後，再一併連同新頁的靜態結構同時展示到頁面上
// useFetch('/posts', {
//     method: 'GET',
//     baseURL: 'https://jsonplaceholder.typicode.com/'
// }).then(res => {
//     console.log(res);
// })
// useAsyncData('取得文章', () => $fetch('/posts', {
//     method: 'GET',
//     baseURL: 'https://jsonplaceholder.typicode.com/'
// }).then(res => {
//     console.log(res);
// })
// );
</script>

<style></style>