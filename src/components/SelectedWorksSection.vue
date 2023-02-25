<template>
    <section class="selectedWorks">

        <div class="selectedWorks--container">
            <h1 class="section-title title" data-splitting data-effect1>
            Selected Works
          </h1>


          <div class="selectedWorks--container__works-container">
         
           

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
    height:25rem;
    width: 50%;;
    border:2px solid teal;
    object-fit: cover;

    &--image{
      
    }
    &--desc{
        height: 20%;
        border:2px solid red
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