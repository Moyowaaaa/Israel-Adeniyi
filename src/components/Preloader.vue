<template>
    <div class="preloader" id="pre">
        <div class="preloader__container" ref="preloaderRef">
      <div class="preloader__bar" ref="barRef"></div>
      <div class="preloader__textcontainer">
       
        <p class="percentage">
          <span v-if="loadingPercentage.toString().length === 1 && 0"> </span>
          <span>
            {{ loadingPercentage }}
          </span>
        </p>
        </div>

        <div class="text-reveal-container">
        <div class="text-reveal-container__text reveal  content__title" data-splitting data-effect3>ISRAEL</div>
      </div>
        
        
        </div>  

    </div>
</template>

<script setup lang="ts">


import Splitting from 'splitting';
import { onMounted,ref,provide } from 'vue';
import { gsap } from "gsap";
import ScrollTrigger  from 'gsap';

gsap.registerPlugin(ScrollTrigger)

const loadingPercentage = ref<number | any>(0);

const props = defineProps(['loading'])

console.log(props.loading)

const load = () => {
  const id = setInterval(function () {
    loadingPercentage.value = loadingPercentage.value + 1;
  }, 10);
  setTimeout(() => {
    clearInterval(id);
  }, 1000);
};

onMounted(() => {
    Splitting()

const fx11Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect3]')];

const lettersAndSymbols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '!', '@', '#', '$', '%', '^', '&', '*', '-', '_', '+', '=', ';', ':', '<', '>', ','];

const wrapElements = (elems:any, wrapType:any, wrapClass:any) => {
    elems.forEach((char:any) => {
        const wrapEl = document.createElement(wrapType);
        wrapEl.classList = wrapClass;
        char.parentNode.appendChild(wrapEl);
        wrapEl.appendChild(char);
    });
}



fx11Titles.forEach(title => {

    
        
        const chars = title.querySelectorAll('.char');

        

        chars.forEach((char, position) => {
            let initialHTML = char.innerHTML;
            
            gsap.fromTo(char, {
                opacity: 0
            },
            {
                duration: 0.03,
                innerHTML: () => lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)],
                repeat: 1,
                repeatRefresh: true,
                opacity: 1,
                repeatDelay: 0.03,
                delay: (position+8)*0.18,
                onComplete: ():any => gsap.set(char, {innerHTML: initialHTML, delay: 0.03}),
                scrollTrigger: {
                    trigger: title,
                    start: 'top bottom',
                    end: 'bottom center',
                    toggleActions: "play resume resume reset",
                    onEnter: () => gsap.set(char, {opacity: 0})
                }
            });

        });
        
    
        
    });



    const loaderTl = gsap.timeline();

loaderTl.from('.preloader', {
      opacity:0,
      delay:0.3,
      duration:0.2,
      ease:"power3.inOut"
  }),
loaderTl
  .to(".preloader__bar", {
    duration: 1,
    transform: `translate3d(0%, 0, 0)`,
    onStart: load,
  })


  .fromTo(
      ".text",
      { y: 0, opacity: 0 },
      {
        opacity: 1,
        delay:0.1,
        duration: 0.4,
        clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
      },
      "<0.1"
    )

    .to(".blackText", {
      delay: 0.6,
      duration: 0.8,
      opacity: 0,
    })
    
    // .fromTo(
    //   ".reveal",
    //   { y: 0, opacity: 0 },
    //   {
        
    //     opacity: 1,
    //     duration: 0.8,
    //     clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
    //   },
    //   "<0.1"
    // )
    .to(
      ".reveal",
      {
        delay: 0.1,
        duration: 1,
        y: -100,
        ease: "power3.inOut",
        opacity: 0,
      },
      "-=0.25"
    );



  loaderTl.eventCallback("onComplete", () => {
    loaderTl.kill();
    gsap.set(".preloader", { zIndex:-1 });

  });
});
</script>

<style scoped lang="scss">
.preloader {
  //    color:;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color:white;
  height: 100vh;
  width:100%;
  position: absolute;

  &__container {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #0b0b0b;
    margin: auto;
    z-index: 40;
  }

  &__bar {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    transform: translate3d(-100%, 0, 0);
  }

  &__textcontainer {
    position: fixed;
    bottom: 0;
    right: 0;
    padding: 5%;
    text-align: right;
    font-size: 8rem;
    font-family: 'thunder-mediuml';
  }

}

.text-reveal-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;

  color:#F89623;
  font-size: 8rem;
    font-family: 'thunder-mediuml';

}

</style>