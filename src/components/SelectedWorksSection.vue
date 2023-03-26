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
    y: "-6rem",
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
    y: "2rem",
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

console.log(worksContainer)

worksContainer.forEach((workContainer) => {
    console.log(workContainer.children)

    const openProject = (work:any) => {
        work.children[2]?.click()
    }
    
    workContainer.addEventListener('click', () => openProject(workContainer))
    const workstl = gsap.timeline()

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
        console.log(workContainer.children[0])
       mouseEnterAnimation(workContainer)
    })
    workContainer.addEventListener('mouseleave',() => {
        mouseLeaveAnimation(workContainer)
    })
})



// ----Helping hand--- 

const mouseEnterAnimation = (work:Element) => {
    // workstl.set(work.children[0], {
    //     opacity:0,
    //     display:"none"
    // })

    console.log('you hovered on',work)
}

const mouseLeaveAnimation = (work:Element) => {
    // workstl.set(work.children[0], {
    //     opacity:1,
    //     display:"flex"
    // })

    console.log('you unhovered on',work)

}



// helpingHandContainer?.addEventListener('mouseenter', () => {
//     mouseEnterAnimation(helpingHandContainer)
// })

// helpingHandContainer?.addEventListener('mouseleave', () => {
//     mouseLeaveAnimation(helpingHandContainer)
// })


// NFTcontainer?.addEventListener('mouseenter', () => {
//     mouseEnterAnimation(NFTcontainer)
// })

// NFTcontainer?.addEventListener('mouseleave', () => {
//     mouseLeaveAnimation(NFTcontainer)
// })

// EduContainer?.addEventListener('mouseenter', () => {
//     mouseEnterAnimation(EduContainer)
// })

// EduContainer?.addEventListener('mouseleave', () => {
//     mouseLeaveAnimation(EduContainer)
// })








// gsap.to('#Edu', {
//     duration:1.2,
//     ease:"power3.inOut",

//     scrollTrigger:{
//         trigger:'.selectedWorkSection',
//         start: 'top center',
//       end: 'bottom center',
//       scrub: true,
      
//     }
// })
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
    
}

.mask, .desc{
    height: 35rem;
            width: 20rem;

}
.workContainer{
            height: 35rem;
            width: 20rem;
            cursor: pointer;
            border: 2px solid red;;
          
        }

        .workContainer:nth-child(1){
            // margin-top:8rem;
            background-image: url('../assets/images/helping.png');
            background-size:cover;
            background-repeat: no-repeat;
            border: 2px solid green;;


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
                border: 2px solid red;;
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

            border: 2px solid purple;

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
                border: 2px solid green;;
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
            border: 2px solid teal;

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
            border:2px solid red;
            opacity: 0.1;

            img{
                border: 2px solid blue;;
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
  border: 3px solid white;
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
  .selectedWorkSection {
    padding: 5rem;
  }

  .selectedWorkSection--works-container {
    display: flex;
    overflow-x: auto;
    gap:4rem;
    flex-direction: column;
  }

  .workContainer{
            height: 35rem;
            width: 100%;
            border:2px solid purple
        }


  .workContainer:nth-child(1){
        
            background-image: url('../assets/images/helping.png');
            background-size:cover;
            background-repeat: no-repeat;


           
        }
        

       

  .workContainer:nth-child(2){
           
            background-image: url('../assets/images/nft.png');
            background-size:cover;
            background-repeat: no-repeat;
        }

        .workContainer:nth-child(3){
          
            background-image: url('../assets/images/rebank.png');
            // background-position-x:-9rem ;
            background-position: center;
            background-size:cover;
            background-repeat: no-repeat;
        }


}


</style>