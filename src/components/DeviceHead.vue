<script setup>
defineProps({
  deviceTitle: String
})
</script>
<template>
  <div class="flex justify-between gap-10 items-center">
    <div class="h-0.5 w-3/5 max-md:hidden bg-white"></div>
    <div class="text-4xl max-lg:text-3xl max-md:text-4xl max-md:ml-auto text-bold text-white ">{{ deviceTitle }}</div>
  </div>
</template>
