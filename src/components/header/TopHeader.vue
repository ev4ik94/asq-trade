<script setup lang="ts">
import Envelope from "@/components/icons/Envelope.vue";
import Clock from "@/components/icons/Clock.vue";
import Location from "@/components/icons/Location.vue";
</script>

<template>
  <div class="flex justify-between px-[22px] py-[13px] border border-b-color-custom-gray border-t-0 border-l-0 border-r-0">
    <div class="flex">
      <a href="mailto:info@asqtrade.uz" class="flex items-center pr-[30px] border border-t-0 border-l-0 border-b-0 border-r-color-custom-gray">
        <span class="text-custom-orange mr-[7px]"><Envelope /></span>
        <p class="text-white text-[13px]">info@asqtrade.uz</p>
      </a>
      <div href="mailto:info@asqtrade.uz" class="flex items-center px-[30px]  border border-t-0 border-l-0 border-b-0 border-r-color-custom-gray">
        <span class="text-custom-orange mr-[7px]"><Clock /></span>
        <p class="text-white text-[13px]">9.00 - 18.00</p>
      </div>
      <a href="mailto:info@asqtrade.uz" class="flex items-center px-[30px]">
        <span class="text-custom-orange mr-[7px]"><Location /></span>
        <p class="text-white text-[13px]">17Street 16th Ave SE Unit Arenton, WA 98058-5055</p>
      </a>
    </div>

    <div class="flex">
      <router-link
                   :class="{
                      'text-white': currentLanguage!=='ru',
                      'text-[14px]': true,
                      'hover:text-custom-orange': true,
                      'transition': true,
                      'text-custom-orange': currentLanguage==='ru',
                   }"
                   :to="{ name: 'Home', params: { lang: 'ru' } }">Русский</router-link>
      <span class="text-white">&nbsp;|&nbsp;</span>
      <router-link :class="{
                      'text-white': currentLanguage!=='uz',
                      'text-[14px]': true,
                      'hover:text-custom-orange': true,
                      'transition': true,
                      'text-custom-orange': currentLanguage==='uz',
                   }"
                   :to="{ name: 'Home', params: { lang: 'uz' } }">O`zbek</router-link>
      <span class="text-white">&nbsp;|&nbsp;</span>
      <router-link :class="{
                      'text-white': currentLanguage!=='en',
                      'text-[14px]': true,
                      'hover:text-custom-orange': true,
                      'transition': true,
                      'text-custom-orange': currentLanguage==='en',
                   }"
                   :to="{ name: 'Home', params: { lang: 'en' } }">English</router-link>


    </div>
  </div>
</template>

<script lang="ts">

export default {
  computed: {
    currentLanguage() {
      console.log(this.$route.params.lang==='ru')
      return this.$route.params.lang || 'ru';
    }
  }
}
</script>

<style>

</style>