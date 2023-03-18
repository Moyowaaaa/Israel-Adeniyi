<template>
    <div class="navbar">
        <div class="navbar--container">
            <div class="navbar--container__linkscontainer nav">
                <router-link to="/">
                    <div class="link">
                   ADENIYI
                </div>
                </router-link>
                

                <div class="navbar--container__sublinkscontainer  menulinks">
                    <div class="link" @click="navigateToWorks">WORKS</div>
                    <div class="link" @click="navigateToAbout">ABOUT</div>


    <a href="https://drive.google.com/file/d/1qaEKj067bS9Sfx66SyHU7bXM6z2O1TzE/view" target="_blank">
<div class="link">RESUME</div>
</a>

                </div>
                <button class="navbar--button" @click="navigateToFooter">
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

        <div class="fullScreenNav" >
           
            <div class="fullScreenNav--logocontainer" @click="navigateToHome" id="logo">
                <h1 class="nav-menu-logo">ADENIYI</h1>
                
            </div>
       

            <div class="fullScreenNav--container">

                <div class="fullScreenNav--container__subContainer">
                    <div class="fullscreen-links-container menu-link" >
                        <div class="nav-menu-link link1 " id="link1" @mouseenter="" @mouseleave="" data-splitting >
            WORKS
        </div>
       
        

        <div class="nav-menu-link link2" >
            ABOUT
        </div>

        <!-- <a href="https://drive.google.com/file/d/1qaEKj067bS9Sfx66SyHU7bXM6z2O1TzE/view" target="_blank"> -->
            <div class="nav-menu-link link3">
            RESUME
        </div>

        <!-- </a> -->
        <div class="fullscreenButton " @click="navigateToContactme">Get in touch</div>

                    </div>

                    

                    <div class="fullscreen-social-container contacts">

<a href="mailto:adeniyioba2000@gmail.com" >
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

        <div class="transition-out">
          
        </div>
        

       
    </div>
    
</template>

<script setup lang="ts">
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { onMounted,onUnmounted,ref,watchEffect } from 'vue';
import { useRouter } from 'vue-router';




const router = useRouter()


const navigateToHome = async() => {
    await menuTl.reverse()
    await router.push('/')
    // console.log('hola')
    document.querySelector('#titleSection')?.scrollIntoView()
}

const navigateToFooter = () => {
    document.querySelector('#footer')?.scrollIntoView({
            behavior: 'smooth'
       });
}



const navigateToWorks = async() => {
   await router.push('/works')
  if (window.scrollY > 0) {
   window.scrollTo(0,0)
   }

}

const navigateToAbout = async() => {
    await router.push('/')
   await document.querySelector('#heroSection')?.scrollIntoView({
            behavior: 'smooth'
       });
}



let navigateToContactme =  async() => {
 await menuTl.reverse()
 await menuBodyTl.reverse()
 await document.querySelector('#footer')?.scrollIntoView({
            behavior: 'smooth'
       });
}
const where = ref<string | null>('where')


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

   navTl.to('#navi',{
    y:-20,
    opacity:1,
    ease:"power3.inOut",
    duration:1.2,
    display:"flex"
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


menuBodyTl.to('.fullScreenNav', {
    duration:0.2,
	display: "flex",
	ease: 'Expo.easeInOut',
 
})
.from(['.links','.link1','.link2','.link3','.fullscreenButton'], {
    opacity:0,
    duration:1.2,
    stagger: 0.2,   
    y:200,
    ease:"power3.inOut"
}, "<0.1")
.fromTo('.nav-menu-logo',  {y: 0, opacity: 0, }, { opacity:1,duration:0.8, clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)"}, "<0.1")
menuBodyTl.from('.contacts',{opacity:0,duration:.8,ease:"power3.inOut"})

menuBodyTl.reverse()

})

const openMenu = () => {
    menuTl.reversed(!menuTl.reversed())
    menuBodyTl.reversed(!menuBodyTl.reversed())
}

onMounted(() => {
    const navLinks = [...document.querySelectorAll('.nav-menu-link')]

    navLinks.forEach((navlink) => {
        console.log(navlink.innerHTML)

        const navigate = () => {

            gsap.to('.transition-out', {
        duration:1,
        display:"flex",
        ease:"power3.inOut",
        delay:2.2,
        y:"-100%"
    })
    router.push('/works')
        }

   

        navlink.addEventListener('click', () => {
            where.value = navlink.innerHTML
            console.log(where.value)
            navigate()
        })


    })


  

})











</script>

<style scoped lang="scss">
@import '../assets/scss/abstract/mixins';
.navbar{
    width: 100%;
   
    height: auto;
    color:white;
    



    &--container{
        
        width: 100%;
        padding: 2rem 11.8rem;
        box-sizing: border-box;
        cursor: pointer;

        &__linkscontainer{
            justify-content: space-between;
            display:flex;
            align-items: center;
          
            
            width: 100%;
        }

        &__sublinkscontainer{
            display: flex;
            align-items: center;
            gap:4rem
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
        cursor:pointer;

        &:hover{
            border: 2px solid #F89623 ;
            color: #F89623
        }
    }

   
}
.fullscreenButton{

    display:none
}

.transition-out{
    height: 100vh;
    width: 105%;
    position: fixed;
    top:0;
    z-index:90;
    display: none;
    color: white;
    font-size:7rem
}

a{
    color:white
}
.hamburger path{
    fill: none;
    stroke: white;
    stroke-linecap: round;
}
.hamburger-container {
    position: fixed;
    right: 5rem;
    top:2rem;
    z-index: 35;
}

.fullScreenNav{
    position: fixed;
    height: 100vh;
    width: 100%;
    top:0;
    z-index: 30;
    background-color: black;
    padding-left:5rem;
    display: none;
    cursor: pointer;


   

   

    &--container{
        position: absolute;
        height:100vh;
        width:100%;
        top:0;
        left:0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        &__subContainer{
            width:60rem;
           
            height:auto;
            display:flex;
            // justify-content: space-between;
            gap:15rem;
            align-items: center;
            align-items: end;
        }
    }
}

.fullscreen-links-container{
    display: flex;
  
    flex-direction: column;

    width:30rem;
    gap:-2rem
}
.fullscreen-social-container{
    display: flex;
    gap:0.8rem;
    flex-direction: column;
    height: 100%;
   
    margin-bottom: 1.2rem;
   
}

.social {
    font-size: 1rem;
    
}

.social{
    font-size:2rem;
    font-family: 'neutra';
}

.menu-link{
    
  

    font-family: "thunder-mediuml";
}

.nav-menu-link {
font-size:7rem;

}

.contacts{

    height: max-content;
    display: flex;
    flex-direction: column;

}

#navi {
position: fixed;
right:4rem;
top:2rem;
opacity:0;
z-index:50;
cursor: pointer;
display: none;

}

#logo {
    z-index: 60;
}




@media screen and (max-width:485px) {
        .navbar{
            
    &--container{
        padding:4rem;

            &__sublinkscontainer{
                display: none;
            }

        }
        &--button{
            display: none;
        }
        }
        .nav{
            font-size: 8rem;
        }
        .nav-menu-logo{
    font-size: 5rem;;
}
.fullscreen-social-container{
        display:none
    }
    .fullscreen-links-container{
        width:70%;
        gap:2.5rem;
        margin:0 auto;
    }

    .fullscreenButton{
        border-radius: 2rem;
    display:flex;
    font-size:5rem;
    justify-content: center;
    align-items: center;
    margin-top:20rem;
    border:2px solid white;
    padding:3rem 2rem;
    font-family:neutra
    }
    
    }

   


</style>