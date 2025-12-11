<template>
  <div>
    <NuxtRouteAnnouncer />
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import MainPage from "@/page/MainPage.vue";
import Footer from "@/components/Footer.vue";
</script>
