<template>
    <div>
<NavbarVue />
 
    <section class="titleSection" id="titleSection">
        <div class="titleSection--mainContainer">
            <div class="titleSection--mainContainer__titlecontainer">
                <h1 class="main-header header">USER EXPERIENCE</h1>
                <h1 class="main-header sub-header">designer based</h1>
                <h1  class="main-header sub-header"> in Lagos</h1>
            </div>

            <div class="titleSection--mainContainer__imagecontainer">
                <img src="../assets/images/circularText.svg" class="circular"/>

               
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


    &--mainContainer{
        
        width:100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        &__titlecontainer{
        width: 70%;
      
    }

    &__imagecontainer{
        width: 30%;
        height: 100%;
      
        display: flex;
        align-items: center;
        justify-content: end;
        object-fit: contain;
     
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

.circular-container{
    position: relative;
    
   width:100%
}


text {

fill: white;
font-family: "Lato", sans-serif;
font-size: 16px;
font-weight: 500;
text-transform: uppercase;
font-variant-ligatures: none;
letter-spacing: 6px;
animation: rotate 25s linear infinite;
transform-origin: 250px 250px;
}

svg{
//   position: absolute;
  top:60px;
  right:25vh;
  width:40vh;
max-width: 70vmin;
}

@keyframes rotate {
to {
  transform: rotate(360deg);
}
}

.textcircle {
transition: transform 1s cubic-bezier(0.65, 0, 0.35, 1);
transform-origin: 250px 250px;
} 



.finger {
    width: 100%;
    margin-right:-21rem;
    display:flex;
    justify-content: center;
}

.finger-image{
    width: 3rem;
}






</style>