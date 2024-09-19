<template>
  <div class="relative ">
    <div class="bg-main-color">

      <div class="container">
        <div class="py-[40px] ">
          <div class="bg-[#FFFFFF]/[0.4] w-[146px] px-[10px] py-[6px] rounded-[100px] text-white text-[14px] mb-[15px]">
            <p>{{$t('why.span')}}</p>
          </div>
          <h1 class="text-[40px] text-white font-semibold font-outfit ">{{$t('why.title')}}</h1>

          <div class="mt-[20px]">
            <div v-for="{id, title} in items" key="{{id}}" @click="selectItem(id)" :class="{
            'flex': true,
            'items-center': true,
            'py-[16px]': true,
            'px-[18px]': true,
            'bg-custom-orange': current===id,
            'rounded-[100px]': current===id,
            'border': current!==id,
           'border-b-[#fff]/[0.2]': current!==id,
           'border-t-0': true,
           'border-l-0': true,
           'border-r-0': true,
           'cursor-pointer': true

          }">
              <div class="rotate-[90deg]">
                <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.949951 7.8499L4.19995 4.5999L0.949951 1.3499L1.59995 0.049902L6.14995 4.5999L1.59995 9.1499L0.949951 7.8499Z" fill="white"/>
                </svg>
              </div>
              <p class="ml-[10px] text-white font-outfit font-semibold">{{$t(title)}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-custom-orange">
      <div class="container  relative z-[1]">
        <div class="">

          <div v-if="current===1" class="bg-custom-orange px-[25px] py-[25px] h-[240px]  relative">
            <div>
              <p class="text-white">{{$t('why.listText1')}}</p>
            </div>
          </div>
          <div v-else-if="current===2" class="bg-custom-orange px-[25px] py-[25px] h-[240px] relative">
            <div>
              <p class="text-white">{{$t('why.listText2')}}</p>
            </div>
          </div>
          <div v-else-if="current===3" class="bg-custom-orange px-[25px] py-[25px] h-[240px] relative">
            <div>
              <p class="text-white">{{$t('why.listText3')}}</p>
            </div>
          </div>
          <div v-else-if="current===4" class="bg-custom-orange px-[25px] py-[25px] h-[240px] relative">
            <div>
              <p class="text-white">{{$t('why.listText4')}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>
<script  lang="ts">
import ExpertEmployees from "@/components/chooseUs/_components/ExpertEmployees.vue";


export default {
  components: {ExpertEmployees},
  data(){
    return {
      items: [
        {
          id: 1,
          title: 'why.listTitle1',
          description: 'why.listText1',
        },
        {
          id: 2,
          title: 'why.listTitle2',
          description: 'why.listText2',
        },
        {
          id: 3,
          title: 'why.listTitle3',
          description: 'why.listText3',
        },
        {
          id: 4,
          title: 'why.listTitle4',
          description: 'why.listText4',
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