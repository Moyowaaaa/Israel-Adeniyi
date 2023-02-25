<template>
    <section class="footerSection">
        <div class="footerSection--topcontainer">
            <h1 class="footer-alt alte">Get in touch</h1>
            <img src="../assets/images/inTouch.svg"/>
        </div>

        <div class="footerSection--bottomcontainer">
            <p>Hola</p>
            <div class="footerSection--bottomcontainer__copyright">
                &copy; 2023. All right reserved
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

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
    

    &--topcontainer{
        height: 25rem;
        width: 100%;
        
        background-color: black;
        z-index: 10;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    &--bottomcontainer{
        height: 18rem;
        ;
        box-sizing: border-box;
        padding: 0 11.8rem;
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
</style>