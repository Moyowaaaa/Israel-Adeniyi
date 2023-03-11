<template>
    <div class="layout">
        <NavbarVue/>
        <div class="layout__child">
            <slot />
        </div>
        <Footer />
      
    </div>
</template>

<script setup lang="ts">
import Footer from '@/components/Footer.vue';
import NavbarVue from '@/components/Navbar.vue';
</script>

<style scoped lang="scss">
.layout {
	// min-height:100vh;
    width: 100%;
  
  
}
</style>
