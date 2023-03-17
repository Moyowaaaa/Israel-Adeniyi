<template>
  <section class="heroSection" id="heroSection">
    <div class="sub">
      <div class="heroSection--contentcontainer">
        <div class="title-container">
          <h1 class="section-title title" data-splitting="" data-effect1>
            About Me.
          </h1>
        </div>

        

        <div class="hero-container">
          <p class="section-text-normal hero-text" data-splitting="" data-effect2>
            I am a User experience designer driven by passion in creating
            digital experiences that are both aesthetically pleasing and
            intuitive to use. I have a deep understanding of design principles
            and techniques, and I stay up-to-date with the latest design trends
            and technologies. With a strong background in user research and
            testing, I focus on designing interfaces that meet the needs and
            expectations of users.
          </p>
          <p class="section-text-bold resume">View Resume</p>
        </div>
      </div>
    </div>


   

    
  </section>
</template>

<script setup lang="ts">

import Splitting from "splitting";
import { onMounted, onUnmounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);



onMounted(() => {

  // const heroText = [
  //   ...document.querySelectorAll(".hero-text[data-splitting][data-effect2]:not(.splitting-done)"),
  // ];

  // heroText.forEach((text) => {
  //   Splitting({ target: text });
  //   text.classList.add("splitting-done");

  //   gsap.fromTo(
  //     text.querySelectorAll(".word"),
  //     {
  //       "will-change": "opacity",
  //       opacity: 0.2,
  //     },
  //     {
  //       ease: "none",
  //       opacity: 1,
  //       stagger: 0.05,
  //       scrollTrigger: {
  //         trigger: text,
  //         start: "top bottom-=20%",
  //         end: "center top+=20%",
  //         scrub: true,
  //       },
  //     }
  //   );
  // });
});





// onUnmounted(() => {
//   // no need to do anything here
// });




</script>

<style lang="scss" scoped>
.heroSection {
  max-width: 100rem;
  overflow-x: hidden;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  //  padding: 0 11.8rem;

  &--contentcontainer {
    width: 100%;
    // border:2px solid;
    display: flex;
    justify-content: space-between;
  }

  @media screen and (max-width:485px) {
    max-width: auto;
    border:2px solid red;
    height: 80rem;
    max-height: 90vh;
    align-items: start;
    justify-content: flex-start;



    &--contentcontainer {
      flex-direction: column;
    }
    }


  
}

.title-container, .hero-container {
  width: 41.666667%;
  color: #f8f8f8;

  @media screen and (max-width:485px) {
    width: 100%;
    border:2px soid salmon
    
  }
}

.resume {
  color: #f89623;
}

.sub {
  max-width: 100%;

  padding: 0 11.8rem;
}

.Marquee-container {
  width: 100%;

  position: relative;
  top: 6rem;
}

.marquee {
  white-space: nowrap;
  overflow: hidden;
  animation: marquee 40s linear infinite;
  color:white
}

.marquee p {
  display: inline-block;
  padding-left: 100%;
  animation: marquee-text 40s linear infinite;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes marquee-text {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

</style>
