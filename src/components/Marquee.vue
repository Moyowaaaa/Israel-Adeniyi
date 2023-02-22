<template>
    <div class="" id="marque">
    <Vue3Marquee class="overflow-hidden h-auto py-8 " >
        <!-- <div
      v-for="(word, index) in marqueArray"
      :key="index"
      class="text-3xl gap-2"
     
    >
      {{ word }}
    </div> -->

    <div class="w-full gap-12 flex">
        <div class="pl-4 " v-for="(word, index) in marqueArray">
        <h2 class="text-[6rem] ">{{word}}</h2>
        </div>
    </div>

    </Vue3Marquee>
    </div>  
</template>

<script setup lang="ts">
import { Vue3Marquee } from 'vue3-marquee'
import 'vue3-marquee/dist/style.css'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger';
const marqueArray = ["Creative.","Passionate.", "Problem-solving."]




</script>

<style scoped>
.word {
  font-size: 30px;
  margin: 0 10px;
}
.odd {
  color: rgb(68, 77, 84);
}
.even {
  color: rgb(137, 147, 156);
}
</style>