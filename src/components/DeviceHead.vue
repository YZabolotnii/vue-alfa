<script setup>
defineProps({
  deviceTitle: String
})
</script>
<template>
  <div class="flex justify-between items-center">
    <div class="h-0.5 w-3/5 bg-white"></div>
    <div class="text-5xl text-bold text-white ">{{ deviceTitle }}</div>
  </div>
</template>
