<!-----Navbar --------------- >


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
                    clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)"
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



const navigateToHome = async () => {
    await menuTl.reverse()
    await menuBodyTl.reverse()
    setTimeout(async() => {
        await router.push('/')
    })
  
}

const navigateToWorks  = () => {
    menuTl.reverse()
    menuBodyTl.reverse()
    setTimeout(async() => {
       await router.push('/works')
           await window.scrollTo({ top: 0, behavior: 'smooth' });
            console.log('lal')

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
         
            <div class="fullscreenNav__logo nav-menu-logo" @click="navigateToHome">
            ADENIYI
        </div>
             

  


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




<!------ home --->

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

            <div class="titleSection--mainContainer__imagecontainer"  >

                <div class="hover-container" @mouseenter="holdToExplore" @mouseleave="removeHoldToExplore">
                    <div class="explore-container" >
                    <img src="../assets/images/explore.svg" />
                </div>
               
                <div class="finger-container">
                    <img src="../assets/images/finger.svg" />
                </div>
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
const hoverTl = gsap.timeline()


const holdToExplore = () => {
   
    gsap.set('.titleSection', {
        duration:1.2,
        ease:"power3.inOut",
        background:"red"
    })
}

const removeHoldToExplore = () => {
    gsap.set('.titleSection', {
        duration:1.2,
        ease:"power3.inOut",
        background:"transparent"
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


<!-- ------------- hero section ---- -->


<template>
    <section class="heroSection" id="heroSection">
      <div class="sub">
        <div class="heroSection--contentcontainer">
          <div class="title-container">
            <h1 class="section-title title" data-splitting data-effect1>
              About Me.
            </h1>
          </div>

          
  
          <div class="hero-container">
            <p class="section-text-normal hero-text" data-splitting data-effect2>
              I am a User experience designer driven by passion in creating
              digital experiences that are both aesthetically pleasing and
              intuitive to use. I have a deep understanding of design principles
              and techniques, and I stay up-to-date with the latest design trends
              and technologies. With a strong background in user research and
              testing, I focus on designing interfaces that meet the needs and
              expectations of users.
            </p>
            <p class="section-text-bold resume">View Resume</p>
          </div>
        </div>
      </div>
  
  
     
  
      
    </section>
  </template>
  
  <script setup lang="ts">
  import Splitting from "splitting";
  import { onMounted,ref } from "vue";
  import MarqueeVue from "./Marquee.vue";
  import gsap from "gsap";
  import ScrollTrigger from "gsap/ScrollTrigger";
  gsap.registerPlugin(ScrollTrigger)
  
  const marqueeDirection = ref(1);
  
  
  onMounted(() => {
    const marquee:any = document.querySelector('.marquee');
  
    Splitting();
  
    console.log(Splitting);
  
    const heroText = [
      ...document.querySelectorAll(".hero-text[data-splitting][data-effect2]"),
    ];
  
  
    heroText.forEach((text) => {
      gsap.fromTo(
        text.querySelectorAll(".word"),
        {
          "will-change": "opacity",
          opacity: 0.2,
        },
        {
          ease: "none",
          opacity: 1,
          stagger: 0.05,
          scrollTrigger: {
            trigger: text,
            start: "top bottom-=20%",
            end: "center top+=20%",
            scrub: true,
          },
        }
      );
    });
  
  
  //   gsap.to(".marquee p", {
  //   x: "-100%",
  //   duration: 10,
  //   ease: "linear",
  //   repeat: -1,
  //   modifiers: {
  //     x: gsap.utils.unitize((_, index) => `${marqueeDirection.value * 100 * index}%`),
  //   },
  // });
  
  // ScrollTrigger.create({
  //   trigger: ".marquee",
  //   start: "top top",
  //   end: "bottom bottom",
  //   onEnter: () => {
  //     marqueeDirection.value = 1;
  //   },
  //   onLeaveBack: () => {
  //     marqueeDirection.value = -1;
  //   },
  // });
  
  
  });
  </script>
  
  <style lang="scss" scoped>
  .heroSection {
    max-width: 100rem;
    overflow-x: hidden;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    //  padding: 0 11.8rem;
  
    &--contentcontainer {
      width: 100%;
      // border:2px solid;
      display: flex;
      justify-content: space-between;
    }
  }
  
  .title-container,
  .hero-container {
    width: 41.666667%;
    color: #f8f8f8;
  }
  
  .resume {
    color: #f89623;
  }
  
  .sub {
    max-width: 100%;
  
    padding: 0 11.8rem;
  }
  
  .Marquee-container {
    width: 100%;
  
    position: relative;
    top: 6rem;
  }
  
  .marquee {
    white-space: nowrap;
    overflow: hidden;
    animation: marquee 40s linear infinite;
    color:white
  }
  
  .marquee p {
    display: inline-block;
    padding-left: 100%;
    animation: marquee-text 40s linear infinite;
  }
  
  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  
  @keyframes marquee-text {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  
  </style>
  


  <!-- ---------selected ----- -->


  
<script setup lang="ts">
    import gsap from 'gsap';
    import ScrollTrigger  from 'gsap';
    import Splitting from 'splitting';
    import { onMounted } from 'vue';
    gsap.registerPlugin(ScrollTrigger)
    
    
    
    onMounted(() => {
    
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
    
    a{
        width: auto;
        height: auto;
        color:white
    }
    
    .NFT{
        margin-top: 3rem;
    }
    </style>



    // ------ FOOTER 

    <template>
    <section class="footerSection">
        <div class="footerSection--topcontainer">
            <div class="footerSection--topcontainer__sub-container" id="subContainer">
            <h1 class="footer-alt alte">Get in touch</h1>
            <img src="../assets/images/inTouch.svg"/>
            </div>  
        </div>

        <div class="footerSection--bottomcontainer">
          <div class="linkcontainer">
            <div class="linkcontainer--container footer-text">


                <a href="https://twitter.com/Adeniyi_nFt?s=09" target="_blank">
                <div class="link">
                    <p>Twitter </p> 
                    <img src="../assets/images/linkArrow.svg" />
                </div>
            </a>

            <a href="https://www.linkedin.com/in/israel-adeniyi-a11b56220" target="_blank">
                <div class="link">
                    <p>Linkedin </p> 
                    <img src="../assets/images/linkArrow.svg" />
                </div>
                </a>
              
            </div>

            <div class="linkcontainer--container footer-text">

                <a href="https://www.behance.net/israeladeniyi8"  target="_blank">
                <div class="link">
                    <p>Behance </p> 
                    <img src="../assets/images/linkArrow.svg" />
                </div>
                </a>


                <!-- <div class="mail">
                    <p>Email address: </p> 
                    <p class="mail--link">adeniyioba2000@gmail.com</p>
        
                </div> -->
              
            </div>


            <div class="linkcontainer--container footer-text">
                <div class="link">
                    <p>Oba</p>
                    <div class="sphere"></div> 
                  <p class="footer-text-smaller">Design and UI</p>
                </div>


                <div class="link">
                    <a href="https://github.com/Moyowaaaa"  target="_blank">
                    <p class="link">Moyowa </p>
                    </a>     
                    <div class="sphere"></div>
                    <p class="footer-text-smaller">Development</p>
                </div>
              
            </div>

            <!-- <div class="linkcontainer--container">
                <div class="link">
                    <p>Behance </p> 
                    <img src="../assets/images/linkArrow.svg" />
                </div>


                <div class="link">
                    <p>Email Address:</p> 
                    <br/>
                    adeniyioba2000@gmail.com
                </div>
              
            </div> -->


          </div>
            <div class="footerSection--bottomcontainer__copyright footer-text-normal">
                &copy; <span>{{ currentYear }}</span>. All right reserved
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref,onMounted } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap';
gsap.registerPlugin(ScrollTrigger)

let currentYear = ref<number | null>()


onMounted(() => {
    const date = new Date();
   currentYear.value = date.getFullYear()

   const tl = gsap.timeline({
    scrollTrigger:{
        trigger:'#subContainer',
        start: 'top center',
            end:'top +=150',

        scrub:true
    }
   })

   tl.fromTo('#subContainer', {opacity:0},{ y: 0, opacity: 1,duration:2, clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)" }, "<0.1");
})
</script>

<style scoped lang="scss">
.footerSection{
    height: auto; 
    display: flex;
    flex-direction: column;
    // box-sizing: border-box;
    padding-top:5rem;
    padding-bottom: 2rem;
    color: white;
    // font-size: calc(100vw / 1368 * 10);
    max-width: 100rem;
    margin:0 auto;
    

    &--topcontainer{
        height: 25rem;
        width: 100%;
        
        background-color: black;
        z-index: 10;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        &__sub-container{
            width: 100%;
  
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }

    &--bottomcontainer{
        height: 18rem;
        box-sizing: border-box;
        padding: 0 7rem;
        padding-top: 5rem;;
        display:flex;
        flex-direction: column;
        justify-content: space-between;

        &__copyright{
            align-self: center;
        }
    }


}

.alte{
    font-style: italic;
    text-decoration: underline;
}
.linkcontainer{
    display: flex;

    justify-content: space-between;

    &--container{
        display:  flex;
        gap:0.5rem;
        flex-direction: column;
    }
}
.link{
    display: flex;
    gap:0.5rem;
    align-items: center;
}

.sphere{
    height: 0.2rem;
    width: 0.2rem;
    background-color: white;
}
.mail{
    display: flex;
    flex-direction: column;

    &--link{
        color: rgba(248, 248, 248, 0.7);

    }
}

a{
        color:#f8f8f8; 
        // text-
    }



</style>



 
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

// let imageContainer = document.querySelectorAll('.work-container')
// const image = document.querySelectorAll('.work-container img')

// const tl = gsap.timeline({
//     scrollTrigger:{
//         trigger:imageContainer,
//         toggleActions: "restart none none reset"
//     }
// })
// tl.set(imageContainer, {autoAlpha: 1});

//     tl.from(imageContainer, {
//         xPercent: -100,
//         duration:1.5,
//         ease: "Power3.inOut"
//     })
//     .from(image, {
//         xPercent: 100,
//         scale: 1.3,
//         delay: -1.5,
//         ease: "Power2.out",
//         duration:1.5
//     })

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
            <!-- <a href="https://www.behance.net/gallery/143565927/Helping-hand-Case-Study" target="_blank"> -->
            <div>
                <img src="../assets/images/helpingHand.svg" />
                <div class="view">
                    View
                </div>
                </div>  
            <!-- <div class="work-container--desc project-desc-text">
                <h1>Helping hand Case study</h1>
                <img src="../assets/images/linkArrow.svg" />
            </div> -->
        <!-- </a> -->
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
        padding: 0 6rem;
        min-height: 100rem;
        max-height: 100vh;
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
        flex-direction: column;
}
       
      }
      
   
    }

    

}

.work-container{
    height:122rem;
    width: 50%;;
    // visibility: hidden;
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
            width:30px;
            transform-origin: left;
        }


        @media screen and (max-width:485px) {
            font-size: 3rem;
        }
       

        
    }

    @media screen and (max-width:485px) {
width: 100%;
height: 100rem;
// border: 2px solid red;
    }

}

.view{
    position:absolute;
    
    
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
        @include magic-border(2px, #F89623, 0.15s, 0);


        &:hover{
            border:none;
            color:#F89623
        }
        // @include magic-border(2px, blue, 0.3s, 0);

        @media screen and (max-width:485px) {
            position: relative;
    // top:125rem;
    display: none;
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


.phone-works-container{

    display: none;
}



@media screen and (max-width:485px) {
    .phone-works-container{
        width: 100%;;
        display: flex;
        flex-wrap: wrap;
        height:90rem;
        margin:0 auto;
        
        overflow-x: auto;
       
    }

    .phone-work{
        height:90%;
        width: 100rem !important;
    
    }
   
    
   
}


</style>