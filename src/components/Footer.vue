<template>
    <section class="footerSection" id="footer">
        <div class="footerSection--topcontainer">
            <a href="mailto:adeniyioba2000@gmail.com">
            <div class="footerSection--topcontainer__sub-container" id="subContainer">
            <h1 class="footer-alt alte">Get in touch</h1>
            <img src="../assets/images/inTouch.svg"/>
            </div>  
            </a>
        </div>

        <div class="footerSection--bottomcontainer">
          <div class="linkcontainer">
            <div class="linkcontainer--container footer-text">


                <a href="https://twitter.com/Adeniyi_nFt?s=09" target="_blank">
                <div class="link social">
                    <p class="footer-link">Twitter </p> 
                    <img src="../assets/images/linkArrow.svg" />
                </div>
            </a>

            <a href="https://www.linkedin.com/in/israel-adeniyi-a11b56220" target="_blank">
                <div class="link social">
                    <p class="footer-link">Linkedin </p> 
                    <img src="../assets/images/linkArrow.svg" />
                </div>
                </a>
              
            </div>

            <div class="linkcontainer--container footer-text">

                <a href="https://www.behance.net/israeladeniyi8"  target="_blank">
                <div class="link social">
                    <p class="footer-link">Behance </p> 
                    <img src="../assets/images/linkArrow.svg" />
                </div>
                </a>


                <div class="mail">
                    <p>Email address: </p>   <a href="mailto:adeniyioba2000@gmail.com">
                        <p class="mail--link link social">adeniyioba2000@gmail.com</p>

                    </a>
                    
        
                </div>
              
            </div>


            <div class="linkcontainer--container footer-text">
                <div class="link">
                  
                    <p class="footer-link social">Israel </p>
                 
                    <div class="sphere"></div>
                    <p class="footer-text-smaller">Design and UI</p>
                </div>


                <div >
                    <a href="https://github.com/Moyowaaaa"  target="_blank" class="link">
                    <p class="footer-link social">Moyowa </p>
                       
                    <div class="sphere"></div>
                    <p class="footer-text-smaller">Development</p>
                </a>  
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

        scrub:1.2
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
  
    padding-top:5rem;
    padding-bottom: 2rem;
    color: white;
   
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
    width: max-content;
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

        text-decoration: none;
    }


    .link{
        display: flex;
    }
    .footer-link{
        display: flex;
    }



@media screen and (max-width: 485px) {
    .footerSection{
        margin-top: 10rem;
        &--topcontainer{
        height: 40vh;
      
        gap:5rem
        }

        &--bottomcontainer{
            height: 40vh;
            
            padding: 4rem
        }
    }
    .footer-text-normal{
        font-size:3rem;
        text-align: center;
        padding: 4rem
        ;
        width: 100%;
       

    }
    .linkcontainer{
        flex-direction: row;
        flex-wrap: wrap;
       
        &--container{
        display:  flex;
        gap:0.5rem;
       
        width: max-content;
        flex-direction: column;
    }
    }

    .footer-text{
        font-size: 4rem;
    }
    .footer-text:nth-child(3){
        font-size: 6rem;
        display: none;
    }
    .linkcontainer--container:nth-child(3){
        width: 100%;
       
    }
}
</style>