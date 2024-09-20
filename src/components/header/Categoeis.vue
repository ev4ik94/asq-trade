<script  lang="ts">
import {categories} from '../data'
import { ref, watch, onMounted  } from 'vue';
import { useRoute } from 'vue-router';


export default {
  name: 'Categoeis',
  setup() {
    const route = useRoute(); // Получаем текущий маршрут
    const currentRoute = ref(route.hash); // Инициализируем текущее значение маршрута
    const categoriesData = ref(categories)

    watch(
        () => route.hash, // Отслеживаем изменение полного пути
        (newRoute, oldRoute) => {

          activeLink(newRoute)
          linkClick(newRoute)
          currentRoute.value = newRoute; // Обновляем текущее значение маршрута
        }
    );
    let  observerConfig = {
      threshold: 0, rootMargin: '0px 0px -85% 0px', root: null,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {

        if (entry.isIntersecting) {
          activeLink('#'+entry.target.getAttribute('id'))
        }
      });
    }, observerConfig);

    function activeLink(path:string){
      categoriesData.value = categories.map(item=>{
        if(item.path===path){
          return {
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

    onMounted(() => {
      let elems = Array.from(document.querySelectorAll('.observe-elem'))
      elems.forEach(box => {
        if (box) observer.observe(box);
      });

      document.addEventListener('scroll', ()=>{
        if(window.scrollY<600){
          activeLink('')
        }
      })
    });

    function linkClick(path:string){
      const elem = document.getElementById((path||'').replace('#', ''))
      if(elem){
        const elementPosition = elem.getBoundingClientRect().top + window.pageYOffset;
        window.scroll({
          behavior: 'smooth',
          top: elementPosition,
        });
      }else{
        window.scroll({
          behavior: 'smooth',
          top: 0,
        });
      }
    }


    return {
      currentRoute, categoriesData
    };
  },
};


</script>


<template>
  <nav class="border py-[10px]
  border-t-0 border-r-color-custom-gray border-b-0 border-l-color-custom-gray hidden 2xl:block xl:block lg:block">
    <router-link :to="{ name: 'Home', hash: path, params:{lang:$route.params.lang||'ru'} }"  :class="{
      'px-[16px]': true,
      'text-custom-orange': active,
      'text-white': !active,
      'font-semibold': true,
      'hover:text-custom-orange/[.7]': !active,
      'transition': true,
      'text-[16px]': true,
    }" v-for="{path, title, active}  in categoriesData" :key="path">{{$t(title)}}</router-link>
  </nav>




  <nav class="py-[10px]
   flex flex-col items-center 2xl:hidden xl:hidden lg:hidden">
    <a :href="path" :class="{
      'py-[12px]': true,
      'text-custom-orange': path===currentRoute,
      'text-white': path!==currentRoute,
      'font-semibold': true,
      'hover:text-custom-orange/[.7]': path!==currentRoute,
      'transition': true,
      'text-[16px]': true,
    }" v-for="{path, title}  in categoriesData" :key="path">{{$t(title)}}</a>
  </nav>


</template>

<style>

</style>