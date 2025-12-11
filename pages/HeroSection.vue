<template>
    <section class="hero">
        <div class="container">
            <div class="hero-block">
                <span class="hero-title">Живи на полной!</span>
                <span class="hero-subtitle">Эксклюзивно для новых клиентов: пробный набор Vitax с 20% скидкой. Попробуй и почувствуй разницу!</span>
                <button type="button" class="btn orange" @click="showPopup = true">Начать с персональной скидкой</button>
            </div>
            <div class="hero-image">
                <img :src="pills" alt="pills">
            </div>
        </div>

        <Popup :isOpen="showPopup" @close="showPopup = false" />
    </section>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import pills from "@/assets/images/MainPage/pills.png";
import Popup from "~/components/Modal.vue";

const showPopup = ref(false);
</script>