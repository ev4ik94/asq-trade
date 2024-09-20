<template>
  <router-link @click="linkClick" :to="{name:'Home', params:{lang:$route.params.lang||'ru'}}" class="flex">
    <div class="bg-custom-orange  flex items-center justify-center 2xl:w-[240px] xl:w-[240px] lg:w-[240px] w-[170px]">
      <p class="2xl:text-[26px] xl:text-[26px] lg:text-[26px] text-[20px] text-white font-bold font-outfit mb-0">ASQ-TRADE</p>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'Logo',

  setup(){
    function linkClick(){
      window.scroll({
        behavior: 'smooth',
        top: 0,
      });
    }

    return {linkClick}
  }
}
</script>