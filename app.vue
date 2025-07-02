<template>
  <div>
    <NuxtRouteAnnouncer />
    <!-- <NuxtWelcome /> -->
    <Header />
    <MainPage />
    <Footer />

  </div>
</template>

<script lang="ts" setup>
import Header from "@/components/header.vue";
import MainPage from "./page/MainPage.vue";
import Footer from "@/components/footer.vue";
</script>
