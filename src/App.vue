<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Lenis from '@studio-freight/lenis'
import { onMounted,ref,inject } from 'vue';
import CustomMouse from './components/CustomMouse.vue';
import Preloader from './components/Preloader.vue';


const loading = ref<boolean | null>(true)



const smoothScroll = ()=>{
  const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
  direction: 'vertical', // vertical, horizontal
  gestureDirection: 'vertical', // vertical, horizontal, both
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,

})



function raf(time:any) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
}


onMounted(() => {
    smoothScroll()
})






</script>

<template>
  <!-- <Preloader /> -->
  <Preloader/>
  <RouterView />
</template>

<style scoped>

</style>
