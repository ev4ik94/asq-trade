<template>
  <div class="py-[57px] bg-[#033C49]">
    <div class="container">
      <div class=" 2xl:grid xl:grid lg:grid grid-cols-2">
        <div>
          <div class="bg-custom-orange p-[33px] rounded-[10px]">
            <p class="text-white font-bold text-[18px]">{{$t('footer.text')}}</p>
            <p class="text-white mt-[18px]">{{$t('footer.description')}}</p>
            <button @click="selectLink" class="py-[18px] bg-white text-center rounded-[10px] mt-[18px] w-full">{{$t('footer.button')}}</button>
          </div>
        </div>

        <div class="flex flex-col 2xl:pl-[100px] xl:pl-[100px] lg:pl-[100px] mt-[15px] 2xl:mt-0 xl:mt-0 lg:mt-0">
          <p class="mb-[20px] text-white text-[20px] font-semibold">{{$t('footer.headerLink')}}</p>
          <div class="flex items-center" v-for="{path, title, active}  in categories" :key="path">
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.753851 4.19978V5.69978H10.3748L7.9426 8.13203L9.00385 9.19253L13.2458 4.94978L9.00385 0.707031L7.9426 1.76753L10.3748 4.19978H0.753851Z" fill="#5092A2"/>
            </svg>
            <router-link :to="{ name: 'Home', hash: path, params:{lang:$route.params.lang||'ru'} }" :class="{
      'ml-[10px]': true,
      'text-custom-orange': active,
      'text-white': !active,
      'font-semibold': true,
      'hover:text-custom-orange/[.7]': !active,
      'transition': true,
      'text-[16px]': active,
    }">{{$t(title)}}</router-link>
          </div>

        </div>
      </div>
      <div class="py-[24px] 2xl:px-[60px] xl:px-[60px] lg:px-[60px] px-[24px] rounded-[10px] bg-white/[0.1]
      2xl:grid xl:grid lg:grid grid-cols-3 mt-[35px] 2xl:mt-[68px] xl:mt-[68px] lg:mt-[68px]
      w-full border-[3px] border-b-custom-orange border-t-0 border-l-0 border-r-0">
        <div class="flex items-center mb-[12px] 2xl:mb-0 xl:mb-0 lg:mb-0">
          <div class="mr-[16px]"><img src="/icons/footer-email.svg" alt=""></div>
          <div>
            <p class="text-custom-orange text-[12px]">{{$t('email')}}</p>
            <p class="text-white font-semibold">info@asq-trade.uz</p>
          </div>
        </div>

        <div class="flex items-center mb-[12px] 2xl:mb-0 xl:mb-0 lg:mb-0">
          <div class="mr-[16px]"><img src="/icons/footer-phone.svg" alt=""></div>
          <div>
            <p class="text-custom-orange text-[12px]">{{$t('phone')}}</p>
            <p class="text-white font-semibold">+998 90 130 13 39</p>
          </div>
        </div>

        <div class="flex items-center">
          <div class="mr-[16px]"><img src="/icons/footer-map.svg" alt=""></div>
          <div class="w-[85%]">
            <p class="text-custom-orange text-[12px]">{{$t('address')}}</p>
            <p class="text-white font-semibold">г. Ташкент, Яккасарайский район, ул. Богибустон дом 129</p>
          </div>
        </div>
      </div>

      <div class="2xl:flex xl:flex lg:flex items-center justify-between mt-[40px]">
        <p class="text-white 2xl:text-[15px] xl:text-[15px] lg:text-[15px] text-[13px]">© {{date}} <span class="text-custom-orange">ASQ-TRADE</span> / Все права защищены.</p>

      </div>
    </div>
  </div>
</template>

<script>

import {categories} from "@/components/data.ts";

export default {
  data(){
    return {
      categories: categories,
      date: new Date().getFullYear()
    }
  },
  methods: {
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