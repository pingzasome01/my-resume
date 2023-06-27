<script setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const change = (e) => {
  locale.value = e
}
</script>
<template>
  <header class="text-gray-700 body-font border-b border-gray-200">
    <div class="container mx-auto flex flex-wrap p-5 flex-col fixed z-10 md:flex-row items-center">
      <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <img class="h-12 w-12 rounded-full" src="../assets/images/Lemon.jpg" alt="" />
        <span class="ml-3 text-xl profilefont">My Personal Profile</span>
      </a>
      <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <a href="#Home" class="mr-5 hover:text-gray-900">{{ $t('Navigator.Home') }}</a>
        <a href="#Aboutme" class="mr-5 hover:text-gray-900">{{ $t('Navigator.about') }}</a>
        <a href="#Tools" class="mr-5 hover:text-gray-900">{{ $t('Navigator.tool') }}</a>
        <a class="mr-5 hover:text-gray-900">{{ $t('Navigator.contact') }}</a>
      </nav>
      <div class="flex">
        <img
          class="w-9 h-9 p-1 mt-1"
          src="../assets/images/flag/Thailand.png"
          @click="change('th')"
        />
        <img
          class="w-11 p-1 h-11"
          src="../assets/images/flag/England-Flag-Transparent-Free-PNG.png"
          @click="change('en')"
        />
      </div>
      <!-- <button class="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">Button
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button> -->
    </div>
  </header>
</template>
