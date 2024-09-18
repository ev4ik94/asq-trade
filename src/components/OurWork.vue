<template>
  <div class="relative">
    <img src="/images/pattern-airplane.svg" alt="" class="absolute bottom-[-80px] right-0 w-[350px]">
    <div class="py-[60px] container grid grid-cols-3 gap-8 relative">
      <img src="/icons/line.svg" alt="" class="absolute w-[930px] top-[400px] left-[60px]">
      <div class="col-span-2">
        <div class="w-[80%]">
          <div class="bg-color-custom-green rounded-[100px] py-[8px] w-[175px] mb-[16px]">
            <p class="text-white font-medium text-[14px] text-center">OUR WORK PROCESS</p>
          </div>
          <h1 class="text-[48px] font-semibold text-color-selection mb-[25px]">We always follow the best
            ways of logistics</h1>
          <p class="text-color-custom-gray text-[20px]">Logisco Air freight service deliver the knowledge & opportunity to optimize every</p>
        </div>
        <div class="grid grid-cols-2 gap-8">
          <div class="relative flex flex-col items-center justify-center pt-[150px] item-step">
            <div class="relative image-step" data-step="1">
              <img src="/images/pattern-dots3.svg" alt="" class="absolute right-[-50px] top-[-20px]">
              <div class="w-[229px] h-[229px] rounded-[15px] mb-[60px] overflow-hidden relative z-[1]">
                <img src="/images/courier-pic1.jpg" alt="" class="w-full h-full object-cover">
              </div>
            </div>


            <div class="pl-[50px]">
              <p class="text-color-selection text-[24px] font-semibold mb-[20px]">Step 1: Receive Packages</p>
              <p class="text-color-custom-gray">Logisco Air freight service deliver to know
                ledge & opportunity to optimize Logisco Air
                freight service deliver to know ledge and
                opportunity to optimize.</p>
            </div>
          </div>
          <div class="relative flex flex-col items-center justify-center pt-[55px] item-step">
            <div class="relative image-step" data-step="2">
              <img src="/images/pattern-dots3.svg" alt="" class="absolute right-[-50px] top-[-20px]">
              <div class="w-[229px] h-[229px] rounded-[15px] mb-[60px] overflow-hidden z-[1] relative">
                <img src="/images/pikaso_texttoimage_there-is-a-truck-in-the-foreground-containers-in-t.jpeg" alt="" class="w-full h-full object-cover">
              </div>
            </div>


            <div class="pl-[50px]">
              <p class="text-color-selection text-[24px] font-semibold mb-[20px]">Step 2: Receive Packages</p>
              <p class="text-color-custom-gray">Logisco Air freight service deliver to know
                ledge & opportunity to optimize Logisco Air
                freight service deliver to know ledge and
                opportunity to optimize.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="col-span-1 pt-[150px]">
        <div class="relative flex flex-col items-center justify-center item-step">
          <div class="relative image-step" data-step="3">
            <img src="/images/pattern-dots3.svg" alt="" class="absolute right-[-50px] top-[-20px]">
            <div class="w-[229px] h-[229px] rounded-[15px] mb-[60px] overflow-hidden relative z-[1]">
              <img src="/images/iStock-1221101939.jpg" alt="" class="w-full h-full object-cover">
            </div>
          </div>

          <div class="pl-[50px]">
            <p class="text-color-selection text-[24px] font-semibold mb-[20px]">Step 3: Receive Packages</p>
            <p class="text-color-custom-gray">Logisco Air freight service deliver to know
              ledge & opportunity to optimize Logisco Air
              freight service deliver to know ledge and
              opportunity to optimize.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style>


.item-step .image-step:before{
  content: attr(data-step);
  position: absolute;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background-color: #FF7D44;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  bottom: 50px;
  left: -20px;
  z-index: 2;
}

.item-step .image-step:after{
  content: attr(data-step);
  position: absolute;
  bottom: -50px;
  right: -80px;
  font-size: 178px;
  font-weight: bold;
  color: #E6F9FB;
}

.item-step .image-step[data-step='2']:after{
  z-index: -1;
}
</style>
<script setup lang="ts">
</script>