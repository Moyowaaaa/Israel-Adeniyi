<template>
    <div class="layout">

        <div class="layout__child">
            <slot />
        </div>
        <Footer />
      
    </div>
</template>

<script setup lang="ts">
import Footer from '@/components/Footer.vue';
</script>

<style scoped lang="scss">
.layout {
	// min-height:100vh;
    width: 100%;
  
  
}
</style>
