<template>
    <div>
        <h1>標題{{ data.title }}</h1>
        <h2>內容</h2>
        <h3>{{ data.body }}</h3>
    </div>
</template>

<script setup>
const route = useRoute();
const { data } = await useFetch(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
</script>

<style>

</style>