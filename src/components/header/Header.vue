<template>
  <div class="bg-main-color flex relative z-10">
    <Logo />
    <div class="w-full">
      <TopHeader />
      <div class="w-full  flex justify-end items-center">
        <Categoeis />
        <div class="px-[25px] flex py-[10px] ">
          <div class="w-[52px] h-[52px] flex items-center justify-center bg-custom-orange/[0.3] rounded-[50%] mr-[15px]">
            <div class="text-white w-[42px] h-[42px] flex items-center justify-center bg-custom-orange rounded-[50%]">
              <Phone />
            </div>
          </div>
          <a href="tel:+998901301339" class="block">
            <p class="text-[16px] text-white">Позвонить нам</p>
            <p class="text-[18px] text-white font-bold">+998 90 130 13 39</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

</style>

<script setup lang="ts">

import TopHeader from "@/components/header/TopHeader.vue";
import Logo from "@/components/header/Logo.vue";
import Categoeis from "@/components/header/Categoeis.vue";
import Phone from "@/components/icons/Phone.vue";
</script>