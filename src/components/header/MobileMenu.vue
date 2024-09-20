<template>
  <Languages />
  <div class="flex flex-col justify-center items-center mt-[15px] border border-b-color-custom-gray border-l-0 border-t-color-custom-gray border-r-0">
    <a href="mailto:info@asqtrade.uz" class="flex items-center py-[12px]">
      <span class="text-custom-orange mr-[7px]"><Envelope /></span>
      <p class="text-white text-[13px] mb-0">info@asqtrade.uz</p>
    </a>
    <div  class="flex items-center py-[12px]">
      <span class="text-custom-orange mr-[7px]"><Clock /></span>
      <p class="text-white text-[13px] mb-0">9.00 - 18.00</p>
    </div>
    <a href="mailto:info@asqtrade.uz" class="flex items-center py-[12px]">
      <span class="text-custom-orange mr-[7px]"><Location /></span>
      <p class="text-white text-[13px] mb-0">г. Ташкент, Яккасарайский район, ул. Богибустон дом 129</p>
    </a>
  </div>

<Categoeis />
</template>
<script  lang="ts">
import Languages from "@/components/header/Languages.vue";
import Envelope from "@/components/icons/Envelope.vue";
import Location from "@/components/icons/Location.vue";
import Clock from "@/components/icons/Clock.vue";
import Categoeis from '@/components/header/Categoeis.vue'

export default {
  name: 'MobileMenu',
  components:{
    Categoeis,
    Clock,
    Location,
    Envelope,
    Languages
  }
}
</script>