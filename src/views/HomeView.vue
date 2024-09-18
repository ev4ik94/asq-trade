<script setup lang="ts">

import Banner from "@/components/banner/Banner.vue";
import LogisticServices from "@/components/LogisticServices.vue";
import AboutUs from "@/components/AboutUs.vue";
import ChooseUs from "@/components/chooseUs/ChooseUs.vue";
import Services from "@/components/Services.vue";
import ContactUs from "@/components/ContactUs.vue";
import Achievements from "@/components/Achievements.vue";
import OurWork from "@/components/OurWork.vue";
import FAQ from "@/components/FAQ.vue";
</script>

<template>
  <Banner />
  <main>
    <LogisticServices />
    <AboutUs />
    <ChooseUs />
    <Services />
    <ContactUs/>
    <Achievements />
    <OurWork />
    <FAQ />
  </main>
</template>
