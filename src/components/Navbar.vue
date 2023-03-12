<script setup lang="ts">
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { onMounted,onUnmounted,ref,watchEffect } from 'vue';
import { useRouter } from 'vue-router';

gsap.registerPlugin(ScrollTrigger)





// const wrapElements = (elems:any, wrapType:any, wrapClass:any) => {
//     elems.forEach((char:any) => {
//         const wrapEl = document.createElement(wrapType);
//         wrapEl.classList = wrapClass;
//         char.parentNode.appendChild(wrapEl);
//         wrapEl.appendChild(char);
//     });
// }

const router = useRouter()

let menuOpen = ref<boolean>(false)
var menuTl = gsap.timeline()
var menuBodyTl = gsap.timeline({paused:true})


onMounted(() => {
 

    var navbarTrigger = document.querySelector('.layout__child')

  
  

let navTl = gsap.timeline({
    scrollTrigger:{
        trigger:navbarTrigger,
        start: '350px center',
    end: () => window.innerHeight/45 + 'top',
        scrub:0.1
    }
   })


    Splitting();


navTl.to('#navi',{
    y:-20,
    opacity:1,
    ease:"power3.inOut",
    duration:1.2
})


menuTl.to('.bar-1', {
        duration:0.5,
        attr:{d: "M8,2 L2,8"},
	x:1,
	ease: "power3.inOut"
    }, 'start')

    menuTl.to('.bar-2',{
	autoAlpha: 0,
    duration:0.5
}, 'start')
.to('.bar-3',{
	attr:{d: "M8,8 L2,2"},
    duration:0.5,
	x:1,
	ease: "power3.inOut"
}, 'start')

menuTl.reverse()


menuBodyTl.to('.fullscreenNav', {
    duration:0.2,
	display: "flex",
	ease: 'Expo.easeInOut',
 
})
.from(['.links','.link1','.link2','.link3'], {
    opacity:0,
    duration:1.2,
    stagger: 0.2,   
    y:200,
    ease:"power3.inOut"
}, "<0.1")
.fromTo('.nav-menu-logo',  {y: 0, opacity: 0, }, { opacity:1,duration:0.8, clipPath: "polygon(0 100%, 100% 20%, 80% 0, 0 0)"}, "<0.1")
.from('.contacts',{opacity:0,duration:.8,ease:"power3.inOut"}, "<0.5")



menuBodyTl.reverse()



})


const openMenu = () => {
    menuTl.reversed(!menuTl.reversed())
    menuBodyTl.reversed(!menuBodyTl.reversed())
}

const handleScroll = () => {
    if (window.scrollY < 2) {
      
        menuTl.reverse()
        menuBodyTl.reverse()
        
    }

}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
})

const onMouseEnter = ():void => {
    const hoverStart = gsap.timeline()

    hoverStart.set('#link1', {
        duration: 0.6,
					color: "teal",
					ease: "power2.out",
    })
}

const onMouseLeave = ():void => {
    const hoverEnd = gsap.timeline()
    hoverEnd.to('#link1', {
        duration: 0.35,
        color:'white',
        opacity:1,
					ease: "power2.in",
    })
}


onMounted(() => {
    Splitting()
    const testTexts = [...document.querySelectorAll('.link1[data-splitting]')]
    console.log(testTexts)
})


const navigateToWorks  = () => {
    menuTl.reverse()
    menuBodyTl.reverse()
    setTimeout(() => {
        router.push('/works')
        
        if(window.scrollY >  10) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            console.log('lal')
        }
    },2000)
}




const navigateToAbout = () => {
    menuTl.reverse()
    menuBodyTl.reverse()
    setTimeout(() => {
        router.push('/')
    document.querySelector('#heroSection')?.scrollIntoView({
            behavior: 'smooth'
       });
    },2000)
}



</script>

<template>
    <div>
        <div class="navbar">
        <div class="navbar--container nav">
            <a href="/">
                <div class="link">
                   ADENIYI
                </div>
            </a>
            
            


<div class="navbar--container__links">
    
    <div class="link" @click="navigateToWorks">WORKS</div>


    <div class="link">ABOUT</div>


    <div class="link">RESUME</div>
</div>

<button class="navbar--button">
    get in touch
