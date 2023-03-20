<template>
  <div class="">
  
    <div class="page-overlay section-title" v-if="loading">
    WORKS
   </div>


      <Main  id="workSection">
   

        <section class="workSection">
            <div class="workSection--container">
                <h1 class="section-title title content__title" >
           Works
          </h1>


          <div class="workSection--container__works-container" id="works-container">


            <div class="left-column">
                  <div class="work-container helping">
            <a href="https://www.behance.net/gallery/143565927/Helping-hand-Case-Study" target="_blank">
            <img src="../assets/images/helpingHand.svg" />
            <div class="work-container--desc project-desc-text">
                <h1>Helping hand Case study</h1>
                <img src="../assets/images/linkArrow.svg" />
            </div>
        </a>
         </div>
            </div>


            <div class="right-column">
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

       



            </div>



            </div>
        


          

        </section>
      </Main>
    </div>
</template>

<script setup lang="ts">
import NavbarVue from '@/components/Navbar.vue';
import Main from '@/layouts/Main.vue';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { onMounted,onUnmounted,ref,watchEffect } from 'vue';
gsap.registerPlugin(ScrollTrigger)



let loading = ref<boolean>(true)

watchEffect(() => {
    if(window.scrollY > 1) {
        window.scrollTo(0,0)
    }
})


onMounted(() => {
    window.scrollTo(0,0)
    const preloadTl = gsap.timeline() 
    preloadTl.from('.page-overlay', {
        duration:1.2,
        opacity:0,
        y:"100%",
        ease:"power3.inOut"
    })
    preloadTl.to('.page-overlay',{
        duration:1.2,
        ease:"power3.inOut",
        y:"-100%",
        opacity:0,
        display:"none"
    })

   
    preloadTl.from('#workSection', {
        // y:"100%",
        ease:"power3.inOut",
        delay:0.2,
        opacity:0,
        duration:1.2,
    },"<0.5")

    
    
    setTimeout(() => {
        loading.value = false
    },2400)

    gsap.to('.helping', {
    y:-50,
    duration:12,
    ease:"power3.inOut",
    
    scrollTrigger:{
        trigger:'.workSection',
        start: 'top +=500',
      end: 'bottom center',
      scrub: true,
      
   
    }
})

gsap.to('.NFT', {
    y:50,
    duration:1.2,
    ease:"power3.inOut",

    scrollTrigger:{
        trigger:'.workSection',
        start: 'top center',
      end: 'bottom center',
      scrub: true,
      
    }
})


})
</script>

<style scoped lang="scss">
.workSection{
    max-width: 100rem;
    
    height: 100vh;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    margin:0 auto;
    padding: 0 11.8rem;
    color:white !important;
   

    &--container{
  display: flex;
        flex-direction: column;
        gap:4rem;
        height: 100%;
      

    }

    
}

 #works-container{
        height: 5rem;

        display:flex;

        gap:3rem;
        justify-content: justify-between;

        
       
      }

.work-container{
    height:22rem;
    width: 100%;;
  
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


a{
    width: auto;
    height: auto;
    color:white
}

.page-overlay{
    height: 100vh;
    width: 100%;
    display: flex;
    background:black;
    align-items: center;
    justify-content: center;
    color: whitesmoke;
    position: absolute;
    top:0;
    overflow: hidden;
    z-index:100;
}

.left-column{
   
    width: 50%;
    height: auto;
   
}

.right-column{
   
    width: 50%;
    height: auto;
   

}

@media screen and (max-width:485px) {

    .workSection{
        flex-direction: column;
        padding: 0 5rem;
        min-height: 100vh;
        &--container{
            flex-direction: column;
        }
    }
    #works-container{
        
        flex-direction: column;
    }
    .left-column, .right-column{
        width: 100%; 
    }
    .work-container{
        height: 60rem;
        object-fit: none;

        img{
            object-fit: cover;
        }
    }

    .title{
        font-size: 10rem;
    }
}

</style>