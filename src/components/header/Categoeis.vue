<script  lang="ts">
import {categories} from '../data'
export default {
  data(){
    return {
      categories: categories
    }
  },
  methods:{
    selectLink(path:string){

      this.categories = this.categories.map(item=>{
        if(path===item.path){
          return{
            ...item,
            active: true
          }
        }else{
          return {
            ...item,
            active: false
          }
        }
      })
    }
  }

}


</script>


<template>
  <nav class="border py-[10px]
  border-t-0 border-r-color-custom-gray border-b-0 border-l-color-custom-gray hidden 2xl:block xl:block lg:block">
    <a :href="path" :class="{
      'px-[24px]': true,
      'text-custom-orange': active,
      'text-white': !active,
      'font-semibold': true,
      'hover:text-custom-orange/[.7]': !active,
      'transition': true,
      'text-[16px]': active,
    }" v-for="{path, title, active}  in categories" :key="path" @click="selectLink(path)">{{title}}</a>
  </nav>

  <nav class="py-[10px]
   flex flex-col items-center 2xl:hidden xl:hidden lg:hidden">
    <a :href="path" :class="{
      'py-[12px]': true,
      'text-custom-orange': active,
      'text-white': !active,
      'font-semibold': true,
      'hover:text-custom-orange/[.7]': !active,
      'transition': true,
      'text-[16px]': active,
    }" v-for="{path, title, active}  in categories" :key="path" @click="selectLink(path)">{{title}}</a>
  </nav>


</template>

<style>

</style>