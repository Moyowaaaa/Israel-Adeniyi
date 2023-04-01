<template>
    <div class="selectedWorkSection">
        <div class="selectedWorkSection--top-container">
            <h1>Selected Works</h1> 

            <router-link to="/works">
                <button class="btn"><h2>View All</h2></button>  
            </router-link>
           
        </div>


        <div class="selectedWorkSection--works-container">

            

            <div class="workContainer" id="helping" data-filter="1">
                <div class="mask">
                    <img src="../assets/images/darkNoise.png" />
                </div>
                <div class="desc" id="helpinghanddesc">
                    <h1>
                        Helping Hand
                    </h1>
                    <p>View</p>
                </div>
                <a href="https://www.behance.net/gallery/143565927/Helping-hand-Case-Study" target="_blank"></a>

            </div>

            <div class="workContainer" id="NFT" data-filter="2" >
                <div class="mask">
                    <img src="../assets/images/LightNoise.png" />
                </div>
                <div class="desc" id="NFTdesc">
                    <h1>Super Rare NFT</h1>
                    <p>View</p> 
                </div>

                <a href="https://www.behance.net/gallery/163889507/NFT-Landing-page" target="_blank"> </a>

            </div>

             <div class="workContainer" id="Edu" data-filter="3">
                <div class="mask">
                    <img src="../assets/images/darkNoise.png" />
                </div>
               
                <div class="desc" id="Edudesc">
                    <h1>Relume</h1>
                    <p>View</p> 
                </div>

                    <a href="https://www.behance.net/gallery/156098055/REBANK-landing-page-Relume-design-challenge" target="_blank"></a>
            </div>

        </div>
        



    </div>
</template>

<script setup lang="ts">
import gsap from 'gsap';
import ScrollTrigger  from 'gsap';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
gsap.registerPlugin(ScrollTrigger)

const router = useRouter()


onMounted(() => {


   

  
    gsap.set('#NFT', {
        marginTop:"4rem"
    })
    gsap.set('#helping', {
        marginTop:"8rem"
    })


 gsap.to('#helping', {
    y: "-8rem",
    duration:12,
    ease:"power3.inOut",
    
    
    scrollTrigger:{
        trigger: '.selectedWorkSection',
        start: 'top center',
      end: 'bottom center',
      scrub: true,
   
   
    }
})

gsap.to('#NFT', {
    y: "-2rem",
    duration:1.2,
    ease:"power3.inOut",

    scrollTrigger:{
        trigger:'.selectedWorkSection',
        start: 'top center',
      end: 'bottom center',
      scrub: true,
      
    }
})

gsap.to('#Edu', {
    y: "4rem",
    duration:1.2,
    ease:"power3.inOut",

    scrollTrigger:{
        trigger:'.selectedWorkSection',
        start: 'top center',
      end: 'bottom center',
      scrub: true,
      
    }
})

// ------HoverMethods ----- 



const worksContainer = document.querySelectorAll('.workContainer')



worksContainer.forEach((workContainer) => {


    const openProject = (work:Element) => {
        (work.children[2] as HTMLLinkElement)?.click()
    }
    
    workContainer.addEventListener('click', () => openProject(workContainer))



})


})

</script>

<style scoped lang="scss">


.selectedWorkSection{
    height: max-content;
    max-height: 100%;
    height: 100%;
  
    padding: 0 11.5rem;
    color:white;
    box-sizing: border-box;

    &--top-container{
        display: flex;
        width: 100%;
        padding: 0 1rem;
        justify-content: space-between;
        align-items: center;
        // font-size:5rem;
        font-family: 'thunder-boldl';

        h1{
             font-size:5rem;
        }

        h2{
            font-family: 'thunder-lightl';
        }
    }

    &--works-container{
        display: flex;
        width: 100%;
        padding:1rem;
        padding-top: -2rem;
        font-size:5rem;
        justify-content: space-between;
        font-family: 'thunder-boldl';
    }
    

    @media screen and (max-width:485px) {
        &--top-container{
            flex-direction: column;
            align-items: start;
            
        }

        h1{
             font-size:12rem;
        }

        h2{
            font-family: 'thunder-lightl';
        }
    }
}

