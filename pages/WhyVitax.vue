<template>
        <section class="choose-vitax">
            <div class="container">
                <div class="title-cards">
                    <span class="page-title">Почему выбирают Vitax?</span>
                    <div class="cards-image">
                        <div class="mini-four-cards">
                            <MiniCard
                                v-for="(item, index) in features"
                                :key="index"
                                :title="item.title"
                                :subtitle="item.subtitle"
                            />
                        </div>
                        <div class="image-page">
                            <img :src="runner" alt="runner">
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>

<script lang="ts" setup>
import runner from "@/assets/images/MainPage/runner.png";
import MiniCard from '@/components/MiniCard.vue';

const features = [
  { title: 'Энергия без кофе', subtitle: 'Поддержка бодрости и концентрации без перегрузок и кофеина.' },
  { title: 'Сильный иммунитет', subtitle: 'Комплекс с витаминами, который помогает не выпадать из жизни.' },
  { title: 'Подбор под твои задачи', subtitle: 'Точный набор под твой ритм: для фокуса, сна, восстановления или снижения стресса.' },
  { title: 'Готовое решение', subtitle: 'Всё собрано за тебя. Просто начни — и почувствуй разницу.' },
];
</script>