<template>
        <section class="cost-tariffs">
            <div class="container">
                <div class="title-subtitle">
                    <span class="page-title"></span>
                    <span class="page-subtitle"></span>
                </div>

                <Carousel :items-to-show="1" :wrap-around="true" :autoplay="3500">
                    <Slide v-for="(tariff, index) in tariffs" :key="index">
                        <div class="carousel-item-wrapper">
                            <div class="card-tariff">
                                <span class="card-tariff-title">{{  tariff.title }}</span>
                                <span class="card-tariff-subtitle">{{  tariff.subtitle }}</span>
                                <span class="card-tariff-cons">Список преимуществ:</span>
                                <div class="tariff-cons-of-card">
                                    <div class="icon-cons" v-for="(cons, i) in tariff.cons" :key="i">
                                        <img :src="cons.icon" alt="cons.alt" class="tariff-icon">
                                        <span class="cons">{{ cons.text }}</span>
                                    </div>
                                </div>
                                <span class="card-tariff-price">Цена: от {{ tariff.price }} &#8376;</span>
                                <button class="choose-tariff">Выбрать тариф</button>
                            </div>
                        </div>
                    </Slide>

                    <template #addons>
                        <Navigation />
                        <Pagination />
                    </template>
                </Carousel>
            </div>
        </section>
</template>

<script lang="ts" setup>
import { Carousel, Slide, Navigation, Pagination } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

import magnifier from "@/assets/images/TariffIcons/magnifier.svg";
import pill from "@/assets/images/TariffIcons/pill.svg";
import pack from "@/assets/images/TariffIcons/pack.svg";
import call from "@/assets/images/TariffIcons/call.svg";
import DNA from "@/assets/images/TariffIcons/DNA.svg";
import bag from "@/assets/images/TariffIcons/bag.svg";
import truck from "@/assets/images/TariffIcons/truck.svg";
import doctorsvg from "@/assets/images/TariffIcons/doctor.svg";
import bar from "@/assets/images/TariffIcons/bar.svg";
import gift from "@/assets/images/TariffIcons/gift.svg";

const tariffs = [
  {
    title: "Старт",
    subtitle: "Базовый уход и поддержка",
    price: "4 990",
    cons: [
      { icon: magnifier, alt: "magnifier", text: "Индивидуальный опрос" },
      { icon: pill, alt: "pill", text: "Комплекс на 1 меcяц" },
      { icon: pack, alt: "pack", text: "Бесплатная доставка" },
      { icon: call, alt: "call", text: "Поддержка по e-mail" },
    ],
  },
  {
    title: "Оптимум",
    subtitle: "Энергия, иммунитет и восстановление",
    price: "9 990",
    cons: [
      { icon: DNA, alt: "DNA", text: "Подбор комплекса под цель" },
      { icon: bag, alt: "bag", text: "Комплекс на 2 месяца" },
      { icon: truck, alt: "truck", text: "Экспресс-доставка" },
      { icon: call, alt: "call", text: "Личная поддержка в чате" },
    ],
  },
  {
    title: "Про",
    subtitle: "Максимум заботы и результатов",
    price: "17 990",
    cons: [
      { icon: doctorsvg, alt: "doctor", text: "Консультация со специалистом" },
      { icon: pack, alt: "pack", text: "Курсовая схема на 3 месяца" },
      { icon: bar, alt: "bar", text: "Отчёт по результатам" },
      { icon: gift, alt: "gift", text: "Подарки и бонусы внутри" },
    ],
  },
];
</script>

