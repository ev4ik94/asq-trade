<template>
  <div class="bg-main-color flex relative z-10 justify-between 2xl:justify-start xl:justify-start lg:justify-start">
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
    <div class="w-full hidden 2xl:block xl:block lg:block ">
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
            <p class="text-[16px] text-white">{{ $t('callUs') }}</p>
            <p class="text-[18px] text-white font-bold">+998 90 130 13 39</p>
          </a>
        </div>
      </div>





    </div>
    <div v-if="scrollY>150">
      <HeaderScroll />
    </div>
  </div>


</template>

<style>
.ant-drawer-wrapper-body{
  background-color: #104B59;
}

.anticon{
  color: #fff;
}
</style>




<script  lang="ts">

import Logo from "@/components/header/Logo.vue";
import MobileMenu from "@/components/header/MobileMenu.vue";
import HeaderScroll from "@/components/header/HeaderScroll.vue";
import Phone from "@/components/icons/Phone.vue";
import Categoeis from "@/components/header/Categoeis.vue";
import TopHeader from "@/components/header/TopHeader.vue";


import {ref, onMounted, onUnmounted, watch} from 'vue';
import {useRoute} from "vue-router";

export default {
  components:{
    HeaderScroll,
    Phone,
    Categoeis,
    TopHeader,
    MobileMenu,
    Logo
  },
  setup() {
    const scrollY = ref(0); // Для хранения текущей позиции прокрутки
    const showMenu = ref(false)
    const route = useRoute()
    const currentRoute = ref(route.hash);

    // Функция для обновления scrollY при скролле
    const onScroll = () => {
      scrollY.value = window.scrollY;
    };

    // Добавляем слушатель событий при монтировании компонента
    onMounted(() => {
      window.addEventListener('scroll', onScroll);
    });

    watch(
        () => route.hash, // Отслеживаем изменение полного пути
        (newRoute, oldRoute) => {

          currentRoute.value = newRoute;
          showMenu.value = false
        }
    );

    // Удаляем слушатель событий при размонтировании компонента
    onUnmounted(() => {
      window.removeEventListener('scroll', onScroll);
    });

    function  showDrawer(){
      showMenu.value = !showMenu.value
    }

    return {
      scrollY,showMenu, showDrawer
    };
  },
};
</script>