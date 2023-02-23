<template>
    <section class="titleSection" id="titleSection" ref="titleSection">
        <h1>Hola</h1>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const titleSection = ref<HTMLDivElement| null>()
</script>

<style scoped lang="scss">
.titleSection {
    height:200rem;
    color:white
}
</style>