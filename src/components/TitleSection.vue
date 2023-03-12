<template>
    <div>
<!-- <NavbarVue /> -->
 
    <section class="titleSection" id="titleSection">
        <div class="titleSection--mainContainer">
            <div class="titleSection--mainContainer__titlecontainer" id="titleContainer">
                <h1 class="main-header header content__title" data-splitting data-effect-5>USER EXPERIENCE</h1>
                <h1 class="main-header sub-header">designer based</h1>
                <h1  class="main-header sub-header"> in Lagos</h1>
            </div>

            <div class="titleSection--mainContainer__imagecontainer">
                <div class="explore-container">
                    <img src="../assets/images/explore.svg"/>
                </div>
               
                <div class="finger-container">
                    <img src="../assets/images/finger.svg"/>
                </div>
                 

               
        <!-- <div class="finger">
            <img src="../assets/images/finger.svg" class="finger-image"/>
        </div>
        <div class="circular-container">
            <div class="circular">
            <svg xmlns="http://www.w3.org/2000/svg" xml:lang="en" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 500">
    <defs>
        <path id="textcircle" d="M250,400
               a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z" transform="rotate(12,250,250)" />
    </defs>
    <g class="textcircle">
        <text textLength="940">
            <textPath 
                xlink:href="#textcircle" 
                aria-label="CSS & SVG are awesome" 
                textLength="940">
                   HOLD TO EXPLORE  HOLD TO EXPLORE      
            </textPath>
        </text>
    </g>
</svg>
        </div>
        </div> -->
      
        
            </div> 
        </div>
    </section>

    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import NavbarVue from './Navbar.vue';
import gsap from 'gsap';
import Splitting from 'splitting';

onMounted(() => {
    Splitting()
    
    const fx19Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect19]')];

    const tl = gsap.timeline()
    tl.fromTo('#titleContainer',{ opacity:0 },
      { y: 0, duration:1.2, opacity: 1, clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)" })

})



</script>

<style scoped lang="scss">
.titleSection{
    max-width: 100rem;
    
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin:0 auto;
    padding: 0 11.8rem;
    // font-size: calc(100vw / 1368 * 10);


    &--mainContainer{
        
        width:100%;
        display: flex;
        justify-content: space-between;
        align-items:flex-start;

        &__titlecontainer{
        width: 70%;
      
    }

    &__imagecontainer{
       width: 30%;
       height: 100%;
       display: flex;
       flex-direction: column;
      position: absolute;
      right:1rem;
      top:10rem;
      
       padding-top: 5rem;
     
    }
    }
   
}

.titleSection--mainContainer__imagecontainer img{
   height: 50%;
}

.header{
    color:#F89623;

}
.sub-header{
    color:#F8F8F8;
    width: 40rem;
    line-height: -2rem;
}


.explore-container{
    width: 100%;
    
    padding:1.5rem ;
    display: flex;
    justify-content: center;

    img{
        height: 95%;
      
        width: 12rem;
        margin: 0 auto;
        animation: rotate 15s linear infinite;
        animation-direction: reverse;
    }
}

.finger-container{

    display: flex;
    justify-content: center;
    top: 10%;
  left: 50%;
  transform: translate(5%, -250%);
  

    img{
        height: 80%;
        width: 2.5rem;
    }
}

@keyframes rotate {
  to {
    transform: rotate(360deg);
    
  }
}



</style>