<template>
    <section class="marquee">
        <Vue3Marquee class="marquee-container" >
            <div class="w-full gap-12 flex">
        <div class="pl-4" v-for="(word, index) in marqueArray">
        <h2 class="text-6xl ">{{word}}</h2>
        </div>
        <div class="pl-4"  v-for="(word, index) in marqueArray">
        <h2 class="text-6xl ">{{word}}</h2>
        </div>
    </div>

    </Vue3Marquee>
    </section>
</template>

<script setup lang="ts">
import 'vue3-marquee/dist/style.css'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger';
const marqueArray = ["Creative.","Passionate.", "Problem-solving."]


</script>

<style scoped lang="scss">
.marquee{
    max-height: 50rem;
    display: flex;
    flex-direction: column;
    justify-content: start;
    color: white;
}

.marquee-container{
    overflow-x: hidden;
    padding:2rem 0;
}
.marquee-word{
    display: flex;
    gap:4rem;

    h1{
        font-size:5rem
    }
}

</style>