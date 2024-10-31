<script setup>

</script>
<template>
  <div class="max-w-7xl mx-auto p-16 flex flex-col gap-10 max-[1028px]:p-8">
    <div class="flex items-center justify-between">
      <div><img class="h-8 w-auto" src="@/assets/alfa.svg" alt="Logo" loading="lazy"></div>
      <div class="flex items-center gap-5">
        <div><a href=""><img class="h-8 w-auto" src="@/assets/insta.svg" alt="Logo" loading="lazy"></a></div>
        <div><a href=""><img class="h-8 w-auto" src="@/assets/fb.svg" alt="Logo" loading="lazy"></a></div>
        <div><a href=""><img class="h-8 w-auto" src="@/assets/tg.svg" alt="Logo" loading="lazy"></a></div>
      </div>
    </div>

    <div class="flex justify-between max-md:flex-col-reverse">
      <div class="text-white">
        <span>Адреса:</span> <br>
        <span>вул. Гетьмана Павла Полуботка, </span> <br>
        <span>будинок 52, офіс 218, Київ, 02094</span> <br>
        <span>Телефон:</span> <br>
        <span class="underline"><a href="">+380 (96) 054 88 88</a></span> <br>
        <span>Email:</span> <br>
        <span class="underline"><a href="">office.geofix@gmail.com</a></span>
      </div>
      <div class="p-8 bg-[#ffffff1a] rounded-2xl max-md:p-4 w-fit max-md:mx-auto max-md:mb-8">
        <div class="uppercase text-white text-sm font-bold mb-5">ФОРМА ЗВОРОТНЬОГО ЗВ’ЯЗКУ</div>
        <form class="w-80">
          <div class="mb-5">
            <input type="text" id="pib" class="bg-[#0328ee4d] border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ПІБ" required />
          </div>
          <div class="mb-5 flex gap-5">
            <input type="email" id="email" class="bg-[#0328ee4d] border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Електронна пошта" required />
            <input type="tel" id="tel" class="bg-[#0328ee4d] border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Номер телефону" required />
          </div>
          <div class="mb-5">
            <textarea type="text" id="text" class="bg-[#0328ee4d] border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ваше питання" required />
          </div>
          <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Відправити</button>
        </form>
      </div>
    </div>
  </div>

</template>
