<template>
  <div class="relative">
    <img src="/images/services-pattern.svg" alt="" class="absolute w-full h-full">

    <div class="py-[60px] container relative z-[2]">

      <div class=" ">
        <div class="bg-custom-orange rounded-[100px] px-[10px] py-[6px] mx-auto w-[130px]">
          <p class="text-white text-center text-[14px]">OUR SERVICES</p>
        </div>
        <h1 class="text-[40px] text-color-selection font-semibold text-center font-outfit mt-[14px] mb-[10px]">Premium Services By Logisco </h1>
        <p class="text-center text-color-custom-gray">Logisco Air freight service deliver the knowledge & opportunity
          to optimize every mile on every lane. Get full-service</p>
      </div>

      <div class="grid grid-cols-2 gap-8 mt-[40px]">
        <div v-for="{id, title, icon, description} in list" :key="id"
             class="flex p-[40px] bg-white rounded-tl-[100px] rounded-br-[50px] border-b-4 border-[#CBF6FF] shadow-lg shadow-[#AAC2BA]/[0.4]">
          <div>
            <img :src="icon" alt="{{title}}">
          </div>
          <div class="ml-[25px]">
            <p class="text-[26px] text-color-selection font-semibold font-outfit mb-[20px]">{{title}}</p>
            <p class="text-[18px] text-color-custom-gray">{{description}}</p>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script lang="ts">
export default {
  data(){
    return {
      list: [
        {
          id: 1,
          title: 'International Transportation',
          description: 'Giving consultancy for every financial projection report and analysis for existing project',
          icon: '/icons/service-icon1.svg'
        },
        {
          id: 2,
          title: 'Unloading & Warehousing',
          description: 'Giving consultancy for every financial projection report and analysis for existing project',
          icon: '/icons/service-icon2.svg'
        },
        {
          id: 3,
          title: 'Personnel Delivery Services',
          description: 'Giving consultancy for every financial projection report and analysis for existing project',
          icon: '/icons/service-icon3.svg'
        },
        {
          id: 4,
          title: 'Drone Delivery System',
          description: 'Giving consultancy for every financial projection report and analysis for existing project',
          icon: '/icons/service-icon4.svg'
        },
        {
          id: 5,
          title: 'International Mailing',
          description: 'Giving consultancy for every financial projection report and analysis for existing project',
          icon: '/icons/service-icon5.svg'
        },
        {
          id: 6,
          title: 'Packaging & Warehousing',
          description: 'Giving consultancy for every financial projection report and analysis for existing project',
          icon: '/icons/service-icon6.svg'
        }
      ]
    }
  }
}
</script>