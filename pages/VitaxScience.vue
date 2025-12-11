<template>
        <section class="why-vitax">
            <div class="container">
                <div class="title-cards">
                    <span class="page-title">Почему Vitax действительно помогает</span>
                    <div class="cards-icon">
                        <div v-for="(con, index) in cons" :key="index" class="card-w-icon">
                            <img :src="con.icon" alt="" class="icon">
                            <span class="icon-card-title">{{ con.title }}</span>
                            <span class="icon-card-subtitle">{{ con.subtitle }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>

<script lang="ts" setup>
const cons = [
    {
        title: "Основано на науке",
        subtitle: "Никаких волшебных обещаний — только витамины с доказанной эффективностью",
        icon: dna
    },
    {
        title: "Персонализированный подход",
        subtitle: "Комплексы подбираются под твои цели: энергия, фокус, иммунитет и не только",
        icon: hit
    },
    {
        title: "Максимум пользы — минимум лишнего",
        subtitle: "Никаких 5 баночек в день. Всё, что нужно, уже собрано",
        icon: box
    },
    {
        title: "Эффект, который ощущается",
        subtitle: "Витамины, которые действительно работают — ты почувствуешь разницу",
        icon: thunder
    }
];

import hit from "@/assets/images/FourCards/hit.svg";
import thunder from "@/assets/images/FourCards/thunder.svg";
import box from "@/assets/images/FourCards/box.svg";
import dna from "@/assets/images/FourCards/dna.svg";
</script>