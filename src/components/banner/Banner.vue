<template>
<div class="bg-main-color h-[890px] absolute left-0 top-0 right-0">
  <div class="h-full w-full">
    <img class="w-full h-full object-cover" src="/images/banner3.1.png" alt="">
  </div>
</div>

  <div class="container h-[772px] relative z-[1]">
    <div class="2xl:w-[60%] xl:w-[60%] lg:w-[60%] top-0 left-0 flex flex-col items-start justify-center h-full">
      <h1 class="font-semibold 2xl:text-[55px] xl:text-[55px] lg:text-[55px] text-[40px] text-white mb-[25px]">{{$t('banner.title')}}</h1>
      <p class="2xl:text-[20px] xl:text-[20px] lg:text-[20px] text-[18px] text-white mb-[20px]">{{$t('banner.subtitle')}}</p>
      <router-link @click="selectLink" :to="{ name: 'Home', hash: '#contactUs', params:{lang:$route.params.lang||'ru'} }" class="w-[285px] h-[62px] hover:bg-white hover:text-custom-orange flex justify-center items-center transition bg-custom-orange text-white font-semibold text-[18px] rounded-[10px] mt-[20px]">{{$t('banner.button')}}</router-link>
    </div>
  </div>
</template>

<script  lang="ts">
  export default {
    methods:{
      selectLink(){
        const elem = document.getElementById('contactUs')
        if(elem){
          const elementPosition = elem.getBoundingClientRect().top + window.pageYOffset;
          window.scroll({
            behavior: 'smooth',
            top: elementPosition,
          });
        }
      }
    }
  }
</script>