<template>
    <section class="marquee">
        <Vue3Marquee class="marquee-container" >
            <div class="marquee-word" v-for="(text, index) in marqueArray">
            <h1 class="word">{{ text }}</h1>
            </div>


            <div class="marquee-word" v-for="(text, index) in marqueArray">
            <h1 class="word">{{ text }}</h1>
            </div>

                


    </Vue3Marquee>
    </section>
</template>

<script setup lang="ts">
import 'vue3-marquee/dist/style.css'
import { Vue3Marquee } from 'vue3-marquee'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import { onMounted } from 'vue';
const marqueArray = ["Creative.","Passionate.", "Problem-solving."]


onMounted(() => {
//     const tl=gsap.timeline({
//         scrollTrigger:{
//             trigger:'.marquee-container',
            
//             markers:true,
//             scrub:true
//         }
//     })
// })


let sections = gsap.utils.toArray('.marquee-word')
     gsap.registerPlugin(ScrollTrigger)
     ScrollTrigger.matchMedia({
          '(min-width:600px)': function () {
               gsap.timeline({
                    scrollTrigger: {
                         trigger: '.marquee',
                         scrub: -1,
                         start: 'center +=600',
                         end: 'bottom +=300',
                         toggleActions: 'play pause resume restart',
                    },
               }).to('.marquee', {
                    xPercent: -10 * (sections.length - 2),
                    duration: 20,
                    ease: "power3.inOut",
               })
          },
     })

    })



</script>

<style scoped lang="scss">
.marquee{
    max-height: 50rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    color: white;
  
}

.marquee-container{
    overflow-x: hidden;
    padding:0.1rem 0;
    display: flex;
    align-items: center;
}
.marquee-word{
    display: flex;
    gap:8rem;

}
.word{
    padding: 0 2rem;
    font-size: 5rem;
    font-family: 'thunder-mediuml';
}


</style>