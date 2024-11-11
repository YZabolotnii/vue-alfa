<script setup>

defineProps({
  header: String,
  about: Array
})

</script>
<template>
  <div style="background: rgba(1, 23, 136, 0.80)" class="rounded-3xl p-8 bg-white text-white">
    <div class=" text-[32px] font-bold uppercase mb-4">{{ header }}</div>

    <div v-for="item in about" :key="item.id" class="w-full h-full flex text-white">
      <div class="w-1/2 flex">
        <div class="text-white border-white border p-1.5 flex-grow flex items-center ">
          {{ item.name }}
        </div>
      </div>
      <div class="w-1/2 flex">
        <div class="text-white border-white border p-1.5 flex-grow">
          {{ item.about }}
        </div>
      </div>
    </div>
  </div>
</template>
