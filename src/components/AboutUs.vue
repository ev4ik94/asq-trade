<template>
  <div class="2xl:py-[60px] xl:py-[60px] lg:py-[60px] py-[40px]
  2xl:grid xl:grid lg:grid grid-cols-2 container flex flex-col-reverse">
    <div class="h-[600px] relative hidden 2xl:block xl:block lg:block">
      <img src="/images/dots-pattern2.svg" alt="" class="absolute right-[0px] hidden 2xl:block xl:block lg:block">
      <div class="relative z-[1] w-[462px] h-[590px] rounded-[15px] border-[9px] border-white overflow-hidden shadow-lg shadow-[#B2B2B2]/[0.5]">
        <div class="w-full h-full">
          <img src="/images/shep-front.jpg" alt="" class="w-full h-full object-cover">
        </div>
      </div>

      <div class="w-[284px] h-[320px] z-[2] absolute rounded-[15px] border-[9px] border-white overflow-hidden top-[50%] right-[-50px] shadow-lg shadow-[#B2B2B2]/[0.5]" style="transform: translateY(-50%)">
        <img src="/images/courier-pic1.jpg" alt="" class="w-full h-full object-cover">
      </div>

      <div class="plashk-years bg-custom-orange w-[155px] h-[155px] absolute bottom-[-10px] right-[0px] z-[2] flex flex-col justify-center items-center">
        <p class="text-white font-outfit font-semibold text-[60px]">25</p>
        <p class="text-white text-center font-outfit text-[20px] font-semibold">{{$t('about.experience')}}</p>
      </div>
    </div>
    <div class="flex flex-col justify-center items-center 2xl:pl-[100px] xl:pl-[100px] lg:pl-[100px] ">
      <div class="bg-custom-orange py-[6px] px-[9px]  rounded-[100px] mb-[10px]">
        <p class=" text-white text-[14px]">{{$t('about.span')}}</p>
      </div>
      <p class="2xl:text-[40px] xl:text-[40px] lg:text-[40px] text-[35px] text-color-selection text-center font-semibold font-outfit mb-[8px]">{{$t('about.title')}}</p>
      <p class="2xl:text-[18px] xl:text-[18px] lg:text-[18px] text-center font-outfit text-color-custom-gray mb-[18px]">{{$t('about.text')}}</p>
      <div class="w-full  py-[20px] px-[20px] 2xl:grid xl:grid lg:grid grid-cols-2 gap-4 border-[6px] border-l-custom-orange border-b-0 border-t-0 border-r-0 mb-[40px]">
        <div class="list-items">

          <div class="flex items-center mb-[10px]">
            <img src="/icons/arrows.svg" alt="">
            <p class="font-semibold text-[14px] text-color-selection ml-[10px]">{{$t('about.list1')}}</p>
          </div>
          <div class="flex items-center mb-[10px]">
            <img src="/icons/arrows.svg" alt="">
            <p class="font-semibold text-[14px] text-color-selection ml-[10px]">{{$t('about.list2')}}</p>
          </div>
          <div class="flex items-center mb-[10px] 2xl:mb-0 xl:mb-0 lg:mb-0">
            <img src="/icons/arrows.svg" alt="">
            <p class="font-semibold text-[14px] text-color-selection ml-[10px]">{{$t('about.list3')}}</p>
          </div>
        </div>
        <div class="list-items">
          <div class="flex items-center mb-[10px] ">
            <img src="/icons/arrows.svg" alt="">
            <p class="font-semibold text-[14px] text-color-selection ml-[10px]">{{$t('about.list4')}}</p>
          </div>
          <div class="flex items-center mb-[10px] ">
            <img src="/icons/arrows.svg" alt="">
            <p class="font-semibold text-[14px] text-color-selection ml-[10px]">{{$t('about.list5')}}</p>
          </div>
          <div class="flex items-center mb-[10px] 2xl:mb-0 xl:mb-0 lg:mb-0">
            <img src="/icons/arrows.svg" alt="">
            <p class="font-semibold text-[14px] text-color-selection ml-[10px]">{{$t('about.list6')}}</p>
          </div>
        </div>
      </div>
      
      <div class="2xl:flex xl:flex lg:flex md:flex items-center self-start justify-start w-full 2xl:w-auto xl:w-auto lg:w-auto md:w-auto">
        <button class="w-full hover:bg-main-color transition 2xl:w-[220px] xl:w-[220px] lg:w-[220px] md:w-[170px] bg-color-button mr-[33px] rounded-[10px] h-[50px]  text-white font-semibold flex items-center justify-center">
          {{$t('about.contact')}}
          <span class="w-[35px] h-[35px] bg-white rounded-[5px] flex items-center justify-center ml-[15px]"><img src="/icons/check.svg" alt=""></span>
        </button>
        <a href="tel:+998901301339" class="flex items-center mt-[15px] 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0">
          <div class="w-[59px] h-[59px] bg-[#FFEAE6] rounded-[50%] flex justify-center items-center">
            <img src="/icons/phone.svg" alt="">
          </div>
          <div class="ml-[12px]">
            <p class="font-outfit text-color-selection font-semibold">{{$t('about.questions')}}</p>
            <p class="text-color-custom-gray">+998 90 130 13 39</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>


<style>

.plashk-years:before {
  content: '';
  position: absolute;
  bottom: 0;
  left: -49.5px;
  width: 0;
  height: 0;
  border-top: 0px solid transparent;
  border-bottom: 20px solid transparent;
  border-right: 50px solid #DE4F10;
}

</style>
<script setup lang="ts">
</script>