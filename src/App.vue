<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>

  <div class="flex flex-col min-h-screen bg-[#010725]">
    <div class="flex-grow flex flex-col">
      <Header class="lg:w-[1024px] max-w-5xl mx-auto max-lg:mx-0 px-10 max-[1024px]:px-6"/>

      <main class="flex-grow content" id="content" role="main">
        <RouterView />
      </main>

    </div>
  </div>
  <div class="bg-[#010D50]">
    <Footer />
  </div>

</template>
