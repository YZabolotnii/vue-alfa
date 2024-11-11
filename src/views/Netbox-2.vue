<script setup>
import Tech from '@/components/Tech.vue'

const tech = [
  { name: 'Канали', about: '1408' },
  { name: 'Холодний старт', about: '<60 с' },
  { name: 'Швидкий старт', about: '<15 с' },
  { name: 'Частота опускання', about: '1 Гц - 50 Гц' },
  { name: 'Частота прийому', about: '<1 c' },
  { name: 'RTK ініціалізаія', about: '<5 c' },
  { name: 'Точнічть ініціалізації', about: '99,99%' },
  { name: 'Точність часу', about: '0,02 м/c' },
];

const tech_w = [
  { name: 'Диференційне рішення', about: 'планова 0,25 м +/- 1мм висотна 0,5м +/- 1мм' },
  { name: 'Статична точність', about: 'планова 2,5 мм +/- 1 мм, висота 5 мм +/- 1 мм' },
  { name: 'Точність RTK (база)', about: 'планова 8 мм +/- 1 мм, висота 15 мм +/- 1 мм' },
  { name: 'Точність RTK', about: 'планова 8 мм +/- 0.5 мм, висота 15 мм +/- 0.5 мм' },
]

const phis = [
  { name: 'Матеріал', about: 'Магнієвий сплав' },
  { name: 'Розмір', about: '100мм*100мм (без нижнього з\'єднувача)' },
  { name: 'Вага', about: '<0.5 кг' },
  { name: 'Робоча температура', about: '-40°C до 75°С' },
  { name: 'Температура зберігання', about: '-55°С до 85°С' },
  { name: 'Захист', about: 'IP67, захищений від 30-хвилинного занурення на глибину 1м' },
  { name: 'Міцність', about: 'Падіння з висоти 2-ох метрів на бетон' },
  { name: 'Вібрації', about: 'MIL-STD-810G' },
  { name: 'Вологість', about: '100% вологостійкість' },
  { name: 'Матеріал', about: 'fff' },
]

const IMU = [
  { name: '4D ініціалізація', about: '3 с' },
  { name: 'IMU швидкість оновлення', about: '400 гц' },
  { name: 'IMU точність', about: '<2,5 см з нахилом 30°' },
  { name: 'IMU компенсація нахилу', about: '0°-60°' },
]

const info = [
  { name: 'Диференціальні дані', about: 'RTCM 2.X, RTCM.X' },
  { name: 'GPS', about: 'NMEA 0183s RTK, Binary code' },
]

const battery = [
  {name: 'Батарея', about: 'Li-ion акумулятор'},
  {name: 'Живлення', about: 'зовнішній ввід живлення 9-24В постійного струму'},
  {name: 'Швидка зарядка', about: '+'},
  {name: 'Ємність батареї', about: '6800 мА/год'},
  {name: 'Життя батареї', about: '14 років'},
]

const inshe = [
  {name: 'ОС', about: 'LINUX'},
  {name: 'Контролер', about: 'Android-девайс'},
  {name: 'Індикатори', about: '1* індикатор живлення, 1* індикатор Bluetooth, 1* індикатор даних, 1* Індикатор супутника'},
]


</script>
<template>
  <div class="max-w-7xl px-10 max-[1028px]:px-6 mx-auto">
    <div class="w-full flex justify-between items-center max-w-7xl mx-auto my-16">
      <div class="w-1/2 max-lg:w-full max-lg:max-w-lg max-lg:mx-auto">
        <div class="text-white text-[60px] font-bold text-center mb-10 max-lg:text-[40px]">NETBOX 2 LITE</div>
        <div
          style="background: rgba(255, 255, 255, 0.60); box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.25)"
          class="rounded-3xl rounded-b-none text-center lg:hidden p-8 "
        >
          <img class="text-center w-[300px] mx-auto" src="@/assets/g-2-lg.png" alt="">
        </div>
        <div
          class="rounded-3xl px-10 py-16 text-white text-5xl text-center max-lg:px-5 max-lg:py-8 max-lg:text-2xl max-lg:rounded-t-none"
          style="background: linear-gradient(90deg, rgba(3, 40, 238, 0.30) 0%, rgba(1, 23, 136, 0.30) 100%)"
        >120 000 гривень</div>
      </div>
      <div
        style="background: rgba(255, 255, 255, 0.60); box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.25)"
        class="max-lg:hidden rounded-3xl p-16 text-center max-lg:p-8"
      >
        <img class="w-full " src="@/assets/g-2-lg.png" alt="">
      </div>
    </div>


    <div class="mb-16">
      <div class="text-white text-3xl mb-8">
        <span class="font-bold">NetBox2 Lite</span> — це нове покоління компактних інтелектуальних приймачів GNSS, розроблених для різноманітних геодезичних проектів із використанням найновіших функцій GNSS. Цей приймач оснащений сучасними необхідними технологіями, такими як модуль Bluetooth, датчик нахилу IM, внутрішній літійіонний акумулятор ємністю 6800 мАг тощо. може працювати в різних режимах роботи (Мережевий RTK, Статичний і PPK) на основі різних необхідних точності та умови.
      </div>
      <div class="text-white text-3xl">
        <span class="font-bold">NetBox2 Lite</span> — це найекономічніший пакет GNSS, який ви можете придбати, щоб задовольнити свої технічні потреби на полі!
      </div>
    </div>

