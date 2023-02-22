<template>
     <section class="section max-h-screen h-[50rem]  pt-32 flex flex-col justify-start text-white pb-12 " id="about">
       
       <div class="w-full items-center flex flex-col lg:flex-row justify-between px-[7rem]">
       
       <div class="w-11/12 lg:w-5/12 flex flex-col justify-center">
       
           <!-- <img src="~/assets/images/Oba.svg" class="relative"/> -->
       
           <div class="flex flex-col ">
       <h1 class="text-6xl lg:text-8xl underline lg:no-underline font-[thunder-boldl] " ref="hover">About Me.</h1>
       <div class="hover-reveal">
                       <div class="hover-reveal__inner">
                           <div class="hover-reveal__img one" ref="linkImage"></div>
                       </div>
                   </div>
           </div>
       
       </div>
       
       <div class="w-10/12 lg:w-5/12 mt-8 lg:mt-20 py-4 " >
       <p class="text-justify leading-loose
       font-[neutra]">
        I am a User experience designer driven by  passion in creating digital experiences that are both aesthetically pleasing and intuitive to use. I have a deep understanding of design principles and techniques, and I stay up-to-date with the latest design trends and technologies. With a strong background in user research and testing, I focus on designing interfaces that meet the needs and expectations of users.
       </p>
       
       <p class="flex gap-4 py-4 text-[#BA6C10] items-center font-[neutra-bold]">View Resume
       
       </p>
       </div>
       
       
       
       </div>  
       <!-- <div class="w-auto border-2 border-[red] py-2 flex gap-6">
           <div class="text text-7xl">Creative.</div>
           <div class="text text-7xl">Passionate.</div>
           <div class="text text-7xl">Problem Solving.</div>
        
       </div> -->
       <MarqueeVue />
       
   
       
     </section>
</template>

<script setup lang="ts">
import  MarqueeVue from './Marquee.vue';


</script>

<style scoped>

</style>