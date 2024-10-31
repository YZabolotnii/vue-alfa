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
  {head: 'NETBOX 2', img: 'ddd', text: 'Універсальний GNSS приймач, з 1408 каналами та вбудованим модулем IMU, внутрішнім радіо', link:'/about'},
  {head: 'NETBOX 2 LITE', img: 'ddd', text: 'Універсальний GNSS приймач, з 1408 каналами та вбудованим датчиком IMU, внутрішнім радіо', link:'/about'},
  {head: 'L2', img: 'ddd', text: 'Найменший GNSS приймач з 1408 каналами, компенсатором IMU до 60 градусів та вагою 170 грам', link:'/about'},
  {head: 'MATRIX II', img: 'ddd', text: 'MATRIX II — це лазерний AR RTK нового покоління, призначений для будь якого геодезичного завдання.', link:'/about'},
  {head: 'GEOPULS', img: 'ddd', text: 'GeoPuls — абсолютно новий прилад RTK з функцією лазера та модулем IMU з можливістю працювати під кутом до 120 градусів', link:'/about'},
  {head: 'L 100', img: 'ddd', text: 'Новий L300 оснащений новим вбудованим радіоприймачем із типовою робочою відстанню до 15 км.', link:'/about'},
]

const tacheometr = [
  {head: 'ALPHA X', img: 'ddd', text: 'Двохсекундний тахеометр, має вбудовани Bluetooth модуль, що підтримує з’єднання з польовим з програмним забезпеченням SurPro 6.0', link:'/about'},
  {head: 'ALPHA Y', img: 'ddd', text: 'Двохсекундний тахеометр з вбудованим програмним забезпеченням SurPro 6.0 на базі ОС Android', link:'/about'},
]

const scaner = [
  {head: 'LIXEL K1', img: 'ddd', text: 'Це інноваційний ручний лазерний сканер, який поєднує у собі потужні технології для створення точних тривимірних моделей', link:'/about'},
  {head: 'SLAM R100', img: 'ddd', text: 'SLAM R100 — це портативний пристрій 3D-побудови в реальному часі', link:'/about'},
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
</style>
<template>
  <!--  section 1  -->
  <div class="mt-8 flex flex-col items-center w-full max-[500px]:-mb-8 max-[500px]:-mt-3">
    <div class="w-full flex justify-center items-center text-3xl text-bold">

      <div class="main-img w-full h-full max-[1028px]:!w-3/4 max-[1028px]:!h-[400px] max-[900px]:!h-[300px] max-[700px]:!h-[250px] max-[600px]:!h-[200px]"></div>

    </div>
  </div>

  <!--  section 2  -->
  <div class="">
    <div class="my-16">
      <h1 class="text-white text-5xl font-bold mb-5">
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
      <div class="flex w-full gap-8">
        <div class="w-2/3 h-[450px] rounded-xl" style="background: #0328EE;"></div>
        <div class="w-1/3 flex flex-col gap-8">
          <div class="h-1/2 rounded-xl" style="background: #0328EE;"></div>
          <div class="h-1/2 rounded-xl" style="background: #0328EE;"></div>
        </div>
      </div>
    </div>

  </div>

<!--  section 3  -->

<!--  <div class="relative h-[600px]">-->
<!--    <div class="absolute h-[600px] w-full bg-amber-300 flex justify-center items-center text-3xl text-bold"></div>-->
<!--  </div>-->

<!--  section 4  -->

  <div class="mt-32">
    <div>
      <DeviceHead deviceTitle="GNSS - ПРИЙМАЧІ" />
      <div class="grid grid-cols-3 gap-8 w-fit my-16 ml-auto max-[1028px]:mx-auto max-[1028px]:flex-wrap max-[1028px]:grid-cols-2 max-[640px]:grid-cols-1">
        <DeviceCard
          v-for="item in gnss"
          :key="item.id"
          :head="item.head"
          :img="item.img"
          :text="item.text"
          :link="item.link"
          width="w-[270px]"
        />
      </div>
    </div>
  </div>

<!--  section 5  -->

  <div class="mt-32">
    <div>
      <DeviceHead deviceTitle="ТАХЕОМЕТРИ" />
      <div class="grid grid-cols-2 gap-8 w-fit my-16 ml-auto max-[768px]:mx-auto max-[768px]:grid-cols-1">
        <DeviceCard
          v-for="item in tacheometr"
          :key="item.id"
          :head="item.head"
          :img="item.img"
          :text="item.text"
          :link="item.link"
          width="w-[350px]"
        />
      </div>
    </div>
  </div>

<!--  section 6  -->

  <div class="mt-32">
    <div>
      <DeviceHead deviceTitle="СКАНЕРИ" />
      <div class="grid grid-cols-2 gap-8 w-fit my-16 ml-auto max-[768px]:mx-auto max-[768px]:grid-cols-1">
        <DeviceCard
          v-for="item in scaner"
          :key="item.id"
          :head="item.head"
          :img="item.img"
          :text="item.text"
          :link="item.link"
          width="w-[350px]"
        />
      </div>
    </div>
  </div>

<!--  section 7  -->

  <div class="mt-32">
    <div class="flex justify-between items-center gap-10 max-[1028px]:flex-col">
      <div class="flex flex-col gap-10">
        <div class="text-white text-5xl font-bold">А подивитись відео про прилади ви можете тут</div>
        <div><img src="@/assets/arrow.svg" alt="arrow"></div>
      </div>
      <div >
        <div class="w-[650px] h-[400px] bg-indigo-700 max-[1028px]:w-[300px]"></div>
      </div>
    </div>
  </div>

<!--  section 8  -->

  <div class="my-32">
    <div class="bg-[#0328EE] rounded-3xl px-10 pt-10 max-[1100px]:px-5">
      <div class="text-white text-3xl font-bold uppercase mb-10 text-center">НАШЕ МІСЦЕЗНАХОДЖЕННЯ</div>
      <div class="flex justify-between gap-10">
          <img class="w-[250px] mx-auto max-[1028px]:hidden" src="@/assets/phone.png" alt="">
          <img class="w-[650px] pb-10 max-[1028px]:w-full" src="@/assets/maps.png" alt="maps">
      </div>
    </div>
  </div>

</template>
