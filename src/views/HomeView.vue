<script setup>
import DeviceHead from '@/components/DeviceHead.vue'
import DeviceCard from '@/components/DeviceCard.vue'

const achievements = [
  {upText: '98%', bText: 'задоволених клієнтів'},
  {upText: '50+', bText: 'ПРОДУКЦІЯ ПРОДАЄТЬСЯ В ПОНАД 50 КРАЇНАХ СВІТу'},
  {upText: '20 000', bText: 'КІЛЬКІСТЬ КОРИСТУВАЧІВ У ГАЛУЗІ ДОСЯГЛА 20&nbsp;000+'},
  {upText: '15 років', bText: 'БІЛЬШЕ 15 РОКІВ ДОСВІДУ У ГЕОДЕЗІЇ '}
]

const gnss = [
  {head: 'NETBOX 2', img: '/public/g-1.png', text: 'Універсальний GNSS приймач, з 1408 каналами та вбудованим модулем IMU, внутрішнім радіо', link:'/about'},
  {head: 'NETBOX 2 LITE', img: '/public/g-2.png', text: 'Універсальний GNSS приймач, з 1408 каналами та вбудованим датчиком IMU, внутрішнім радіо', link:'/about'},
  {head: 'L2', img: '/public/g-3.png', text: 'Найменший GNSS приймач з 1408 каналами, компенсатором IMU до 60 градусів та вагою 170 грам', link:'/about'},
  {head: 'MATRIX II', img: '/public/g-4.png', text: 'MATRIX II — це лазерний AR RTK нового покоління, призначений для будь якого геодезичного завдання.', link:'/about'},
  {head: 'GEOPULS', img: '/public/g-5.png', text: 'GeoPuls — абсолютно новий прилад RTK з функцією лазера та модулем IMU з можливістю працювати під кутом до 120 градусів', link:'/about'},
  {head: 'L 100', img: '/public/g-6.png', text: 'Новий L300 оснащений новим вбудованим радіоприймачем із типовою робочою відстанню до 15 км.', link:'/about'},
]

const tacheometr = [
  {head: 'ALPHA X', img: '/public/t-1.png', text: 'Двохсекундний тахеометр, має вбудовани Bluetooth модуль, що підтримує з’єднання з польовим з програмним забезпеченням SurPro 6.0', link:'/about'},
  {head: 'ALPHA Y', img: '/public/t-2.png', text: 'Двохсекундний тахеометр з вбудованим програмним забезпеченням SurPro 6.0 на базі ОС Android', link:'/about'},
]

const scaner = [
  {head: 'LIXEL K1', img: '/public/s-1.png', text: 'Це інноваційний ручний лазерний сканер, який поєднує у собі потужні технології для створення точних тривимірних моделей', link:'/about'},
  {head: 'SLAM R100', img: '/public/s-2.png', text: 'SLAM R100 — це портативний пристрій 3D-побудови в реальному часі', link:'/about'},
]

