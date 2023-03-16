<template>
    <div class="mouse"></div>
  </template>
  
  <script setup lang="ts">
  import gsap from 'gsap';
import { onMounted } from 'vue';
  
  onMounted(() => {
      gsap.set(".mouse", {xPercent: -50, yPercent: -50});
  
  let xTo = gsap.quickTo(".mouse", "x", {duration: 0.6, ease: "power3"}),
      yTo = gsap.quickTo(".mouse", "y", {duration: 0.6, ease: "power3"});
  
  window.addEventListener("mousemove", e => {
    xTo(e.pageX);
    yTo(e.pageY);
  });
  })
  </script>
  
  <style scoped>
  .mouse {
    width: 50px;
    height: 50px;
    position: fixed;
    top: 0;
    left: 0;
    border: 1px solid black;
    border-radius: 50%;
    pointer-events: none;
  }
  </style>