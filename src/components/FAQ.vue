<template>
  <div class="bg-[#F2F8FA] 2xl:py-[150px] xl:py-[150px] lg:py-[150px] py-[60px] relative overflow-hidden">
    <img src="/images/arrow-pattern2.svg" alt="" class="hidden 2xl:block xl:block lg:block absolute bottom-[120px] left-0 w-[80px]">
    <img src="/images/faq-pattern.svg" alt="" class="hidden 2xl:block xl:block lg:block absolute bottom-0 right-0 w-[350px]">
    <div class="container 2xl:grid xl:grid lg:grid grid-cols-2">
      <div class="2xl:grid xl:grid lg:grid grid-cols-3">
        <div class="col-span-2">
          <div class="bg-custom-orange rounded-[100px] py-[8px] w-[253px] mb-[17px]">
            <p class="text-center text-white text-[14px]">FREQUENTLY ASKED QUESTIONS</p>
          </div>
          <h1 class="text-color-selection 2xl:text-[56px] xl:text-[56px] lg:text-[56px] text-[40px] font-semibold leading-tight mb-[25px]">Do you have
            any question?
            Find answer
            here</h1>
          <p class="text-color-custom-gray 2xl:text-[20px] xl:text-[20px] lg:text-[20px] text-[18px]">Some frequently asked questions about
            logisco’s cargo services</p>
        </div>
      </div>

      <div class="2xl:mt-0 xl:mt-0 lg:mt-0 mt-[20px]">
        <div v-for="{id, title, description} in faqList" :key="id" class="mb-[17px]">
          <div
               :class="{
                'py-[22px]':true,
                'pr-[15px]':true,
                'pl-[30px]':true,
                'rounded-[50px]':true,
                'bg-color-custom-green':currentKey===id,
                'bg-white':currentKey!==id,
                'relative':true,
                'flex':true,
                'items-center':true,
                'justify-between':true,
                'cursor-pointer':true,
               }"
               @click="selectKey(id, $event)">

            <p
            :class="{
              'text-white': currentKey===id,
              'w-[95%]': true,
              'text-color-selection': currentKey!==id,
              '2xl:text-[18px]': true,
              'xl:text-[18px]': true,
              'lg:text-[18px]': true,
              'text-[14px]': true,
              'font-semibold': true,
            }">{{title}}</p>
            <div v-if="currentKey===id" class="w-[25px] h-[25px] rounded-[50%] bg-[#FFFF]/[0.2] flex items-center justify-center " >
              <p class="text-white font-semibold 2xl:text-[20px] xl:text-[20px] lg:text-[20px]">-</p>
            </div>
            <div v-else class="w-[25px] h-[25px] rounded-[50%] bg-[#FFEAE6] flex items-center justify-center " >
              <p class="text-custom-orange font-semibold text-[20px]">+</p>
            </div>
          </div>
          <div class="h-0 overflow-hidden transition-all " :style="{
            height: id===currentKey?heightElem+'px':'0px'
          }">
            <div class="item-content p-[30px]">
              <p class="text-color-custom-gray">{{description}}</p>
            </div>
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
      faqList: [
        {
          id: 1,
          title: 'What is the LBS weight cost of goods transportation?',
          description: 'Mauris ut enim sit amet lacus ornare ullamcorper. Praesent placerat neque eu\n' +
              'purus rhoncus, vel tincidunt odio ultrices. Sed theya arrum.'
        },
        {
          id: 2,
          title: 'How much time it takes for LTL Freight transport?',
          description: 'Mauris ut enim sit amet lacus ornare ullamcorper. Praesent placerat neque eu\n' +
              'purus rhoncus, vel tincidunt odio ultrices. Sed theya arrum.'
        },
        {
          id: 3,
          title: 'What are the pick up points of logistics?',
          description: 'Mauris ut enim sit amet lacus ornare ullamcorper. Praesent placerat neque eu\n' +
              'purus rhoncus, vel tincidunt odio ultrices. Sed theya arrum.'
        },
        {
          id: 4,
          title: 'What is the cost of goods transportation?',
          description: 'Mauris ut enim sit amet lacus ornare ullamcorper. Praesent placerat neque eu\n' +
              'purus rhoncus, vel tincidunt odio ultrices. Sed theya arrum.'
        }
      ],
      currentKey: 0,
      heightElem: 0
    }
  },

  methods: {
    selectKey(key:number, event:any){

      if(key===this.currentKey){
        this.currentKey = 0
        this.heightElem = 0
        return
      }

      let height = 0;
      let elem = event.currentTarget.parentElement?.querySelector('.item-content')
      if(elem){
        height = elem.querySelector('p').offsetHeight
        this.heightElem = height+50
      }
      this.currentKey = key
    }

  }
}
</script>