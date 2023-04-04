<script setup lang="ts">

import HeroSection from '@/components/HeroSection.vue';
import Navbar from '@/components/Navbar.vue';
import Preloader from '@/components/Preloader.vue';
import SelectedWorksSection from '@/components/SelectedWorksSection.vue';
import TitleSection from '@/components/TitleSection.vue';
import gsap from 'gsap';
import { onMounted,ref } from 'vue';
import Main from '../layouts/Main.vue'




</script>

<template>
  <div class="app">
    
  <Main>
    <Preloader />
    <TitleSection />
  <HeroSection />
  <SelectedWorksSection />
  </Main>
  </div>
</template>
