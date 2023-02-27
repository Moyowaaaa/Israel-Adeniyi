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
                <div class="link">
                    <p>Twitter </p> 
                    <img src="../assets/images/linkArrow.svg" />
                </div>


                <div class="link">
                    <p>Linkedin </p> 
                    <img src="../assets/images/linkArrow.svg" />
                </div>
              
            </div>

            <div class="linkcontainer--container footer-text">
                <div class="link">
                    <p>Behance </p> 
                    <img src="../assets/images/linkArrow.svg" />
                </div>


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
                    <p>Moyowa </p> 
                    <div class="sphere"></div>
                    <p class="footer-text-smaller">Development and Motion</p>
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
    markers:true,
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
</style>