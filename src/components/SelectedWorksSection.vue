
<script setup lang="ts">
import gsap from 'gsap';
import ScrollTrigger  from 'gsap';
import Splitting from 'splitting';
import { onMounted } from 'vue';
gsap.registerPlugin(ScrollTrigger)



onMounted(() => {
//   const worksContainer = document.querySelector('.selectedWorks--container__works-container');
//   const works = document.querySelectorAll('.work-container');

//   gsap.to(works, {
//     xPercent: -100,
//     ease: 'none',
//     scrollTrigger: {
//       trigger: '.selectedWorks',
//       start: 'top center',
//       end: 'bottom center',
//       scrub: true,
//     },
//   });
Splitting()

const fx11Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect8]')];

const lettersAndSymbols = ['a', 's','!', '@', '#', '$', '%', '^', '&', '*', '-', '_', '+', '=', ';', ':', '<', '>', ','];


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
        wrapElements(chars, 'span', 'char-wrap');

        gsap.fromTo(chars, { 
            'will-change': 'transform', 
            transformOrigin: '0% 50%',
            xPercent: 105,
            opacity:0
        }, 
        {
            duration: 1,
            ease: 'expo',
            xPercent: 0,
            stagger: 0.042,
            opacity:1,
            scrollTrigger: {
                trigger: title,
                start: 'top bottom',
                end: 'top top+=10%',
                toggleActions: "play resume resume reset",
                scrub:0.7
            }
        });

    });



gsap.from('.helping', {
    y:50,
    duration:12,
    ease:"power3.inOut",
    
    scrollTrigger:{
        trigger:'.selectedWorks',
        start: 'top center',
      end: 'bottom center',
      scrub: true,
   
    }
})

gsap.from('.NFT', {
    y:-50,
    duration:1.2,
    ease:"power3.inOut",

    scrollTrigger:{
        trigger:'.selectedWorks',
        start: 'top center',
      end: 'bottom center',
      scrub: true,
      
    }
})

});

</script>

<template>
    <section class="selectedWorks">

        <div class="selectedWorks--container">
            <h1 class="section-title title content__title" data-splitting data-effect8>
            Selected Works
          </h1>


          <div class="selectedWorks--container__works-container" id="works-container">
         <div class="work-container helping">
            <img src="../assets/images/helpingHand.svg" />
            <div class="work-container--desc project-desc-text">
                <h1>Helping hand Case study</h1>
                <img src="../assets/images/linkArrow.svg" />
            </div>
         </div>
         <div class="work-container NFT">
            <img src="../assets/images/Nft.svg" />
            <div class="work-container--desc project-desc-text">
                <h1>NFT UI Relume Challenge</h1>
                <img src="../assets/images/linkArrow.svg" />
            </div>
         </div>
           

            </div>  

            <button class="button">
                View All
            </button>


            


        </div>
   
    </section>
</template>


<style scoped lang="scss">
.selectedWorks{
    height: auto;
    padding: 2rem 11.8rem;
    color:#f8f8f8;
    min-height: 100vh;
    
    box-sizing: border-box;
    

    &--container{
       
        display: flex;
        flex-direction: column;
        gap:4rem;
        height: 100%;

      &__works-container{
        height: 5rem;
     
        display:flex;
        gap:3rem;
        justify-content: justify-between;
       
      }
    }

    

}

.work-container{
    height:22rem;
    width: 50%;;
    
    object-fit: cover;

    img{
        width: 100%;
  height: 100%;
//   object-fit: contain;
object-fit: fit;
    }
    &--desc{
        width: 100%;
      
        margin-top: 0.2rem; 
        padding: 2px 0;
        display: flex;
        justify-content: space-between;
        align-items: center ;

        img{
            object-fit: fit;
            width:30px
        }
       

        
    }

}
.title{
    text-align: center;
}

.button{
    height:auto;
    width:max-content;
    margin: 0 auto;
    position: relative;
    top:20rem;
    font-size: 1.25rem;
        font-family: 'thunder-mediuml';
    padding: 1rem 2rem;
        border:2px solid white;
        color:white;
        background-color: transparent;
}
</style>