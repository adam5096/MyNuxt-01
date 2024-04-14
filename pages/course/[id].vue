<template>
    <div>
        <!-- <h1>課程ID為{{ id1 }} </h1> -->
        <h1>課程ID為 : {{ id2 }} </h1>
    </div>
</template>

<script lang="ts" setup>
// const route = useRoute();
// const id1 = route.params.id;
const id2 = useRoute().params.id;
</script>


<style>

</style>