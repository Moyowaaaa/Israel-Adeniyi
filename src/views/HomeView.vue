<script setup lang="ts">
import CustomMouseVue from '@/components/CustomMouse.vue';
import HeroSection from '@/components/HeroSection.vue';
import Navbar from '@/components/Navbar.vue';
import TitleSection from '@/components/TitleSection.vue';
import Main from '../layouts/Main.vue'


</script>

<template>
  <div class="app">

    <Main>
    <Navbar />
    <TitleSection />
    <HeroSection />
    </Main>
  </div>
</template>
