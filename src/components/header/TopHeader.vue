<script  lang="ts">
import Envelope from "@/components/icons/Envelope.vue";
import Clock from "@/components/icons/Clock.vue";
import Location from "@/components/icons/Location.vue";
import Languages from "@/components/header/Languages.vue";

export default {
  name: 'TopHeader',
  components: {
    Envelope,
    Clock,
    Location,
    Languages
  }
}
</script>

<template>
  <div class="flex justify-between px-[22px] py-[13px] border border-b-color-custom-gray border-t-0 border-l-0 border-r-0">
    <div class="flex">
      <a href="mailto:info@asq-trade.uz" class="flex items-center pr-[30px] border border-t-0 border-l-0 border-b-0 border-r-color-custom-gray">
        <span class="text-custom-orange mr-[7px]"><Envelope /></span>
        <p class="text-white text-[13px]">info@asq-trade.uz</p>
      </a>
      <div href="mailto:info@asqtrade.uz" class="flex items-center px-[30px]  border border-t-0 border-l-0 border-b-0 border-r-color-custom-gray">
        <span class="text-custom-orange mr-[7px]"><Clock /></span>
        <p class="text-white text-[13px]">9.00 - 18.00</p>
      </div>
      <a href="mailto:info@asqtrade.uz" class="flex items-center px-[30px]">
        <span class="text-custom-orange mr-[7px]"><Location /></span>
        <p class="text-white text-[13px]">г. Ташкент, Яккасарайский район, ул. Богибустон дом 129</p>
      </a>
    </div>

    <Languages />
  </div>
</template>

