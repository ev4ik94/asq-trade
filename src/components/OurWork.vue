<template>
  <div class="relative observe-elem" id="ourWork">
    <img src="/images/pattern-airplane.svg" alt="" class="hidden 2xl:block xl:block lg:block absolute bottom-[-80px] right-0 w-[350px]">
    <div class="2xl:py-[60px] xl:py-[60px] lg:py-[60px] py-[40px] container 2xl:grid xl:grid lg:grid grid-cols-3 gap-8 relative">
      <img src="/icons/line.svg" alt="" class="hidden 2xl:block xl:block lg:block absolute w-[930px] top-[400px] left-[60px]">
      <div class="col-span-2">
        <div class="2xl:w-[80%] xl:w-[80%] lg:w-[80%]">
          <div class="bg-color-custom-green rounded-[100px] py-[8px] w-[175px] mb-[16px]">
            <p class="text-white font-medium text-[14px] text-center">{{$t('work.span')}}</p>
          </div>
          <h1 class="2xl:text-[48px] xl:text-[48px] lg:text-[48px] text-[40px] font-semibold text-color-selection mb-[25px]">{{$t('work.title')}}</h1>
          <p class="text-color-custom-gray 2xl:text-[20px] xl:text-[20px] lg:text-[20px] text-[18px]">{{$t('work.description')}}</p>
        </div>
        <div class="2xl:grid xl:grid lg:grid grid-cols-2 gap-8">
          <div class="relative flex flex-col 2xl:items-center xl:items-center lg:items-center justify-center 2xl:pt-[150px] xl:pt-[150px] lg:pt-[150px] pt-[80px] item-step">
            <div class="relative image-step" data-step="1">
              <img src="/images/pattern-dots3.svg" alt="" class="absolute 2xl:right-[-50px] xl:right-[-50px] lg:right-[-50px] left-[160px] top-[-20px]">
              <div class="w-[229px] h-[229px] rounded-[15px] mb-[60px] overflow-hidden relative z-[1]">
                <img src="/images/courier-pic1.jpg" alt="" class="w-full h-full object-cover">
              </div>
            </div>


            <div class="2xl:pl-[50px] xl:pl-[50px] lg:pl-[50px]">
              <p class="text-color-selection text-[24px] font-semibold mb-[20px]">{{$t('work.step1Title')}}</p>
              <p class="text-color-custom-gray space-preline">{{$t('work.step1Text')}}</p>
            </div>
          </div>
          <div class="relative flex flex-col 2xl:items-center xl:items-center lg:items-center justify-center 2xl:pt-[150px] xl:pt-[150px] lg:pt-[150px] pt-[50px] item-step">
            <div class="relative image-step" data-step="2">
              <img src="/images/pattern-dots3.svg" alt="" class="absolute 2xl:right-[-50px] xl:right-[-50px] lg:right-[-50px] left-[160px] top-[-20px]">
              <div class="w-[229px] h-[229px] rounded-[15px] mb-[60px] overflow-hidden z-[1] relative">
                <img src="/images/pikaso_texttoimage_there-is-a-truck-in-the-foreground-containers-in-t.jpeg" alt="" class="w-full h-full object-cover">
              </div>
            </div>


            <div class="2xl:pl-[50px] xl:pl-[50px] lg:pl-[50px]">
              <p class="text-color-selection text-[24px] font-semibold mb-[20px]">{{$t('work.step2Title')}}</p>
              <p class="text-color-custom-gray space-preline">{{$t('work.step2Text')}}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="col-span-1 2xl:pt-[150px] xl:pt-[150px] lg:pt-[150px] pt-[50px]">
        <div class="relative flex flex-col 2xl:items-center xl:items-center lg:items-center justify-center item-step">
          <div class="relative image-step" data-step="3">
            <img src="/images/pattern-dots3.svg" alt="" class="absolute 2xl:right-[-50px] xl:right-[-50px] lg:right-[-50px] left-[160px] top-[-20px]">
            <div class="w-[229px] h-[229px] rounded-[15px] mb-[60px] overflow-hidden relative z-[1]">
              <img src="/images/iStock-1221101939.jpg" alt="" class="w-full h-full object-cover">
            </div>
          </div>

          <div class="2xl:pl-[50px] xl:pl-[50px] lg:pl-[50px]">
            <p class="text-color-selection text-[24px] font-semibold mb-[20px]">{{$t('work.step3Title')}}</p>
            <p class="text-color-custom-gray space-preline">{{$t('work.step3Text')}}</p>
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

@media (max-width: 992px){
  .item-step .image-step:before{
    left: 190px;
  }

  .item-step .image-step:after{
    display: none;
  }
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