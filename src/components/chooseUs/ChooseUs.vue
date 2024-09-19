<template>
  <div class="hidden 2xl:block xl:block lg:block">
    <ChooseUsDesctop />
  </div>
  <div class="block 2xl:hidden xl:hidden lg:hidden">
    <ChooseUsMobile />
  </div>
</template>


<script setup lang="ts">
import ChooseUsDesctop from "@/components/chooseUs/_components/ChooseUsDesctop.vue";
import ChooseUsMobile from "@/components/chooseUs/ChooseUsMobile.vue";
</script>