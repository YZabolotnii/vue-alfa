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
  { name: 'Точність часу', about: '20 нс' },
];

const tech_w = [
  { name: 'Статична точність', about: 'планова 2,5 мм +/- 1 мм, висота 5 мм +/- 1 мм' },
  { name: 'Точність RTK', about: 'планова 8 мм +/- 0.5 мм, висота 15 мм +/- 0.5 мм' },
  { name: 'Лазерне знімання', about: '+/- 1 см + 5 мм/м' },
]

const phis = [
  { name: 'Матеріал', about: 'Полімерні матеріали' },
  { name: 'Розмір', about: '136.6мм * 65 мм * 56мм' },
  { name: 'Вага', about: '300 г' },
  { name: 'Кнопки', about: '1* Кнопка живлення' },
  { name: 'Індикатори', about: '1* індикатор живлення, 1* індикатор Bluetooth, 1* індикатор даних, 1* Індикатор супутника' },
  { name: 'Робоча температура', about: '-20°C до 75°С' },
  { name: 'Температура зберігання', about: '-40°С до 85°С' },
  { name: 'Захист', about: 'IP67, захищений від 30-хвилинного занурення на глибину 1м' },
  { name: 'Міцність', about: 'Падіння з висоти 2-ох метрів на бетон' },
  { name: 'Вібрації', about: 'MIL-STD-810G' },
  { name: 'Вологість', about: '100% вологостійкість' },
]

const IMU = [
  { name: 'IMU', about: 'Підтримує 4D IMU ініціалізацію за 3 с' },
  { name: 'Частота опускання', about: '400 Гц' },
  { name: 'IMU точність', about: '<2,5 см з нахилом до 120°' },
  { name: 'IMU компенсація нахилу', about: '0°-120°' },
]

const battery = [
  {name: 'Батарея', about: 'Li-ion акумулятор'},
  {name: 'Живлення', about: 'зовнішній взід живлення 9-24В постійного струму'},
  {name: 'Швидка зарядка', about: '+'},
  {name: 'Час роботи', about: '12 років'},
  {name: 'Ємність батареї', about: '1800 мА/год'},
]

const inshe = [
  {name: 'Передача даних', about: 'Type-C'},
  {name: '4G модем', about: 'Вбудований повночастотний багатодіапазонний модем 4G, підтримує WCDMA, CDMA2000, TDD-LTE, FDD-LTE'},
  {name: 'Bluetooth', about: 'Подвійний режим Bluetooth'},
  {name: 'Формат даних', about: 'RTCM 2x, RTCM 3x, CMR & CMR+, sCMRx'},
  {name: 'GPS', about: 'NMEA 0183s RTK, Binary code'},
 ]


</script>
<template>
  <div class="max-w-7xl px-10 max-[1028px]:px-6 mx-auto">
    <div class="w-full flex justify-between items-center max-w-7xl mx-auto my-16 max-md:mt-4">
      <div class="w-1/2 max-lg:w-full max-lg:max-w-lg max-lg:mx-auto">
        <div class="text-white text-[60px] font-bold text-center mb-10 max-lg:text-[40px]">GEOPULS</div>
        <div
          style="background: rgba(255, 255, 255, 0.60); box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.25)"
          class="rounded-3xl rounded-b-none text-center lg:hidden p-8 "
        >
          <img class="text-center w-[300px] mx-auto" src="@/assets/geopulse.png" alt="">
        </div>
        <div
          class="rounded-3xl px-10 py-16 text-white text-5xl text-center max-lg:px-5 max-lg:py-8 max-lg:text-2xl max-lg:rounded-t-none"
          style="background: linear-gradient(90deg, rgba(3, 40, 238, 0.30) 0%, rgba(1, 23, 136, 0.30) 100%)"
        >від 119 000 гривень</div>
      </div>
      <div
        style="background: rgba(255, 255, 255, 0.60); box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.25)"
        class="max-lg:hidden rounded-3xl p-16 text-center max-lg:p-8"
      >
        <img class="w-full " src="@/assets/geopulse.png" alt="">
      </div>
    </div>


    <div class="mb-16">
      <div class="text-white text-3xl max-md:text-xl mb-8">
        <span class="font-bold">GeoPuls</span> — абсолютно новий прилад RTK з функцією лазера. Його зовнішній вигляд сміливий та інноваційний, а його продуктивність вражаюча. Ґрунтуючись на досвіді попереднього покоління лазерного обладнання, ми внесли додаткові вдосконалення, включаючи відсутність більш частого калібрування та використання зеленого лазера для вирішення проблеми, коли важко навестись при яскравому світлі. У реальному часі він вимірює, куди ви націлилися, і замінює віху в традиційному методі вимірювання. GeoPuls – це продукт, який дійсно потрібен геодезистам. </div>
      <div class="text-white text-3xl max-md:text-xl">
        <span class="font-bold">Комплектація:</span><br>
        <span class="ml-2">1. GNSS приймач AlphaGeo GeoPuls</span> <br>
        <span class="ml-2">2. Зарядні пристрої</span> <br>
        <span class="ml-2">3. Перехідник для віхи</span> <br>
        <span class="ml-2">4. Програмне забезпечення SurPro 6.0</span>
      </div>
    </div>

<!--  tech  -->

    <div class="mb-8">
      <div
        style="background: rgba(1, 23, 136, 0.80)"
        class="rounded-3xl p-16 max-md:p-8"
      >

        <div class="text-white text-[40px] max-md:text-[30px] font-bold uppercase mb-10 max-md:mb-5">Технічні характеристики</div>

        <div class="w-full h-full flex text-white">
          <div class="w-1/2 flex">
            <div class="border-white border p-1.5 flex-grow flex items-center ">Супутники</div>
          </div>
          <div class="w-1/2 flex">
            <div class="border-white border p-1.5 flex-grow">
              GPS: L1 C/A, L2C, L2P, L5 <br>
              GLONASS® L1, L2 <br>
              BEIDOU: B1, B2, B3, B1C, B2a, B2k <br>
              GALILEO: El/E5a/E5b/E6 <br>
              QZSS: L1/L2/L5/L6 <br>
              SBAS: L1, L5 <br>
              GAGAN, SDCM
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
      <div class="rounded-3xl p-16 max-md:p-8 bg-white text-[#0328EE]">

        <div class=" text-[40px] max-md:text-[30px] font-bold uppercase mb-10 max-md:mb-5">ПОЗИЦІОНУВАННЯ</div>

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

    <div class="flex max-md:flex-col w-full gap-6 mb-16">

      <div class="w-1/2 max-md:w-full">
        <Tech class="mb-6" header="ФІЗИЧНІ ВЛАСТИВОСТІ" :about="phis" />
        <Tech class="mb-6" header="IMU" :about="IMU" />
      </div>

      <div class="w-1/2 max-md:w-full">
        <Tech class="mb-6" header="БАТАРЕЯ " :about="battery" />
        <Tech class="mb-6" header="ЗВ'ЯЗОК" :about="inshe" />
      </div>

    </div>


  </div>
</template>

<style>
</style>