<!--  tech  -->

    <div class="mb-8">
      <div
        style="background: rgba(1, 23, 136, 0.80)"
        class="rounded-3xl p-16"
      >

        <div class="text-white text-[40px] font-bold text-center uppercase mb-10">Технічні характеристики</div>

        <div class="w-full h-full flex text-white">
          <div class="w-1/2 flex">
            <div class="border-white border p-1.5 flex-grow flex items-center ">Супутники</div>
          </div>
          <div class="w-1/2 flex">
            <div class="border-white border p-1.5 flex-grow">
              GPS: L1 C/A, L2C, L2P, L5 <br>
              GLONASS: L1C/A, L1P, L2 C/A, L2P <br>
              BEIDOU: B1, B2, B3, B1C, B2a, B2b <br>
              GALILEO: E1, E5a, E5b QZSS: L1, L2C, L5 <br>
              SBAS: WAAS, EGNOS, MSAS, GAGAN, SDCM <br>
              IRNSS: L5
            </div>
          </div>
        </div>

        <div v-for="item in tech" :key="item.id" class="w-full h-full flex text-white">
          <div class="w-1/2 ">
            <div class="border-white border p-1.5">{{ item.name }}</div>
          </div>
          <div class="w-1/2">
            <div class="border-white border p-1.5">
              {{ item.about }}
            </div>
          </div>
        </div>

      </div>
    </div>

<!--  white  -->

    <div class="mb-8">
      <div class="rounded-3xl p-16 bg-white text-[#0328EE]">

        <div class=" text-[40px] font-bold text-center uppercase mb-10">ТОЧНІСТЬ</div>

        <div v-for="item in tech_w" :key="item.id" class="w-full h-full flex text-white">
          <div class="w-1/2 flex">
            <div class="text-[#0328EE] border-[#0328EE] border p-1.5 flex-grow flex items-center ">
              {{ item.name }}
            </div>
          </div>
          <div class="w-1/2 flex">
            <div class="text-[#0328EE] border-[#0328EE] border p-1.5 flex-grow">
              {{ item.about }}
            </div>
          </div>
        </div>

      </div>
    </div>

<!--  Blocks  -->

    <div class="flex w-full gap-6">

      <div class="w-1/2 ">
        <Tech class="mb-6" header="ФІЗИЧНІ ВЛАСТИВОСТІ" :about="phis" />
        <Tech class="mb-6" header="IMU" :about="IMU" />
        <Tech header="ФОРМАТИ ІНФОРМАЦІЇ" :about="info" />
      </div>

      <div class="w-1/2 ">
        <Tech class="mb-6" header="БАТАРЕЯ " :about="battery" />
        <div style="background: rgba(1, 23, 136, 0.80)" class="rounded-3xl p-8 bg-white text-white mb-6">
          <div class="text-[32px] font-bold uppercase mb-4">ЗБЕРІГАННЯ</div>
          <div class=" uppercase mb-4">8 ГБ вбудованої пам’яті, підтримує циклічне зберігання, з можливістю збору необроблених спостережень протягом одного року на основі 5-секундного інтервалу</div>
        </div>
        <Tech class="mb-6" header="ІНШЕ" :about="inshe" />
      </div>

    </div>


  </div>
</template>

<style>
</style>
