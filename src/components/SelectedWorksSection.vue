 
<script setup lang="ts">
import gsap from 'gsap';
import ScrollTrigger  from 'gsap';
import Splitting from 'splitting';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import SplitType from 'split-type'
gsap.registerPlugin(ScrollTrigger)



const router = useRouter()

// window.addEventListener('beforeunload', () => {
  
// })

// router.afterEach((to, from) => {
//   console.log(`Navigated to ${to.path} from ${from.path}`);

// });






onMounted(() => {




// const fx11Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect8]')];

// const lettersAndSymbols = ['a', 's','!', '@', '#', '$', '%', '^', '&', '*', '-', '_', '+', '=', ';', ':', '<', '>', ','];


// const myText = new SplitType('#selectedTitle')

// const wrapElements = (elems:any, wrapType:any, wrapClass:any) => {
//     elems.forEach((char:any) => {
//         const wrapEl = document.createElement(wrapType);
//         wrapEl.classList = wrapClass;
//         char.parentNode.appendChild(wrapEl);
//         wrapEl.appendChild(char);
//     });
// }





// (myText.words as any)?.forEach((title:any) => {
        
//         const chars = title.querySelectorAll('.char');
//         wrapElements(chars, 'span', 'char-wrap');

//         gsap.fromTo(chars, { 
//             'will-change': 'transform', 
//             transformOrigin: '0% 50%',
//             xPercent: 105,
//             opacity:0
//         }, 
//         {
//             duration: 1,
//             ease: 'expo',
//             xPercent: 0,
//             stagger: 0.042,
//             opacity:1,
//             scrollTrigger: {
//                 trigger: title,
//                 start: 'top bottom',
//                 end: 'top top+=10%',
//                 toggleActions: "play resume resume reset",
//                 scrub:0.7
//             }
//         });

//     });




gsap.from('.helping', {
    y: "-5rem",
    duration:12,
    ease:"power3.inOut",
    
    
    scrollTrigger:{
        trigger: '.selectedWorks',
        start: 'top center',
      end: 'bottom center',
      scrub: true,
   
    }
})

gsap.from('.NFT', {
    y:"",
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

const navigateToWorks = async() => {
   await router.push('/works')
  if (window.scrollY > 0) {
   window.scrollTo(0,0)
   }

}

</script>

<template>
    <section class="selectedWorks">

        <div class="selectedWorks--container">
            <h1 class="section-title title content__title" data-splitting data-effect8 id="selectedTitle">
            Selected Works
          </h1>


          <div class="selectedWorks--container__works-container" id="works-container">
           
         <div class="work-container helping">
            <a href="https://www.behance.net/gallery/143565927/Helping-hand-Case-Study" target="_blank">
            <img src="../assets/images/helpingHand.svg" />
            <div class="work-container--desc project-desc-text">
                <h1>Helping hand Case study</h1>
                <img src="../assets/images/linkArrow.svg" />
            </div>
        </a>
         </div>
       

       
         <div class="work-container NFT">
            <a href="https://www.behance.net/gallery/143565927/Helping-hand-Case-Study" target="_blank">
            <img src="../assets/images/Nft.svg" />
            <div class="work-container--desc project-desc-text">
                <h1>NFT UI Relume Challenge</h1>
                <img src="../assets/images/linkArrow.svg" />
            </div>
        </a>
         </div>
        
           

            </div>  

           

            <button class="button" @click="navigateToWorks">
                View All
            </button>


            


        </div>
   
    </section>
</template>


<style scoped lang="scss">
@import '../assets/scss/abstract/mixins';

.selectedWorks{
    height: auto;
    padding: 2rem 11.8rem;
    color:#f8f8f8;
    min-height: 100vh;
    
    box-sizing: border-box;

    @media screen and (max-width:485px) {
        padding: 0 5rem;
  }

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

        

        @media screen and (max-width:485px) {
            display: flex;
            flex-direction: column;  
            justify-content: flex-start;
}
       
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


        @media screen and (max-width:485px) {
            font-size: 3rem;
        }
       

        
    }

    @media screen and (max-width:485px) {
width: 100%;
height: 50rem;
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
        cursor: pointer;
        @include magic-border(2px, #F89623, 0.3s, 0);


        &:hover{
            border:none;
            color:#F89623
        }
        // @include magic-border(2px, blue, 0.3s, 0);

        @media screen and (max-width:485px) {
            position: relative;
    top:100rem;
    width: 25rem;
    padding: 2rem 2rem;
    font-size: 3.25rem;
  }

}

a{
    width: auto;
    height: auto;
    color:white
}

.helping{
    margin-top: 3rem;
}
</style>