</button>
        </div>

        <div id="navi" class="" @click="openMenu">
        <svg viewBox="0 0 12 10" class="hamburger" height="40px" width="40px">
            <path d="M10,2 L2,2" class="bar-1"></path>
            <path d="M2,5 L10,5" class="bar-2"></path>
            <path d="M10,8 L2,8" class="bar-3"></path>

        </svg>
        </div> 

   
    </div>

    <div class="fullscreenNav">

        
        <div class="fullscreenNav-container">
            <router-link to="/">
            <div class="fullscreenNav__logo nav-menu-logo" >
            ADENIYI
        </div>
            </router-link>    

  


        <div class="fullscreenNav-container__subcontainer">
            <div class="fullscreenNav-container__subcontainer__links links">
                <!-- <router-link to="/works"> -->
                    <div class="nav-menu-link link1 " id="link1" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" data-splitting  @click="navigateToWorks">
                    WORKS
                </div>
                <!-- </router-link> -->
                

                <div class="nav-menu-link link2" @click="navigateToAbout">
                    ABOUT
                </div>

                <div class="nav-menu-link link3">
                    RESUME
                </div>

                </div>

                <div class="fullscreenNav-container__subcontainer__contacts contacts">

                    <a href="mailto:adeniyioba2000@gmail.com" target="_blank">
                        <h1 class="nav social">adeniyioba2000@gmail.com</h1>
                    </a>
                 

                   <a href="https://twitter.com/Adeniyi_nFt?s=09" target="_blank">
                    <h1 class="nav social">TWITTER</h1>
                   </a>
           

            <a href="https://www.linkedin.com/in/israel-adeniyi-a11b56220" target="_blank">
                <h1 class="nav social">LINKEDIN</h1>
            </a>
         

            <a href="https://www.behance.net/israeladeniyi8"  target="_blank">
                <h1 class="nav social">BEHANCE</h1>
            </a>
  

                </div>

            </div>  


    
        </div>

       
    </div>

    </div>
   
</template>



<style scoped lang="scss">

.navbar{
    
    padding: 2rem 11.8rem 1rem;
    cursor: pointer;

    color:#f8f8f8;
   z-index: 30;

 
  

    &--container {
        width: 100%;
      
        display: flex;
        align-items: center;
        justify-content: space-between;

        &__links{
        gap:4rem;
        display:flex;
        
    }
    
    }

    &--button{
        width: auto;
        padding: 1rem 2rem;
        border:2px solid white;
        color:white;
        background-color: transparent;
        font-size: 1.25rem;
        font-family: 'thunder-mediuml';
    }

    

 
}

.link{
    display: inline-block;
    background-image: linear-gradient( #F89623,#F89623);
    background-position: right -100% bottom 0;
    background-size: 200% 2px;
    background-repeat: no-repeat;
    transition:
    background-size 0.3s,
    background-position 0s 0.3s ;
    width: auto;

 
  }

.link:hover{
    background-position: 100% 100%; 
    background-size: 100% 2px;
  
    }

  .hamburger path{
    fill: none;
    stroke: white;
    stroke-linecap: round;
   
}

#navi {
position: fixed;
right:4rem;
top:2rem;
opacity:0;
z-index:50;
cursor: pointer;

}

.fullscreenNav{
    height: 100vh;
    width: 100%;
    position: fixed;
    overflow: hidden;
    top:0;
    background-color: #000000;
    display: none;
    color:white;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 30;

    &__logo{}

}

.fullscreenNav-container{
    width: 100%;
    margin:auto;
    height: 100%;  
    display: flex;
    padding: 3rem 5rem;
 
    justify-content: center;
    flex-direction: column;
    

    &__subcontainer{
     
        width: 70%;
        margin: 0 auto;
        padding: 8rem 0;
        display: flex;
        cursor: pointer;
     
    }
    &__subcontainer__links{
        width:60%;
        display: flex;
        flex-direction: column;
        gap: 1.5rem ;
        cursor: pointer;
    }

    &__subcontainer__contacts{
        display: flex;
        flex-direction: column;
        gap:0.2rem;
        padding: 2rem 3rem;
        justify-content: flex-start;
    }

    &__contact{
        width: 10rem;
        border: 2px solid red;
    }

    

}
.fullscreenNav__logo {}

.social{
    text-decoration: underline;
}

a{
        color:#f8f8f8; 
    }





</style>