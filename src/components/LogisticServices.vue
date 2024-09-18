<template>
  <div class="bg-[#F2F8FA] relative">
    <img src="/images/service-patern-icon.svg" alt="" class="absolute top-0 left-0 w-[500px]">
    <img src="/images/arrow-patern.svg" alt="" class="absolute top-[550px] left-0 w-[100px]">
    <img src="/images/arrow-patern.svg" alt="" class="absolute top-[10px] right-0 w-[100px] rotate-[180deg]">

<!--    <p>{{ $t('welcome') }}</p>-->
    <div class="py-[60px] container relative">
      <img src="/images/pattern-dots.svg" alt="" class="absolute right-[0px] z-[1] bottom-[10px]">
      <div class="flex flex-col justify-center items-center ">
        <div class="bg-custom-orange py-[6px] px-[10px] rounded-[100px] mb-[12px]">
          <p class="text-white text-[14px]">Our Service</p>
        </div>
        <h1 class="text-[40px] mb-[9px] text-color-selection font-semibold font-outfit">Wide Variety of Logistics Services</h1>
        <p class="text-color-custom-gray">Logisco Air freight service deliver the knowledge & opportunity
          to optimize every mile on every lane. Get full-service</p>
      </div>

      <div class="grid grid-cols-3 gap-4 mt-[40px] relative z-[1]">
        <div v-for="{id, title, description, icon, image} in services" :key="id"
             class="rounded-[10px] bg-white overflow-hidden shadow-lg shadow-[#8997BA]/[0.3]">
          <div class="h-[282px]">
            <img :src="image" alt="{{title}}" class="w-full h-full object-cover">

          </div>

          <div class="py-[52px] px-[40px] relative">
            <div class="w-[88px] h-[88px] absolute rounded-[50%] bg-white border-4
          border-[#FFEAE6] flex justify-center items-center top-[-20%] left-[50px]">
              <img :src="icon" alt="">
            </div>
            <p class="text-[22px] text-color-selection font-semibold font-outfit">{{title}}</p>
            <p class="mt-[12px] mb-[15px] text-color-custom-gray">{{description}}</p>

            <button class="text-[14px] font-semibold text-custom-orange px-[30px] h-[46px]
          rounded-[10px] bg-custom-orange/[0.2] hover:bg-custom-orange hover:text-white transition">Read more</button>

          </div>
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
        title: 'Maritime transportation',
        description: 'Logisco Air freight service deliver to know\n' +
            'ledge & opportunity to optimize...',
        icon: '/icons/shep.svg',
        image: '/images/pic-service-shep.jpg'
      },
        {
          id: 2,
          title: 'Land Freight transportation',
          description: 'Logisco Air freight service deliver to know\n' +
              'ledge & opportunity to optimize...',
          icon: '/icons/truck.svg',
          image: '/images/pic-service-truck.jpg'
        },
        {
          id: 3,
          title: 'Intermodal Shipping',
          description: 'Logisco Air freight service deliver to know\n' +
              'ledge & opportunity to optimize...',
          icon: '/icons/air-plane.svg',
          image: '/images/pic-service1.jpg'
        }]
    }
  },

}
</script>