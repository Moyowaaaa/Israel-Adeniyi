<template>
  <div class="">
  
    <div class="page-overlay section-title" id="overlayText" v-if="loading">
    WORKS
   </div>


      <Main  id="workSection">
   

        <section class="workSection">
            <div class="workSection--container">
                <h1 class="section-title title content__title" >
           Works
          </h1>

          <div class="works-showcase">


            <div class="works-showcase__left-column">

            <div class="works-showcase__left-column--work-container work-container" id="work">
                <div class="mask">
                    <img src="../assets/images/darkNoise.png" /> 
                </div>

                <div class="title" id="helpingHandTitle">
                    <h1>
                        Helping Hand
                    </h1>
                    <p>View</p>
                </div>
    
                <a href="https://www.behance.net/gallery/143565927/Helping-hand-Case-Study" target="_blank"></a>

                </div>


                <div class="works-showcase__left-column--work-container work-container" id="work">
                    <div class="mask">
                    <img src="../assets/images/darkNoise.png" /> 
                </div>

                <div class="title" id="helpingHandTitle">
                    <h1>
                        E-learning Platform
                    </h1>
                    <p>View</p>
                </div>

                <a href="https://www.behance.net/gallery/159529897/E-learning-Platform" target="_blank"></a>
         
                    
</div>


            </div>

            <div class="works-showcase__center-column">
                <div class="works-showcase__center-column--work-container work-container" id="work">
                    <div class="mask">
                    <img src="../assets/images/darkNoise.png" /> 
                </div>

                <div class="title" id="helpingHandTitle">
                    <h1>
                        Super Rare NFT
                    </h1>
                    <p>View</p>
                </div>

                <a href="https://www.behance.net/gallery/163889507/NFT-Landing-page" target="_blank"> </a>
         
                    
</div>


<div class="works-showcase__center-column--work-container work-container" id="work">
                    <div class="mask">
                    <img src="../assets/images/darkNoise.png" /> 
                </div>

                <div class="title" id="helpingHandTitle">
                    <h1>
                        Pixel Wears
                    </h1>
                    <p>View</p>
                </div>

                <a href="https://www.behance.net/gallery/152468943/Pixel-Wears" target="_blank"></a>
         
                    
</div>



            </div>

            <div class="works-showcase__right-column">
                
                <div class="works-showcase__right-column--work-container work-container" id="work">
                    <div class="mask">
                    <img src="../assets/images/darkNoise.png" /> 
                </div>

                <div class="title" id="helpingHandTitle">
                    <h1>
                        Relume
                    </h1>
                    <p>View</p>
                </div>


                <a href="https://www.behance.net/gallery/156098055/REBANK-landing-page-Relume-design-challenge" target="_blank"></a>
         
                    
</div>

<div class="works-showcase__right-column--work-container work-container" id="work">
                    <div class="mask">
                    <img src="../assets/images/darkNoise.png" /> 
                </div>

                <div class="title" id="helpingHandTitle">
                    <h1>
                        Mobile Payment App
                    </h1>
                    <p>View</p>
                </div>


                <a href="https://www.behance.net/gallery/138676173/Mobile-Payment-App" target="_blank"></a>
         
                    
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

    
    const worksContainer = document.querySelectorAll('#work')
    const workstl = gsap.timeline()

    worksContainer.forEach((workContainer) => {
        const openProject = (work:Element) => {
        (work.children[2] as HTMLLinkElement)?.click()
    }
    

    workContainer.addEventListener('click', () => openProject(workContainer))


         const mouseEnterAnimation = (work:Element) => {
    workstl.to(work.children[0], {
        duration:0.1,
        opacity:0,
        display:"none",
        ease:"power3.inOut",
        
    })
    .to(work.children[1], {
        opacity:1,
        display:"flex",
        ease:"power3.inOut"
    })
    .to(work.children[1].lastChild, {
        textDecoration:"line-through",
        ease:"power3.inOut",
        duration:1.2,
    })

}

const mouseLeaveAnimation = (work:Element) => {
     gsap.set(work.children[1].lastChild, {
        textDecoration:"none",
        ease:"power3.inOut",
        // duration:0.2,
    })
    gsap.set(work.children[1], {
        opacity:0,
        display:"none",
        ease:"power3.inOut",
        
    })
    gsap.set(work.children[0], {
        opacity:0.3,
        display:"flex"
    })

}

    workContainer.addEventListener('mouseenter',() => {
       mouseEnterAnimation(workContainer)
    })
    workContainer.addEventListener('mouseleave',() => {
        mouseLeaveAnimation(workContainer)
    })

})


})
</script>

