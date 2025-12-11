<template>
        <section class="final-cta">
            <div class="container">
                <div class="tb-pict">
                    <div class="title-button">
                        <div class="title-subtitle">
                            <span class="page-title">Готовы начать путь к результату?</span>
                            <span class="page-subtitle">Получите бесплатную консультацию — и мы поможем вам сделать первый шаг</span>
                        </div>
                        <button class="btn green custom">Записаться на консультацию</button>
                    </div>
                    <div class="doctor-pict">
                        <img :src="doctor" alt="doctor">
                    </div>
                </div>
            </div>
        </section>
</template>

<script lang="ts" setup>
import doctor from "@/assets/images/MainPage/doctor.png";
</script>