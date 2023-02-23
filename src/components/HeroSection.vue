<template>
    <section class="heroSection" id="heroSection">
        <div class="sub">
            <div class="heroSection--contentcontainer">
          <div class="title-container">
           <h1 class="section-title">About Me.</h1>
          </div>

          <div class="hero-container">
            <p class="section-text-normal content__text" data-splitting data-effect1>
                I am a User experience designer driven by  passion in creating digital experiences that are both aesthetically pleasing and intuitive to use. I have a deep understanding of design principles and techniques, and I stay up-to-date with the latest design trends and technologies. With a strong background in user research and testing, I focus on designing interfaces that meet the needs and expectations of users.

            </p>
            <p class="section-text-bold resume">
                View Resume
            </p>

          </div>
        </div>
        </div>
      
        <!-- <div class="Marquee-container">
            <MarqueeVue />
        </div> -->
    </section>
</template>

<script setup lang="ts">
import Splitting from 'splitting';
import { onMounted } from 'vue';
import  MarqueeVue from './Marquee.vue';
import gsap from 'gsap';

onMounted(() => {
    Splitting()
    
    console.log(Splitting)
    const fx16Titles = [...document.querySelectorAll('.content__text[data-splitting][data-effect1]')];

console.log({...fx16Titles})
fx16Titles.forEach(text => {
    gsap.fromTo(text, {
        transformOrigin: '0% 50%',
            rotate: 3,
            opacity:0.2
        }, {
            opacity:1,
            rotate: 0,
            ease:"power3.inOut",
            scrollTrigger: {
                trigger: text,
                start: 'top bottom',
                end: 'top top',
                markers:true,
                scrub: true,
            }
    });
})

})



</script>

<style lang="scss" scoped>
.heroSection{
    max-width: 100rem;
    overflow-x: hidden;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin:0 auto;
   

    &--contentcontainer{
        width: 100%;
        // border:2px solid;
        display:flex;
        justify-content: space-between;
        
       
    }
   
}

.title-container, .hero-container{
    width: 41.666667%;
    color:#F8F8F8
}

.resume{
    color:#F89623
}

.sub{
    max-width: 100%;
 
    padding: 0 11.8rem;
}

.Marquee-container {
    width: 100%;
    border:2px solid blue;
    position: relative;
    top: 10rem;
}




</style>