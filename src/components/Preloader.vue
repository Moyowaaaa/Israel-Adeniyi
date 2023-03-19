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


      <p class="load" v-if="!assetsLoaded"> Loading assets :/</p>
      <p class="load" v-if="assetsLoaded"> Assets loaded :)</p>

      <div class="warning">
        Exploring will cause flashing images
      </div>
      
        
        
        </div>  

        <div class="transition-out">
          
        </div>

    </div>
</template>

<script setup lang="ts">

import Splitting from 'splitting';
import { onMounted,ref,provide,watchEffect } from 'vue';
import { gsap } from "gsap";
import ScrollTrigger  from 'gsap';
import thunderMediumFont from '../assets/fonts/Thunder-MediumLC.ttf'
import neutrafont from '../assets/fonts/NeutraText-Book.otf'
import neutaBold from '../assets/fonts/NeutraText-Bold.otf'
import thunderHeavyFont from '../assets/fonts/Thunder-BlackLC.ttf'
import helpingHand from '../assets/images/helpingHand.svg'
import nft from '../assets/images/Nft.svg'


gsap.registerPlugin(ScrollTrigger)



 

  












const loadingPercentage = ref<number | any>(0);

const load = () => {
  const id = setInterval(function () {
    loadingPercentage.value = loadingPercentage.value + 1;
  }, 10);
  setTimeout(() => {
    clearInterval(id);
  }, 1000);
};
const isLoaded = ref<boolean>(false)

const assetsLoaded = ref<boolean | null>(false)

const loaderTl = gsap.timeline();

onMounted(() => {

  // -------check assets before closing preloader

  const mainImageAssets = ref([
    helpingHand,nft
  ])
  const promises:any[] = []
  mainImageAssets.value.forEach(asset => {
    const img = new Image()
        img.src = asset
        promises.push(new Promise((resolve, reject) => {
          img.onload = resolve
          img.onerror = reject
        }))        
  })
  new Promise((resolve,reject) => {
    const thunderMd = new FontFace('thunderHv',`url(${thunderMediumFont})` )  
    const thunderHv = new FontFace('thunderHv',`url(${thunderHeavyFont})` )
    const neutraBd = new FontFace('neutraBd',`url(${neutaBold})`)
    const neutra = new FontFace('neutraBd',`url(${neutrafont})`)
    

    thunderHv.load().then(resolve, reject);
    thunderMd.load().then(resolve, reject);
    neutraBd.load().then(resolve, reject);
    neutra.load().then(resolve, reject);
  })
  Promise.all(promises).then(() => {
    isLoaded.value = true
  })

 


  const preloaderText = [...document.querySelectorAll('.content__title[data-splitting][data-effect3]')];

const lettersAndSymbols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '!', '@', '#', '$', '%', '^', '&', '*', '-', '_', '+', '=', ';', ':', '<', '>', ','];

console.log(preloaderText)

preloaderText.forEach((text) => {
    Splitting({
        target: text,
        by: "chars",
    });
    const chars = text.querySelectorAll('.char');
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
                    trigger: text,
                    start: 'top bottom',
                    end: 'bottom center',
                    toggleActions: "play resume resume reset",
                    onEnter: () => gsap.set(char, {opacity: 0})
                }
            });

        });
    })
  

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
    .to('.warning', {
      opacity:1,
      ease:"power3.inOut"
    })
    .to(".blackText", {
      delay: 0.6,
      duration: 0.8,
      opacity: 0,
    })

   
})

watchEffect(() => {
  assetsLoaded.value = isLoaded.value
  if(assetsLoaded.value === true) {
      console.log("lol")
      loaderTl.to('.preloader__container',  {
      y:'-100%',
      ease:"power3.inOut",
      duration:1
    })
    .fromTo('.transition-out', {
      display:"flex",
      position:"fixed",
      backgroundColor:"black",
      height:"130vh",
      width:"100%"
    }, {
      y:'-100%',
      ease:"power3.inOut",
      duration:2
    },"<0.5")
     .to('.preloader',{
      opacity:0,
      display:"none"
    })
    loaderTl.eventCallback("onComplete", () => {
      loaderTl.kill();
      gsap.set(".preloader", { zIndex:-1,display:"none",opacity:"0" });
    })
  }

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
    



  // loaderTl.eventCallback("onComplete", () => {
    // loaderTl.kill();
    // gsap.set(".preloader", { zIndex:-1,display:"none",opacity:"0" });
  // });


// });
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
  z-index: 2000;

  &__container {
    position: fixed;
    // display: none;
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

  @media screen and (max-width:485px) {
    .preloader {
      &__textcontainer {
        font-size:12rem
      }
    }
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
.warning{
  position:absolute;
  bottom: 1rem;
  color: black;
  text-align: center;
  width: 100%;
  font-size: 1.2rem;
  opacity: 0;
  font-family: 'thunder-mediuml';
}

.load{
  color:black;
  font-size: 1rem;
  z-index:2;
  right: 2rem;
  position:absolute;
  font-family: 'thunder-mediuml';
}

@media screen and (max-width:485px) {
  .content__title{
    font-size:20rem;
    width: 100%;
    text-align: center;
  }
  .warning{
    display: none;
    font-size: 3rem;
  }
}

</style>