<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>

  <div class="flex flex-col min-h-screen bg-[#010725]">
    <div class="flex-grow flex flex-col">
      <Header />

      <main class="flex-grow content" id="content" role="main">
        <RouterView />
      </main>

      <Footer />
    </div>
  </div>

</template>
