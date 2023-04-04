<template>
  <div class="">
  
    <div class="page-overlay section-title" id="overlayText" v-if="loading">
    WORKS
   </div>


      <Main  id="workSection">
   

        <section class="workSection" id="works">
            <div class="workSection--container">
                <h1 class="section-title title content__title" >
           Works
          </h1>

          <div class="works-showcase">


            <div class="works-showcase__left-column">
                <div class="workContainer" id="work">
                    <div class="mask">
                        <img src="../assets/images/darkNoise.png" />
                    </div>
                    <div class="details">
                        <h1>Helping Hand Case Study</h1>
                    </div>
                    <div class="view">
                        <p>View</p>

                        
                    </div>
                    <a href="https://www.behance.net/gallery/143565927/Helping-hand-Case-Study" target="_blank"></a>

                </div>

                <div class="workContainer" id="work">
                    <div class="mask">
                        <img src="../assets/images/darkNoise.png" />
                    </div>
                    <div class="details">
                        <h1>E-learning Platform</h1>
                    </div>
                    <div class="view">
                        <p>View</p>

                        
                    </div>

                <a href="https://www.behance.net/gallery/159529897/E-learning-Platform" target="_blank"></a>


                </div>

                
            </div>


            <div class="works-showcase__center-column">
                <div class="center-workContainer workContainer" id="work">
                    <div class="mask">
                        <img src="../assets/images/darkNoise.png" />
                    </div>
                    <div class="details">
                        <h1>
                        Super Rare NFT

                        </h1>
                    </div>
                    <div class="view">
                        <p>View</p>

                        
                    </div>
                <a href="https://www.behance.net/gallery/163889507/NFT-Landing-page" target="_blank"> </a>


                </div>

                <div class="center-workContainer workContainer" id="work">
                    <div class="mask">
                        <img src="../assets/images/darkNoise.png" />
                    </div>
                    <div class="details">
                        <h1>
                        Pixel Wears

                        </h1>
                    </div>
                    <div class="view">
                        <p>View</p>

                        
                    </div>
                <a href="https://www.behance.net/gallery/152468943/Pixel-Wears" target="_blank"></a>


                </div>
                
            </div>



            <div class="works-showcase__right-column">

                     <div class="right-workContainer workContainer" id="work">
                    <div class="mask">
                        <img src="../assets/images/darkNoise.png" />
                    </div>
                    <div class="details">
                        <h1>
                            Rebank
                        </h1>
                    </div>
                    <div class="view">
                        <p>View</p>

                        
                    </div>
                <a href="https://www.behance.net/gallery/156098055/REBANK-landing-page-Relume-design-challenge" target="_blank"></a>


                </div>

                <div class="right-workContainer workContainer" id="work">
                    <div class="mask">
                        <img src="../assets/images/darkNoise.png" />
                    </div>
                    <div class="details">
                        <h1>
                       Mobile Payment App

                        </h1>
                    </div>
                    <div class="view">
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
        (work.children[3] as HTMLLinkElement)?.click()
    }
    

    workContainer.addEventListener('click', () => openProject(workContainer))

    const mouseEnterAnimation = (work:Element) => {
        gsap.set(work.children[0],{
           
        opacity:0,
        // display:"none",
        ease:"power3.inOut",
        })
        gsap.to(work.children[1],{
            marginTop:"-13rem",
            duration:0.6,
            ease:"power4.inOut",
            textDecoration:"underline"
           })
           gsap.to(work.children[2],{
            display:"flex",
            delay:0.5
           })
    }

    const mouseLeaveAnimation = (work:Element) => {
       
           gsap.to(work.children[2],{
            display:"none",
           })
           gsap.to(work.children[1],{
            marginTop:"-10rem",
            duration:0.8,
            ease:"power4.inOut",
            textDecoration:"none"
           })
           gsap.to(work.children[0],{
           opacity:0.2,
           // display:"none",
           ease:"power3.inOut",
           })
          
  
    }

        
    workContainer.addEventListener('mouseenter',() => {
       mouseEnterAnimation(workContainer)
    console.log(workContainer)
    console.log('hovered')
    })
    workContainer.addEventListener('mouseleave',() => {
        mouseLeaveAnimation(workContainer)
        console.log('unhoveres')
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
        height: max-content;
        width: max-content;
        display: flex;
        flex-direction: column;
        gap:2rem;
  
         

           
    }

    &__center-column{
        
        height: max-content;
        width: max-content;
        display: flex;
        flex-direction: column;
        gap:2rem;
    
        
         
            margin-top:8rem;
    }

    &__right-column{
      
        height: max-content;
        display: flex;
        width: max-content;

        flex-direction: column;
    
        gap:2rem;
            margin-top:5rem;
    }

   
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



.workContainer:nth-child(1){
    background-image: url('../assets/images/helping.png');
            background-size:cover;
            background-repeat: no-repeat;
            // border: 2px solid blue;
            height: 35rem;
            width: 20rem;
            cursor: pointer;
     
          

            .mask{
                height: 100%;
                width: 100%;
         
                opacity: 0.2;
                object-fit: cover;

                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .details{
                width: 20rem;
                
                position: absolute;
         
                margin-top: -10rem;
                color: black;
                font-family: 'neutra';
                font-size: 30px;
                padding-left: 1rem;
            }

            .view{
                width: 20rem;
               
                position: absolute;
                margin-top: -5rem;
                color: black;
                font-family: 'neutra';
                font-size: 20px;
                display: none;
                justify-content: space-between;
                align-items: center;
                padding-left: 1rem;

            }
          
}

.workContainer:nth-child(2){
    background-image: url('../assets/images/educationn.png');
            background-size:cover;
            background-repeat: no-repeat;
            // border: 2px solid blue;
            height: 35rem;
            width: 20rem;
            cursor: pointer;
         
            background-position-x:-10rem ;
          

            .mask{
                height: 100%;
                width: 100%;
             
                opacity: 0.2;
                object-fit: cover;

                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .details{
                width: 20rem;
                
                position: absolute;
                // bottom: 50rem;
                margin-top: -10rem;
                color: black;
                font-family: 'neutra';
                font-size: 30px;
                padding-left: 1rem;
            }

            .view{
                width: 20rem;
             
                position: absolute;
                margin-top: -5rem;
                color: black;
                font-family: 'neutra';
                font-size: 20px;
                display: none;
                justify-content: space-between;
                align-items: center;
                padding-left: 1rem;

            }
          
}

.workContainer:nth-child(2){
    // background-image: url('../assets/images/educationn.png') !important;
    background-color: red;
            background-size:cover;
            background-repeat: no-repeat;
           
            height: 35rem;
            width: 20rem;
            cursor: pointer;
            
            background-position-x:-10rem ;
          

            .mask{
                height: 100%;
                width: 100%;
              
                opacity: 0.2;
                object-fit: cover;

                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .details{
                width: 20rem;
                
                position: absolute;
                // bottom: 50rem;
                margin-top: -10rem;
                color: black;
                font-family: 'neutra';
                font-size: 30px;
                padding-left: 1rem;
            }

            .view{
                width: 20rem;
               
                position: absolute;
                margin-top: -5rem;
                color: black;
                font-family: 'neutra';
                font-size: 20px;
                display: none;
                justify-content: space-between;
                align-items: center;
                padding-left: 1rem;

            }
          
}






.center-workContainer:nth-child(1){
            // margin-top: 4rem;
            background-image: url('../assets/images/nft.png');
            background-size:cover;
            background-repeat: no-repeat;
            box-shadow: 2px 2px   whitesmoke;
            height: 35rem;
            width: 20rem;


         
            .mask{
                height: 100%;
                width: 100%;
               
                opacity: 0.2;
                object-fit: cover;

                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .details{
                width: 20rem;
                
                position: absolute;
                // bottom: 50rem;
                margin-top: -10rem;
                color: whitesmoke;
                font-family: 'neutra';
                font-size: 30px;
                padding-left: 1rem;
            }

            .view{
                width: 20rem;
            
                position: absolute;
                margin-top: -5rem;
                color: white;
                font-family: 'neutra';
                font-size: 20px;
                display: none;
                justify-content: space-between;
                align-items: center;
                padding-left: 1rem;

            }

            
            
        }


        
.center-workContainer:nth-child(2){
            // margin-top: 4rem;
            background-image: url('../assets/images/pixel.png');
            background-size:cover;
            background-repeat: no-repeat;
            box-shadow: 2px 2px   whitesmoke;
            height: 35rem;
            width: 20rem;


         
            .mask{
                height: 100%;
                width: 100%;
                
                opacity: 0.2;
                object-fit: cover;

                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .details{
                width: 20rem;
                
                position: absolute;
                // bottom: 50rem;
                margin-top: -10rem;
                color: whitesmoke;
                font-family: 'neutra';
                font-size: 30px;
                padding-left: 1rem;
            }

            .view{
                width: 20rem;
            
                position: absolute;
                margin-top: -5rem;
                color: white;
                font-family: 'neutra';
                font-size: 20px;
                display: none;
                justify-content: space-between;
                align-items: center;
                padding-left: 1rem;

            }

            
            
        }




        .right-workContainer:nth-child(1){
            // margin-top: 4rem;
            background-image: url('../assets/images/rebank.png');
            background-size:cover;
            background-repeat: no-repeat;
            box-shadow: 2px 2px   whitesmoke;
            height: 35rem;
            width: 20rem;
            background-position-x:-9rem ;


         
            .mask{
                height: 100%;
                width: 100%;
  
                opacity: 0.2;
                object-fit: cover;

                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .details{
                width: 20rem;
                
                position: absolute;
                // bottom: 50rem;
                margin-top: -10rem;
                color: black;
                font-family: 'neutra';
                font-size: 30px;
                padding-left: 1rem;
            }

            .view{
                width: 20rem;
            
                position: absolute;
                margin-top: -5rem;
                color: black;
                font-family: 'neutra';
                font-size: 20px;
                display: none;
                justify-content: space-between;
                align-items: center;
                padding-left: 1rem;

            }

            
            
        }

        .right-workContainer:nth-child(2){
            // margin-top: 4rem;
            background-image: url('../assets/images/payment.png');
            background-size:cover;
            background-repeat: no-repeat;
            box-shadow: 2px 2px   whitesmoke;
            height: 35rem;
            width: 20rem;
            background-position-x:-8rem ;


         
            .mask{
                height: 100%;
                width: 100%;
           
                opacity: 0.2;
                object-fit: cover;

                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .details{
                width: 20rem;
                
                position: absolute;
                // bottom: 50rem;
                margin-top: -10rem;
                color: black;
                font-family: 'neutra';
                font-size: 30px;
                padding-left: 1rem;
            }

            .view{
                width: 20rem;
            
                position: absolute;
                margin-top: -5rem;
                color: black;
                font-family: 'neutra';
                font-size: 20px;
                display: none;
                justify-content: space-between;
                align-items: center;
                padding-left: 1rem;

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
        width: 100%;
        flex-direction: column;
        align-items: center;
        // background-color: red;
    }

 
    .mask, .view{
    display: none;
  }


  .work-container .title{
    display: none !important;
  }

  .section-title{
    font-size: 15rem;
  }

  .workContainer{
    width:60rem !important;
    height:90rem !important;

    .details{
        position: relative !important;
        bottom: -70rem !important;
       font-size: 20px !important;
       width: 100% !important;
    }

  }


 
}

</style>