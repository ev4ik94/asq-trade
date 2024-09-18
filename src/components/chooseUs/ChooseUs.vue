<template>
  <div class="h-[686px] relative overflow-hidden">
    <div class="grid grid-cols-5 h-full absolute w-full">
      <div class="col-span-2 bg-main-color relative overflow-hidden">
        <img src="/images/chooseus-pattern.svg" alt="" class="w-[350px] absolute top-[-100px]">
      </div>

      <div class="col-span-3 h-[645px]">
        <img src="/images/pic-chooseus.jpg" alt="" class="w-full h-full object-cover">
      </div>
    </div>

    <div class="container grid grid-cols-5 relative z-[1]">
      <div class="col-span-2 pt-[100px] pl-[120px] bg-main-color">
        <div class="bg-[#FFFFFF]/[0.4] w-[146px] px-[10px] py-[6px] rounded-[100px] text-white text-[14px] mb-[15px]">
          <p>WHY CHOOSE US</p>
        </div>
        <h1 class="text-[40px] text-white font-semibold font-outfit ">Why Choose Us</h1>

        <div class="mt-[20px]">
          <div v-for="{id, title} in items" key="{{id}}" @click="selectItem(id)" :class="{
            'flex': true,
            'items-center': true,
            'py-[16px]': true,
            'px-[18px]': true,
            'bg-custom-orange': current===id,
            'rounded-l-[100px]': current===id,
            'border': current!==id,
           'border-b-[#fff]/[0.2]': current!==id,
           'border-t-0': true,
           'border-l-0': true,
           'border-r-0': true,
           'cursor-pointer': true

          }">
            <div>
              <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.949951 7.8499L4.19995 4.5999L0.949951 1.3499L1.59995 0.049902L6.14995 4.5999L1.59995 9.1499L0.949951 7.8499Z" fill="white"/>
              </svg>
            </div>
            <p class="ml-[10px] text-white font-outfit font-semibold">{{title}}</p>
          </div>
        </div>
      </div>

      <div class="col-span-3 pt-[228px]">
        <div v-if="current===1" class="bg-custom-orange px-[65px] py-[55px] ml-[-40px] h-[470px] block-choose relative">
          <ExpertEmployees />
        </div>
        <div v-else-if="current===2" class="bg-custom-orange px-[65px] py-[55px] ml-[-40px] h-[470px] block-choose relative">
          <ExpertEmployees />
        </div>
        <div v-else-if="current===3" class="bg-custom-orange px-[65px] py-[55px] ml-[-40px] h-[470px] block-choose relative">
          <ExpertEmployees />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .block-choose:before{
    content: '';
    transform: rotate(180deg);
    position: absolute;
    bottom: 10px;
    right: -73.5px;
    width: 0;
    height: 0;
    border-top: 45px solid transparent;
    border-bottom: 0px solid transparent;
    border-right: 75px solid #DE4F10;
  }

</style>

<script  lang="ts">

import ExpertEmployees from "@/components/chooseUs/_components/ExpertEmployees.vue";

export default {
  components: {ExpertEmployees},
  data(){
    return {
      items: [
        {
          id: 1,
          title: 'Expert  Employees'
        },
        {
          id: 2,
          title: 'Modern Technology'
        },
        {
          id: 3,
          title: 'Global Operation'
        }
      ],
       current: 1
    }
  },
  methods:{
    selectItem(id:number){
      this.current = id
    }
  }
}

</script>