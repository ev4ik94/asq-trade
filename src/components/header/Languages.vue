<template>
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
</template>

<script lang="ts">

export default {
  computed: {
    currentLanguage() {
      return this.$route.params.lang || 'ru';
    }
  }
}
</script>