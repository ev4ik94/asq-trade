<template>
  <div class="bg-main-color flex shadow-xl fixed top-0 left-0 w-full justify-between 2xl:justify-start xl:justify-start lg:justify-start">
    <Logo />
    <button @click="showDrawer" class="text-white bg-custom-orange block 2xl:hidden xl:hidden lg:hidden
    w-[74px] h-[74px] flex items-center justify-center">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 12H21M3 6H21M3 18H21" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>

    <a-drawer
        v-model:open="showMenu"
        class="custom-class"
        root-class-name="root-class-name"
        :root-style="{ color: 'blue' }"
        style="color: red"
        placement="right"
    >
      <MobileMenu />
    </a-drawer>

    <div class="w-full  hidden 2xl:flex xl:flex lg:flex justify-end items-center">
      <Categoeis />
      <div class="px-[25px] flex py-[10px] ">
        <div class="w-[52px] h-[52px] flex items-center justify-center bg-custom-orange/[0.3] rounded-[50%] mr-[15px]">
          <div class="text-white w-[42px] h-[42px] flex items-center justify-center bg-custom-orange rounded-[50%]">
            <Phone />
          </div>
        </div>

        <a href="tel:+998901301339" class="block">
          <p class="text-[16px] text-white">{{ $t('callUs') }}</p>
          <p class="text-[18px] text-white font-bold">+998 90 130 13 39</p>
        </a>
      </div>
    </div>
  </div>

</template>
<script  lang="ts">
import Categoeis from "@/components/header/Categoeis.vue";
import Phone from "@/components/icons/Phone.vue";
import Logo from "@/components/header/Logo.vue";
import MobileMenu from "@/components/header/MobileMenu.vue";
import {ref, watch} from 'vue'
import {useRoute} from "vue-router";

export default {
  name: 'HeaderScroll',
  components: {
    MobileMenu, Logo,
    Categoeis,
    Phone
  },

  setup(){
    const showMenu = ref(false)
    const route = useRoute()
    const currentRoute = ref(route.hash);
    function  showDrawer(){
      showMenu.value = !showMenu.value
    }

    watch(
        () => route.hash, // Отслеживаем изменение полного пути
        (newRoute, oldRoute) => {

          currentRoute.value = newRoute;
          showMenu.value = false
        }
    );

    return {
      showDrawer, showMenu
    }
  }
};
</script>

