<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from "@/components/header/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>

  <header>
    <Header />
  </header>
  <RouterView />
  <Footer />
</template>


