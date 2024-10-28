<script setup>
defineProps({
  head: String,
  img: String,
  text: String,
  link: String,
  width: String
})
</script>
<template>
  <div
    style="background: linear-gradient(180deg, rgba(3, 40, 238, 0.70), rgba(204, 204, 204, 0.00));"
    class="py-5 px-8 rounded-2xl  text-center border-white border"
    :class="width"
  >
    <div class="mb-5 text-white text-2xl font-bold">{{ head }}</div>
    <div class="mb-5 h-[150px] w-full bg-blue-700">item.img</div>
    <div class="mb-5 text-white">{{ text }}</div>
    <div class="mb-5 h-0.5 w-full bg-white"></div>
    <div class="uppercase py-1 px-4 bg-white rounded-3xl w-fit mx-auto">
      <router-link :to="link">ДЕТАЛЬНІШЕ</router-link>
    </div>
  </div>
</template>
