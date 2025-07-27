<template>
  <div>
    <NuxtRouteAnnouncer />
    <Header />
    <MainPage />
    <Footer />
  </div>
</template>

<script setup>
import Header from "@/components/header.vue";
import MainPage from "@/page/MainPage.vue";
import Footer from "@/components/footer.vue";
</script>
