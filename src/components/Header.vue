<script setup>
import { ref } from 'vue'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/vue'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/vue/20/solid'

const menu = [
  {name: 'ПРО НАС', link:'/about'},
  {name: 'ПОСЛУГИ', link:'/about'},
  {name: 'GNSS-ПРИЙМАЧІ', link:'/about'},
  {name: 'ТАХЕОМЕТРИ', link:'/about'},
  {name: 'СКАНЕРИ', link:'/about'},
  {name: 'КОНТАКТИ', link:'/about'},
]

const mobileMenuOpen = ref(false)
</script>
<template>
  <header class="">
    <nav class="mx-auto flex max-w-7xl items-center justify-between py-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1 mr-10">
        <a href="#" class="-m-1.5 p-1.5 flex align-center">
          <img class="h-8 w-auto" src="@/assets/alfa.svg" alt="Logo" loading="lazy">/>
        </a>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white" @click="mobileMenuOpen = true">
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <PopoverGroup class="hidden lg:flex lg:gap-x-9">
        <RouterLink v-for="item in menu" :key="item.id" :to="item.link" class="text-sm font-semibold leading-6 text-white">
          {{ item.name }}
        </RouterLink>
      </PopoverGroup>
    </nav>
    <Dialog v-auto-animate class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10" />
      <DialogPanel class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#010D50] px-10 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <img class="h-8 w-auto" src="@/assets/alfa.svg" alt="" />
          </a>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-white" @click="mobileMenuOpen = false">
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-[#0228EE]">Features</a>
              <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-[#0228EE]">Marketplace</a>
              <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-[#0228EE]">Company</a>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