</script>
<style scoped>
.main-img {
  background-image: url('../assets/laptop.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 100%;
  height: 100vh; /* або інший розмір залежно від ваших вимог */
}
.bg-dots {
  background-image: url('../assets/bg-dots.png');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 80%;
  opacity: 0.3;
}
</style>
<template>
  <!--  section 1  -->
  <div class="max-w-7xl px-10 max-lg:px-6 mx-auto">
    <div class="mt-8 flex flex-col items-center w-full max-[500px]:-mb-8 max-[500px]:-mt-3">
      <div class="w-full flex justify-center items-center">

        <div class="main-img w-full h-full max-[1028px]:!w-3/4 max-[1028px]:!h-[400px] max-[900px]:!h-[300px] max-[700px]:!h-[250px] max-[600px]:!h-[200px]"></div>

      </div>
    </div>
  </div>

  <!--  section 2  -->
  <div class="max-w-7xl px-10 max-[1028px]:px-6 mx-auto">
    <div class="my-16">
      <h1 class="text-white text-5xl max-sm:text-2xl w-sm:text-2xl w-sm:text-2xl w-sm:text-2xl font-bold mb-5">
        Наші досягнення
      </h1>
      <div class="text-white">
        Компанія α-GEO, заснована в 2008 році,
        займається дослідженням та розробкою,
        виробництвом, продажем та обслуговуванням
        геодезичних та картографічних інструментів.
      </div>
    </div>

    <div class="mr-8 mb-16">
      <div class="grid grid-cols-2 gap-y-10 gap-x-32 w-fit mx-auto max-[1028px]:gap-6	max-[768px]:grid-cols-1">
        <div
          v-for="item in achievements"
          :key="item.id"
          class="col-span-1 flex flex-col items-start"
        >
          <div class="w-[150px] h-8 bg-white rounded-xl flex justify-center items-center pb-1 -mb-1.5 -rotate-6">
            <div class="text-xl uppercase">{{ item.upText }}</div>
          </div>
          <div
            style="background: linear-gradient(90deg, #0228EE 0%, #011788 100%)"
            class="ml-8 w-[350px] rounded-xl px-8 py-4 h-[100px] flex items-center max-[1028px]:px-3 max-[1028px]:py-1 max-[1028px]:w-[300px] max-[1028px]:h-[80px]"
          >
            <div class="text-xl text-white pb-1 uppercase max-[1028px]:text-lg" v-html="item.bText"></div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="flex w-full gap-8 max-md:flex-col">
        <div class="relative w-2/3 max-md:w-full h-[450px] max-md:h-[250px] rounded-[40px]" style="background: #0328EE;">
          <div class="mr-10 max-md:mr-0">
            <div class="opacity-100 uppercase py-1 px-10 my-7 bg-white rounded-xl w-fit ml-auto max-md:mx-auto">
              <router-link to="/">ДЕТАЛЬНІШЕ</router-link>
            </div>
          </div>
          <div class="bg-dots rounded-xl max-md:h-fit"></div>
          <div class="absolute max-md:top-[40%] top-[70%] left-[10%]">
            <span class="text-white text-xl">Ручний лазерний RTK</span> <br>
            <span><img class="mt-3 mb-[-30px]" src="@/assets/g-line.png" alt=""></span> <br>
            <span class="uppercase text-[60px] font-bold text-white">GeoPuls</span>
          </div>
        </div>
        <div class="w-1/3 max-md:hidden flex flex-col gap-8">
          <div class="relative h-1/2 rounded-xl" style="background: #0328EE;">
            <div class="bg-dots !h-full"></div>
            <div class="absolute top-[30%] left-[5%]">
              <span class="text-white text-xl">GNSS - приймач</span> <br>
              <span><img class="w-[70%] mt-3 mb-[-30px]" src="@/assets/g-line.png" alt=""></span> <br>
              <span class="uppercase text-[40px] font-bold text-white">Matrix ii</span>
            </div>
          </div>
          <div class="relative h-1/2 rounded-xl" style="background: #0328EE;">
            <div class="bg-dots !h-full"></div>
            <div class="absolute top-[30%] left-[5%]">
              <span class="text-white text-xl">Ручний сканер</span> <br>
              <span><img class="w-[70%] mt-3 mb-[-30px]" src="@/assets/g-line.png" alt=""></span> <br>
              <span class="uppercase text-[40px] font-bold text-white">Slam r 100</span>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

<!--  section 3  -->

  <div class="mt-32 max-lg:mt-16 max-sm:mt-10">
<!--    <div class="bg-image h-[800px] max-[1700px]:h-[750px]"></div>-->
    <img src="@/assets/bg-lg.png" alt="">
  </div>

<!--  section 4  -->

  <div class="mt-32 max-lg:mt-16 max-sm:mt-10 max-w-7xl px-10 max-[1028px]:px-6 mx-auto">
    <div>
      <DeviceHead deviceTitle="GNSS - ПРИЙМАЧІ" />
      <div class="relative mt-[50px] max-[1400px]:hidden">
        <img class="left-[-40%]  absolute z-50 w-[725px] h-[591px]" src="@/assets/tool-g.png" alt="">
      </div>
      <div class="grid grid-cols-3 gap-8 w-fit my-16 ml-auto max-[1028px]:mx-auto max-[1028px]:flex-wrap max-[1028px]:grid-cols-2 max-[640px]:grid-cols-1">
        <DeviceCard
          v-for="item in gnss"
          :key="item.id"
          :head="item.head"
          :img="item.img"
          :text="item.text"
          :link="item.link"
          width="w-[270px]"
          height="h-[170px]"
        />
      </div>
    </div>
  </div>

<!--  section 5  -->

  <div class="mt-32 max-lg:mt-16 max-sm:mt-10 max-w-7xl px-10 max-[1028px]:px-6 mx-auto">
    <div>
      <DeviceHead deviceTitle="ТАХЕОМЕТРИ" />
      <div class="relative max-[1200px]:hidden">
        <img class="left-[-20%] absolute z-50 w-[504px] h-[789px]" src="@/assets/tool-t.png" alt="">
      </div>
      <div class=" grid grid-cols-2 gap-8 w-fit my-16 ml-auto max-[768px]:mx-auto max-[768px]:grid-cols-1">
        <DeviceCard
          v-for="item in tacheometr"
          :key="item.id"
          :head="item.head"
          :img="item.img"
          :text="item.text"
          :link="item.link"
          width="w-[350px] max-sm:w-[300px]"
          height="h-[275px]"
        />
      </div>
    </div>
  </div>

<!--  section 6  -->

  <div class="mt-32 max-lg:mt-16 max-sm:mt-10 max-w-7xl px-10 max-[1028px]:px-6 mx-auto">
    <div>
      <DeviceHead deviceTitle="СКАНЕРИ" />
      <div class="relative max-[1200px]:hidden">
        <img class="left-[-15%] absolute z-50 w-[375px] h-[741px]" src="@/assets/tool-s.png" alt="">
      </div>
      <div class="grid grid-cols-2 gap-8 w-fit my-16 ml-auto max-[768px]:mx-auto max-[768px]:grid-cols-1">
        <DeviceCard
          v-for="item in scaner"
          :key="item.id"
          :head="item.head"
          :img="item.img"
          :text="item.text"
          :link="item.link"
          width="w-[350px] max-sm:w-[300px]"
          height="h-[275px]"
        />
      </div>
    </div>
  </div>

<!--  section 7  -->

  <div class="mt-32 max-lg:mt-16 max-sm:mt-10 max-w-7xl px-10 max-[1028px]:px-6 mx-auto">
    <div class="flex justify-between items-center gap-10 max-[1028px]:flex-col">
      <div class="flex flex-col gap-10">
        <div class="text-white text-5xl max-sm:text-2xl w-sm:text-2xl w-sm:text-2xl w-sm:text-2xl font-bold">А подивитись відео про прилади ви можете тут</div>
        <div class="max-lg:hidden" ><img src="@/assets/arrow.svg" alt="arrow"></div>
      </div>
      <div >
        <div class="">
          <iframe class="w-[650px] max-lg:w-[600px] max-md:w-[500px] max-sm:w-[350px] max-[400px]:w-[300px] h-[400px] max-md:h-[300px] max-sm:h-[250px] max-[400px]:h-[200px]" src="https://www.youtube.com/embed/ax2J_teXgH8?si=kB2q_68iOVcZrqbj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </div>

<!--  section 8  -->

  <div class="my-32 max-lg:my-16 max-sm:my-10 max-w-7xl px-10 max-[1028px]:px-6 mx-auto">
    <div class="bg-[#0328EE] rounded-3xl px-10 pt-10 max-sm:pt-5 max-[1100px]:px-5">
      <div class="text-white text-3xl max-sm:text-xl font-bold uppercase mb-10 max-sm:mb-6 text-center">НАШЕ МІСЦЕЗНАХОДЖЕННЯ</div>
      <div class="flex justify-between gap-10">
          <img class="w-[250px] mx-auto max-[1028px]:hidden" src="@/assets/phone.png" alt="">
          <img class="w-[650px] pb-10 max-[1028px]:w-full" src="@/assets/maps.png" alt="maps">
      </div>
    </div>
  </div>

</template>