<style scoped lang="scss">
.workSection{
    max-width: 100rem;
    
    height: auto;
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
.works-showcase{
    width: 100%;
    
    padding:2rem 0;
    display: flex;
    justify-content: space-between;

    &__left-column{
        // border:;
        height: auto;
        display: flex;
        flex-direction: column;
        gap:2rem;
         

           
    }

    &__center-column{
        
        height: auto;
        display: flex;
        flex-direction: column;
        gap:2rem;
         
            margin-top:8rem;
    }

    &__right-column{
      
        height: max-content;
        display: flex;
        flex-direction: column;
        gap:2rem;
            margin-top:5rem;
    }

   
}

.work-container{
    height: 35rem;
            width: 20rem;
            cursor: pointer;
           

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

.mask{
    height: 35rem;
            width: 20rem;
}
.mask{
            position:absolute;
          
            opacity: 0.1;
}

.works-showcase__left-column--work-container:nth-child(1){
    background-image: url('../assets/images/helping.png');
            background-size:cover;
            background-repeat: no-repeat;


            .mask{
    height: 35rem;
            width: 20rem;
            position: absolute;
}

            .title{
                // z-index: ;
               
                display: flex;
            flex-direction: column;
            z-index: 500;
            color: black;
            margin-top: 25rem;
            font-family: 'neutra';
            font-size: 1.5rem;
            padding: 0 1rem;

            h1{
                font-size: 2.5rem;
            }
            p{
                margin-top: -1rem;
            }
            
            // display: none;
            
            }

          
}

.works-showcase__left-column--work-container:nth-child(2){
    background-image: url('../assets/images/educationn.png');
            background-size:cover;
            background-repeat: no-repeat;
            background-position-x: -11rem;

            .mask{
    height: 35rem;
            width: 20rem;
            position: absolute;
}



            .title{
                // z-index: ;
               
                display: flex;
            flex-direction: column;
            z-index: 500;
            color: black;
            margin-top: 25rem;
            font-family: 'neutra';
            font-size: 1.5rem;
            padding: 0 1rem;

            h1{
                font-size: 2.5rem;
            }
            p{
                margin-top: -1rem;
            }
            
            // display: none;
            
            }
}



.works-showcase__center-column--work-container:nth-child(1){
            // margin-top: 4rem;
            background-image: url('../assets/images/nft.png');
            background-size:cover;
            background-repeat: no-repeat;
            box-shadow: 2px 2px   whitesmoke;


            .mask{
    height: 35rem;
            width: 20rem;
            position: absolute;
}


        .title{
            position:absolute;
            display: flex;
            flex-direction: column;
            z-index: 500;
            color: white;
            margin-top: 25rem;
            font-family: 'neutra';
            font-size: 1.5rem;
            margin-left:1rem;

            h1{
                font-size: 2.5rem;
            }
            p{
                margin-top: -1rem;
            }
            

        }
            
            
        }

        .works-showcase__center-column--work-container:nth-child(2){
            // margin-top: 4rem;
            background-image: url('../assets/images/pixel.png');
            background-size:cover;
            background-repeat: no-repeat;
            background-position-x:-12rem ;
            
            .mask{
    height: 35rem;
            width: 20rem;
            position: absolute;
}



        .title{
            position:absolute;
            display: flex;
            flex-direction: column;
            z-index: 500;
            color: black;
            margin-top: 25rem;
            font-family: 'neutra';
            font-size: 1.5rem;
            margin-left:1rem;

            h1{
                font-size: 2.5rem;
            }
            p{
                margin-top: -1rem;
            }
            

        }
            
            
        }

        .works-showcase__right-column--work-container:nth-child(1){
            background-image: url('../assets/images/rebank.png');
            background-position-x:-9rem ;
            background-size:cover;
            background-repeat: no-repeat;

            .mask{
    height: 35rem;
            width: 20rem;
            position: absolute;
}

            .title{
                position:absolute;
            display: flex;
            flex-direction: column;
            z-index: 500;
            color: black;
            margin-top: 25rem;
            font-family: 'neutra';
            font-size: 1.5rem;
            margin-left:1rem;

             h1{
                font-size: 2.5rem;
            }
            p{
                margin-top: -1rem;
            }
            
            }
        }

        .works-showcase__right-column--work-container:nth-child(2){
            background-image: url('../assets/images/payment.png');
            background-position-x:-8rem ;
            background-size:cover;
            background-repeat: no-repeat;


            .mask{
    height: 35rem;
            width: 20rem;
            position: absolute;
}


            .title{
                position:absolute;
            display: flex;
            flex-direction: column;
            z-index: 500;
            color: black;
            margin-top: 25rem;
            font-family: 'neutra';
            font-size: 1.5rem;
            margin-left:1rem;

             h1{
                font-size: 2.1  rem;
            }
            p{
                margin-top: -1rem;
            }
            
            }
        }



 

@media screen and (max-width:485px) {

    .workSection{
        flex-direction: column;
        padding: 0 5rem;
        height: max-content;
        &--container{
            flex-direction: column;
        }
    }

    .works-showcase{

        flex-direction: column;
    }

    .work-container{
        width: 95%;
        margin:  0 auto;;
        height: 80rem;
    }
    .mask{
    display: none;
  }

  .work-container .title{
    display: none !important;
  }

  .section-title{
    font-size: 15rem;
  }


 
}

</style>