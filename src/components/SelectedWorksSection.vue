<template>
    <section class="selectedWorks">

        <div class="selectedWorks--container">
            <h1 class="section-title title" data-splitting data-effect1>
            Selected Works
          </h1>


          <div class="selectedWorks--container__works-container">
         <div class="work-container">
            <img src="../assets/images/helpingHand.svg" />
            <div class="work-container--desc project-desc-text">
                <h1>Helping hand Case study</h1>
                <img src="../assets/images/linkArrow.svg" />
            </div>
         </div>
         <div class="work-container">
            <img src="../assets/images/Nft.svg" />
            <div class="work-container--desc project-desc-text">
                <h1>NFT UI Relume Challenge</h1>
                <img src="../assets/images/linkArrow.svg" />
            </div>
         </div>
           

            </div>  

            <button class="button">
                View All
            </button>


            


        </div>
   
    </section>
</template>

<script setup lang="ts">

</script>

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
    padding: 1rem 2rem;
        border:2px solid white;
        color:white;
        background-color: transparent;
}
</style>