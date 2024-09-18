<template>
  <div class="py-[60px] grid grid-cols-2 container">
    <div class="relative">
      <img src="/images/dots-pattern2.svg" alt="" class="absolute right-[0px]">
      <div class="relative z-[1] w-[462px] h-[590px] rounded-[15px] border-[9px] border-white overflow-hidden shadow-lg shadow-[#B2B2B2]/[0.5]">
        <div class="w-full h-full">
          <img src="/images/shep-front.jpg" alt="" class="w-full h-full object-cover">
        </div>
      </div>

      <div class="w-[284px] h-[320px] z-[2] absolute rounded-[15px] border-[9px] border-white overflow-hidden top-[50%] right-[-50px] shadow-lg shadow-[#B2B2B2]/[0.5]" style="transform: translateY(-50%)">
        <img src="/images/courier-pic1.jpg" alt="" class="w-full h-full object-cover">
      </div>

      <div class="plashk-years bg-custom-orange w-[155px] h-[155px] absolute bottom-[-20px] right-[0px] z-[2] flex flex-col justify-center items-center">
        <p class="text-white font-outfit font-semibold text-[60px]">1</p>
        <p class="text-white text-center font-outfit text-[20px] font-semibold">Years of
          Experience</p>
      </div>
    </div>
    <div class="flex flex-col justify-center items-center pl-[100px] ">
      <div class="bg-custom-orange py-[6px] px-[9px]  rounded-[100px] mb-[10px]">
        <p class=" text-white text-[14px]">ABOUT LOGISCO</p>
      </div>
      <p class="text-[40px] text-color-selection text-center font-semibold font-outfit mb-[8px]">We’ll keep your items
        damage free</p>
      <p class="text-[18px] text-center font-outfit text-color-custom-gray mb-[18px]">Logisco Air freight service deliver the knowledge & opportunity to optimize every mile on every lane. Get full-service Truckload division provide more options to manage costs by combining  technology intelligence.</p>
      <div class="py-[20px] px-[30px] grid grid-cols-2 gap-4 border-[6px] border-l-custom-orange border-b-0 border-t-0 border-r-0 mb-[40px]">
        <div class="list-items">

          <div class="flex items-center">
            <img src="/icons/arrows.svg" alt="">
            <p class="font-semibold font-outfit text-color-selection ml-[10px]">Intermodal Shipping</p>
          </div>
          <div class="flex items-center">
            <img src="/icons/arrows.svg" alt="">
            <p class="font-semibold font-outfit text-color-selection ml-[10px]">Freeze product Shipping</p>
          </div>
          <div class="flex items-center">
            <img src="/icons/arrows.svg" alt="">
            <p class="font-semibold font-outfit text-color-selection ml-[10px]">Hot Shot Trucking</p>
          </div>
        </div>
        <div class="list-items">
          <div class="flex items-center">
            <img src="/icons/arrows.svg" alt="">
            <p class="font-semibold font-outfit text-color-selection ml-[10px]">Intermodal Shipping</p>
          </div>
          <div class="flex items-center">
            <img src="/icons/arrows.svg" alt="">
            <p class="font-semibold font-outfit text-color-selection ml-[10px]">Freeze product Shipping</p>
          </div>
          <div class="flex items-center">
            <img src="/icons/arrows.svg" alt="">
            <p class="font-semibold font-outfit text-color-selection ml-[10px]">Hot Shot Trucking</p>
          </div>
        </div>
      </div>
      
      <div class="flex items-center justify-start self-start">
        <button class="bg-color-button mr-[33px] rounded-[10px] h-[50px] w-[170px] text-white font-semibold flex items-center justify-center">
          Contact Us
          <span class="w-[35px] h-[35px] bg-white rounded-[5px] flex items-center justify-center ml-[15px]"><img src="/icons/check.svg" alt=""></span>
        </button>
        <a href="tel:+998901301339" class="flex items-center">
          <div class="w-[59px] h-[59px] bg-[#FFEAE6] rounded-[50%] flex justify-center items-center">
            <img src="/icons/phone.svg" alt="">
          </div>
          <div class="ml-[12px]">
            <p class="font-outfit text-color-selection font-semibold">Have Questions?</p>
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