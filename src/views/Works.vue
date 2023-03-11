<template>
  <div class="app">
   
      <Main>
        <section class="workSection">


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
    align-items: center;
    justify-content: center;
    margin:0 auto;
    padding: 0 11.8rem;
}
</style>