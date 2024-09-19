<template>
  <div class="bg-[#F2F8FA] relative">
    <img src="/images/service-patern-icon.svg" alt="" class="absolute top-0 left-0 w-[500px]">
    <img src="/images/arrow-patern.svg" alt="" class="absolute top-[550px] left-0 w-[100px] hidden 2xl:block xl:block lg:block">
    <img src="/images/arrow-patern.svg" alt="" class="absolute top-[10px] right-0 w-[100px] rotate-[180deg] hidden 2xl:block xl:block lg:block">


    <div class="2xl:py-[60px] xl:py-[60px] lg:py-[60px] py-[40px] container relative">
      <img src="/images/pattern-dots.svg" alt="" class="absolute right-[0px] z-[1] bottom-[10px]">
      <div class="flex flex-col justify-center items-center ">
        <div class="bg-custom-orange py-[6px] px-[10px] rounded-[100px] mb-[12px]">
          <p class="text-white text-[14px]">{{$t('service1.span')}}</p>
        </div>
        <h1 class="2xl:text-[40px] xl:text-[40px] lg:text-[40px] text-[35px] mb-[9px] text-color-selection font-semibold font-outfit">{{$t('service1.title')}}</h1>
        <p class="text-color-custom-gray text-center">{{$t('service1.text')}}</p>
      </div>

      <div class="2xl:grid xl:grid lg:grid grid-cols-3 gap-4 mt-[40px] relative z-[1]">
        <div v-for="{id, title, description, icon, image} in services" :key="id"
             class="rounded-[10px] bg-white overflow-hidden shadow-lg shadow-[#8997BA]/[0.3]
             mb-[15px] 2xl:mb-0 xl:mb-0 lg:mb-0 flex flex-col justify-between">
          <div class="2xl:h-[282px] xl:h-[282px] lg:h-[282px] h-[262px]">
            <img :src="image" alt="{{title}}" class="w-full h-full object-cover">

          </div>

          <div class="2xl:py-[52px] xl:py-[52px] lg:py-[52px] py-[45px] px-[40px] relative">
            <div class="w-[88px] h-[88px] absolute rounded-[50%] bg-white border-4
          border-[#FFEAE6] flex justify-center items-center top-[-20%] left-[50px]">
              <img :src="icon" alt="">
            </div>
            <p class="text-[22px] text-color-selection font-semibold font-outfit">{{$t(title)}}</p>
            <p class="mt-[12px] mb-[15px] text-color-custom-gray">{{$t(description)}}</p>

          </div>
          <button class="text-[14px] mb-[20px] ml-[40px] mr-[40px] font-semibold text-custom-orange px-[30px] h-[46px]
          rounded-[10px] bg-custom-orange/[0.2] hover:bg-custom-orange hover:text-white transition">{{$t('service.button')}}</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script  lang="ts">

export default {
  data(){
    return {
      services: [{
        id: 1,
        title: 'service2.title',
        description: 'service2.text',
        icon: '/icons/shep.svg',
        image: '/images/pic-service-shep.jpg'
      },
        {
          id: 2,
          title: 'service3.title',
          description: 'service3.text',
          icon: '/icons/truck.svg',
          image: '/images/pic-service-truck.jpg'
        },
        {
          id: 3,
          title: 'service4.title',
          description: 'service4.text',
          icon: '/icons/air-plane.svg',
          image: '/images/pic-service1.jpg'
        }]
    }
  },

}
</script>