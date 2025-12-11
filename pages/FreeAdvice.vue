<template>
        <section class="free-advice">
            <div class="container">
                <div class="tb-pict">
                    <div class="title-button">
                        <div class="title-subtitle-group">
                            <span class="page-title">Получите бесплатную консультацию от нутрициолога</span>
                            <span class="page-subtitle">Ответим на вопросы и подберем витамины под ваши цели — без спама и навязчивости.</span>
                        </div>
                        <button class="btn orange">Получить консультацию</button>
                    </div>
                    <div class="image-orange">
                        <img :src="orange" alt="orange">
                    </div>
                </div>
            </div>
        </section>
</template>

<script lang="ts" setup>
import orange from "@/assets/images/MainPage/orange.png";
</script>