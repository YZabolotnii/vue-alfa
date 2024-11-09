<script setup>
defineProps({
  head: String,
  img: String,
  text: String,
  link: String,
  width: String,
  height: String
})
</script>
<template>
  <div
    style="background: linear-gradient(180deg, rgba(3, 40, 238, 0.75) 0%, rgba(60, 74, 144, 1) 30%, rgba(60, 74, 144, 1) 70%, rgba(3, 40, 238, 0.75) 100%);
;
"
    class="py-5 px-8 rounded-2xl  text-center "
    :class="width"
  >
    <div class="mb-5 text-white text-2xl font-bold">{{ head }}</div>
    <div :class="height" class="mb-5 w-full"><img class="text-center inline-block" :src="img" alt=""></div>
    <div class="mb-5 text-white">{{ text }}</div>
    <div class="mb-5 h-0.5 w-full bg-white"></div>
    <div class="uppercase py-1 px-4 bg-white rounded-3xl w-fit mx-auto">
      <router-link :to="link">ДЕТАЛЬНІШЕ</router-link>
    </div>
  </div>
</template>