.mask, .desc{
    height: 35rem;
            width: 20rem;

}
.workContainer{
            height: 35rem;
            width: 20rem;
            cursor: pointer;
         
          
        }

        .workContainer:nth-child(1){
            // margin-top:8rem;
            background-image: url('../assets/images/helping.png');
            background-size:cover;
            background-repeat: no-repeat;
     


            #helpinghanddesc{
            position:absolute;
            display: flex;
            flex-direction: column;
            z-index: 500;
            color: black;
            margin-top: 25rem;
            font-family: 'neutra';
            font-size: 1.5rem;
            margin-left:1rem;
            display: none;
            
            

            h1{
                font-size: 2.5rem;
            }
            p{
                margin-top: -1rem;
            }
            
        }
        .mask{
            position:absolute;
          
            opacity: 0.2;

            img{
              
                position: absolute;
                height: 100%;
                width: 100%;
            }
        }
        }
       

        .workContainer:nth-child(2){
            // margin-top: 4rem;
            background-image: url('../assets/images/nft.png');
            background-size:cover;
            background-repeat: no-repeat;
            box-shadow: 2px 2px   whitesmoke;


            #NFTdesc{
            position:absolute;
            display: flex;
            flex-direction: column;
            z-index: 500;
            color: white;
            margin-top: 25rem;
            font-family: 'neutra';
            font-size: 1.5rem;
            margin-left:1rem;
            display: none;
          
            h1{
                font-size: 2.5rem;
            }
            p{
                margin-top: -1rem;
            }
            
            
        }


            .mask{
            position:absolute;
       
            opacity:0.8 ;

            img{
           
                position: absolute;
                height: 100%;
                width: 100%;
            }
            
            
        }
        }

        .workContainer:nth-child(3){
          
            background-image: url('../assets/images/rebank.png');
            background-position-x:-9rem ;
            background-size:cover;
            background-repeat: no-repeat;
          

            #Edudesc{
            position:absolute;
            display: flex;
            flex-direction: column;
            z-index: 500;
            color: black;
            margin-top: 25rem;
            font-family: 'neutra';
            font-size: 1.5rem;
            margin-left:1rem;
            display: none;
           
            
            h1{
                font-size: 2.2rem;
            }
            p{
                margin-top: -1rem;
            }
            
        }



            .mask{
            position:absolute;
       
            opacity: 0.1;

            img{
              
                position: absolute;
                height: 100%;
                width: 100%;
            }
        }
        }


        .btn {
  position: relative;
  color: white;
  padding: 0.2rem 2rem;
  font-family: 'thunder-mediuml';
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: color 350ms ease-in-out;
}

.btn::before,
.btn::after {
  content: "";
  position: absolute;
  top: -3px;
  width: calc(100% + 6px);
  height: calc(100% + 6px);
  transform: scale(0);
  transition: transform 350ms ease-in;
}

.btn::before {
  border-left: 3px solid #F89623;
  border-bottom: 3px solid #F89623;
  left: -3px;
  transform-origin: 0 100%;
}

.btn::after {
  border-right: 3px solid #F89623;
  border-top: 3px solid #F89623;
  right: -3px;
  transform-origin: 100% 0;
}

.btn:hover::after,
.btn:hover::before {
  transform: scale(1);
}

.btn:hover {
  color: #F89623;
  border: none;
}


        @media screen and (max-width: 485px) {

            .btn{
                padding: 0 8rem;
            }
  .selectedWorkSection {
    padding: 5rem;
  }

  .selectedWorkSection--works-container {
    display: flex;
    overflow-x: auto;
    gap:4rem;
    flex-direction: column;
  }

  .mask{
    display: none;
  }

  .workContainer{
            height: 80rem;
            width: 95%;
         
        }


  .workContainer:nth-child(1){
        
            background-image: url('../assets/images/helping.png');
            background-size:cover;
            background-repeat: no-repeat;
            // background-position-x: 2rem;


           
        }
        

       

  .workContainer:nth-child(2){
           
            background-image: url('../assets/images/nft.png');
            background-size:cover;
            background-repeat: no-repeat;
            background-position-x: -5rem;
        }

        .workContainer:nth-child(3){
          
            background-image: url('../assets/images/rebank.png');
            // background-position-x:-9rem ;
            background-position: center;
            background-size:contain cover;
            background-repeat: no-repeat;
        }


}


</style>