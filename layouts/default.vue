<template>
    <div>
        <AppHeader></AppHeader>
        <AppAside></AppAside>
        <!-- slot相當於/page/index.vue -->
        <slot></slot>
        <AppFooter></AppFooter>
    </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>