
<template>
    <div>
 
    <section class="titleSection" id="titleSection">

        <div class="slide-container">
        <div class="slide slide1"></div>
        <div class="slide slide2"></div>
        <div class="slide slide3"></div>
        <div class="slide slide4"></div>
        <div class="slide slide5"></div>
        <div class="slide slide6"></div>
        <div class="slide slide7"></div>
        <div class="slide slide8"></div>
        <div class="slide slide9"></div>
        <div class="slide slide10"></div>
        <div class="slide slide11"></div>
        <div class="slide slide12"></div>
        <div class="slide slide13"></div>
        <div class="slide slide14"></div>
        <div class="slide slide15"></div>
        <div class="slide slide16"></div>


        </div>
        
        
        <div class="titleSection--mainContainer">
            
            <div class="titleSection--mainContainer__titlecontainer" id="titleContainer">
                <h1 class="main-header header content__title" data-splitting data-effect-5 id="mainTitle" data-animation="header">USER EXPERIENCE</h1>
               <div class="header-sub-container">
                <h1 class="main-header sub-header">designer based</h1>
                <h1  class="main-header sub-header"> in Lagos</h1>
               </div>
               
            </div>

            <div class="titleSection--mainContainer__imagecontainer"  >

                <div class="hover-container" @mouseenter="holdToExplore" @mouseleave="removeHoldToExplore">
                    <div class="explore-container" >
                    <img src="../assets/images/explore.svg" />
                </div>
               
                <div class="finger-container">
                    <img src="../assets/images/finger.svg" />
                </div>
                </div>
 
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
import exploreGif from '../assets/images/educationn.png'
import SplitType from 'split-type'



const hoverTl = gsap.timeline()

// gsap.to(myText.char)

const holdToExplore = () => {

    gsap.set('.slide', {
        animationPlayState:"running"
    })
   
    gsap.set('.slide-container', {
        opacity:1,
        duration:0.4
       
    })
    gsap.to('#titleContainer', {
        duration:1,
        opacity:0,
        ease:"power3.inOut"
    })

    gsap.to(['.menulinks','.navbar--button'], {
        duration:1,
        opacity:0,
        ease:"power3.inOut"
    })

}

const removeHoldToExplore = () => {
    gsap.set('.slide', {
        animationPlayState:"paused"
    })
   
    gsap.set('.slide-container', {
        opacity:0
    })
    gsap.set('.navbar--container ', {
        display:"flex"
    })
    // gsap.set('#titleContainer', {
    //     display:"block"
    // })
    gsap.to('#titleContainer', {
        duration:1,
        opacity:1,
        ease:"power3.inOut"
    })
    gsap.to(['.menulinks','.navbar--button'], {
        duration:1,
        opacity:1,
        ease:"power3.inOut"
    })
}











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
        position: absolute;
        left:11.5rem;
        top:10rem;

        @media screen and (max-width:485px) {
            width: 100%;
           
            position: relative;
            left:0;
            top:0
        }

       
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
       cursor: pointer;
       

     
    }
    }

    @media screen and (max-width:485px) {
        padding: 0 4rem;
        max-height: 100vh;
       
    
     
}
   
}

.titleSection--mainContainer__imagecontainer img{
   height: 50%;
  
}

.header{
    color:#F89623;
    font-size: 8rem;
    font-family: "thunder-boldl";
    
    // @include typography(null, 8rem,2rem,'thunder-boldl')

}
.sub-header{
    color:#F8F8F8;
    width: 40rem;
    font-family: "thunder-boldl";

    font-size: 8rem;
    line-height: 2rem;
}

.header-sub-container{
    margin-top:-5rem;
}


@media screen and (max-width:485px) {
    
    .header{
        font-size: 16.5rem;
        width: 50rem;
   
        font-family: "thunder-boldl";
    }
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
.hover-container{
    &:hover{
            transform: scale(1.2);
            transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
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


.slide-container{
    // display: none;
    z-index: -200;

    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    // background:transparent;
    opacity: 0;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

}

body{
    overflow:hidden
}




.slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation: singleAnimations 1.9s ease-in-out;
    animation-iteration-count: infinite;
    // animation-play-state: paused
    background-size:cover;
    background-repeat:no-repeat;
    background-position:center

}


.slide1{
    background-image: url('../assets/images/oba.png');
}
.slide2{
    background-image: url('../assets/images/nft.png');
    animation-delay: .2s;
}
.slide3{
    background-image: url('../assets/images/rebank.png');
    animation-delay: .3s;
}
.slide4{
    background-image: url('../assets/images/helping.png');
    animation-delay: .4s;
}
.slide5{
    background-image: url('../assets/images/oba.png');
    animation-delay: .5s;
}

.slide6{
    background-image: url('../assets/images/payment.png');
    animation-delay: .6s;
}
.slide7{
    background-image: url('../assets/images/pixel.png');
    animation-delay: .7s;
}
.slide8{
    background-image: url('../assets/images/nft.png');
    animation-delay: .8s;
}
.slide9{
    background-image: url('../assets/images/helping.png');
    animation-delay: .9s;
}
.slide10{
    background-image: url('../assets/images/oba.png');
    animation-delay: 1s;
}

.slide11{
    background-image: url('../assets/images/nft.png');
    animation-delay: 1.1s;

}
.slide12{
    background-image: url('../assets/images/pixel.png');
    animation-delay: 1.2s;
}
.slide13{
    background-image: url('../assets/images/payment.png');
    animation-delay: 1.3s;
}
.slide14{
    background-image: url('../assets/images/helping.png');
    animation-delay: 1.4s;
}
.slide15{
    background-image: url('../assets/images/oba.png');
    animation-delay: 1.5s;
}
.slide16{
    background-image: url('../assets/images/educationn.png');
    animation-delay: 1.6s;
}

@keyframes singleAnimations {
    0% {
    opacity: 1;
    transform: scale(1);
}

5% {
    opacity: 1;
    transform: scale(1.02);
}
6% {
    opacity: 0;
    transform: scale(1.02);
}
95% {
    opacity: 0;
    transform: scale(1);
}

}


@media screen and (max-width:485px) {

    .titleSection--mainContainer__imagecontainer{
        position: absolute;
        right:10rem;
        top:20rem
    }

    .explore-container img {
        width: 28rem;

    }
    
.finger-container img{
    width: 5rem;
}
}





</style>
