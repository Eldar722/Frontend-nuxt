<template>
        <section class="solve-problem">
            <div class="container">
                <div class="title-img">
                    <span class="page-title">Какую проблему мы решаем?</span>
                    <img :src="sleepy" alt="sleepy">
                </div>
                <div class="four-cards">
                <BaseCard
                    v-for="(item, index) in problems"
                    :key="index"
                    :title="item.title"
                    :subtitle="item.subtitle"
                />
                </div>
            </div>
        </section>
</template>

<script lang="ts" setup>
import sleepy from "@/assets/images/MainPage/sleepy.png";
import BaseCard from "~/components/BaseCard.vue";

const problems = [
  { title: 'Постоянная усталость', subtitle: 'С утра уже нет сил, а к вечеру вообще не хочется ничего.' },
  { title: 'Частые простуды', subtitle: 'Каждый сквозняк — как вызов. Болеть стало слишком привычно.' },
  { title: 'Сложно выбрать витамины', subtitle: 'Всё кажется нужным, но что именно подойдёт — непонятно.' },
  { title: 'Нет времени разбираться', subtitle: 'На чтение составов, дозировок и формул просто нет ресурса.' },
];
</script>
