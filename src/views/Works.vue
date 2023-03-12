<template>
  <div class="app">
   
      <Main>
        <section class="workSection">
            <div class="workSection--container">
                <h1 class="section-title title content__title" >
           Works
          </h1>


          <div class="workSection--container__works-container" id="works-container">

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



            </div>
        


          

        </section>
      </Main>
    </div>
</template>

<script setup lang="ts">
import NavbarVue from '@/components/Navbar.vue';
import Main from '@/layouts/Main.vue';

</script>

<style scoped lang="scss">
.workSection{
    max-width: 100rem;
    
    height: 100vh;
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

 #works-container{
        height: 5rem;

        display:flex;
        gap:3rem;
        justify-content: justify-between;
       
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


a{
    width: auto;
    height: auto;
    color:white
}


</style>