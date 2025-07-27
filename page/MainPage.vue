<template>
    <main>
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
        </section>
        <section class="solve-problem">
            <div class="container">
                <div class="title-img">
                    <span class="page-title">Какую проблему мы решаем?</span>
                    <img :src="sleepy" alt="sleepy">
                </div>
                <div class="four-cards">
                    <article class="base-card">
                        <span class="card-title custom">Постоянная усталость</span>
                        <span class="card-subtitle custom">С утра уже нет сил, а к вечеру вообще не хочется ничего.</span>
                    </article>
                    <article class="base-card">
                        <span class="card-title custom">Частые простуды</span>
                        <span class="card-subtitle custom">Каждый сквозняк — как вызов. Болеть стало слишком привычно.</span>
                    </article>
                    <article class="base-card">
                        <span class="card-title custom">Сложно выбрать витамины</span>
                        <span class="card-subtitle custom">Всё кажется нужным, но что именно подойдёт — непонятно.</span>
                    </article>
                    <article class="base-card">
                        <span class="card-title custom">Нет времени разбираться</span>
                        <span class="card-subtitle custom">На чтение составов, дозировок и формул просто нет ресурса.</span>
                    </article>
                </div>
            </div>
        </section>
        <section class="choose-vitax">
            <div class="container">
                <div class="title-cards">
                    <span class="page-title">Преимущества Vitax</span>
                    <div class="cards-image">
                        <div class="mini-four-cards">
                            <article class="mini-base-card green">
                                <span class="mini-card-title">Энергия без кофе</span>
                                <span class="mini-card-subtitle">Поддержка бодрости и концентрации без перегрузок и кофеина.</span>
                            </article>
                            <article class="mini-base-card blue">
                                <span class="mini-card-title">Сильный иммунитет</span>
                                <span class="mini-card-subtitle">Комплекс с витаминами, который помогает не выпадать из жизни.</span>
                            </article>
                            <article class="mini-base-card purple">
                                <span class="mini-card-title">Подбор под твои задачи</span>
                                <span class="mini-card-subtitle">Точный набор под твой ритм: для фокуса, сна, восстановления или снижения стресса.</span>
                            </article>
                            <article class="mini-base-card orange">
                                <span class="mini-card-title">Готовое решение</span>
                                <span class="mini-card-subtitle">Всё собрано за тебя. Просто начни — и почувствуй разницу.</span>
                            </article>
                        </div>
                        <div class="image-page">
                            <img :src="runner" alt="runner">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="result">
            <div class="container">
                <div class="result-box">
                    <div class="title-subtitle">
                        <span class="title-in-box">Каков будет результат?</span>
                        <span class="subtitle-in-box">Почувствуйте изменения в организме уже через несколько недель</span>
                    </div>
                    <div class="card-line-wrapper">
                        <div class="line-behind"></div>
                        <div class="progress-cards">
                            <div class="default-progress-card">
                                    <div class="inner-circle">
                                        <span class="number-in-circle">1</span>
                                    </div>
                                <div class="progress-time">
                                    <span class="progress-time-text">1-2 недели</span>
                                </div>
                                <div class="title-subtitle-pc">
                                    <span class="title-progress-card">Энергия и бодрость</span>
                                    <span class="subtitle-progress-card">Повышение энергии на 40%, улучшение сна</span>
                                </div>
                            </div>
                            <div class="default-progress-card">
                                    <div class="inner-circle">
                                        <span class="number-in-circle">2</span>
                                </div>
                                <div class="progress-time">
                                    <span class="progress-time-text">1 месяц</span>
                                </div>
                                <div class="title-subtitle-pc">
                                    <span class="title-progress-card">Сильный иммунитет</span>
                                    <span class="subtitle-progress-card">Защита от болезней, здоровая кожа</span>
                                </div>
                            </div>
                            <div class="default-progress-card">
                                    <div class="inner-circle">
                                        <span class="number-in-circle">3</span>
                                    </div>
                                <div class="progress-time">
                                    <span class="progress-time-text">3 месяца</span>
                                </div>
                                <div class="title-subtitle-pc">
                                    <span class="title-progress-card">Полное преображение</span>
                                    <span class="subtitle-progress-card">Оптимальный баланс витаминов</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="statistics">
                        <div class="health">
                            <span class="number-of-statistics">95%</span>
                            <span class="thing-of-statistics">УЛУЧШЕНИЕ САМОЧУВСТВИЯ</span>
                        </div>
                        <div class="energy">
                            <span class="number-of-statistics">+40%</span>
                            <span class="thing-of-statistics">БОЛЬШЕ ЭНЕРГИИ</span>
                        </div>
                        <div class="immunity">
                            <span class="number-of-statistics">2X</span>
                            <span class="thing-of-statistics">СИЛЬНЕЕ ИММУНИТЕТ</span>
                        </div>
                        <div class="cta-statistics">
                            <span class="cta-text">Начните прямо сейчас!</span>
                            <button type="button" class="btn-orange-cta">Выбрать витамины</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="why-vitax">
            <div class="container">
                <div class="title-cards">
                    <span class="page-title">Почему Vitax действительно помогает</span>
                    <div class="cards-icon">
                        <div class="card-w-icon green">
                            <img :src="dna" alt="dna" class="icon">
                            <span class="icon-card-title">Основано на науке</span>
                            <span class="icon-card-subtitle">Никаких волшебных обещаний — только витамины с доказанной эффективностью.</span>
                        </div>
                        <div class="card-w-icon blue">
                            <img :src="hit" alt="hit" class="icon">
                            <span class="icon-card-title">Персонализированный подход</span>
                            <span class="icon-card-subtitle">Комплексы подбираются под твои цели: энергия, фокус, иммунитет и не только.</span>
                        </div>
                        <div class="card-w-icon purple">
                            <img :src="box" alt="box" class="icon">
                            <span class="icon-card-title">Максимум пользы — минимум лишнего</span>
                            <span class="icon-card-subtitle">Никаких 5 баночек в день. Всё, что нужно, уже собрано.</span>
                        </div>
                        <div class="card-w-icon orange">
                            <img :src="thunder" alt="thunder" class="icon">
                            <span class="icon-card-title">Эффект, который ощущается</span>
                            <span class="icon-card-subtitle">Витамины, которые действительно работают — ты почувствуешь разницу.</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
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
        <section class="cost-tariffs">
            <div class="container">
                <div class="title-subtitle">
                    <span class="page-title">Стоимость и тарифы</span>
                    <span class="page-subtitle">Подберите то, что вам подходит — ничего лишнего.</span>
                </div>
                <div id="carouselExampleIndicators" class="carousel slide">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="carousel-item-wrapper">
                            <div class="card-tariff">
                                <span class="card-tariff-title">Старт</span>
                                <span class="card-tariff-subtitle">Базовый уход и поддержка</span>
                                <span class="card-tariff-pros">Список преимуществ:</span>
                                <div class="tariff-pros-of-card">
                                    <div class="icon-pros">
                                        <img :src="magnifier" alt="magnifier" class="tariff-icon">
                                        <span class="pros">Индивидуальный опрос</span>
                                    </div>
                                    <div class="icon-pros">
                                        <img :src="pill" alt="pill" class="tariff-icon">
                                        <span class="pros">Комплекс на 1 меcяц</span>
                                    </div>
                                    <div class="icon-pros">
                                        <img :src="pack" alt="pack" class="tariff-icon">
                                        <span class="pros">Бесплатная доставка</span>
                                    </div>
                                    <div class="icon-pros">
                                        <img :src="call" alt="call" class="tariff-icon">
                                        <span class="pros">Поддержка по e-mail</span>
                                    </div>
                                </div>
                                <span class="card-tariff-price">Цена: от 4 990 &#8376;</span>
                                <button class="choose-tariff">Выбрать тариф</button>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="carousel-item-wrapper">
                            <div class="card-tariff">
                                <span class="card-tariff-title">Оптимум</span>
                                <span class="card-tariff-subtitle">Энергия, иммунитет и восстановление</span>
                                <span class="card-tariff-pros">Список преимуществ:</span>
                                <div class="tariff-pros-of-card">
                                    <div class="icon-pros">
                                        <img :src="DNA" alt="DNA" class="tariff-icon">
                                        <span class="pros">Подбор комплекса под цель</span>
                                    </div>
                                    <div class="icon-pros">
                                        <img :src="bag" alt="bag" class="tariff-icon">
                                        <span class="pros">Комплекс на 2 месяца</span>
                                    </div>
                                    <div class="icon-pros">
                                        <img :src="truck" alt="truck" class="tariff-icon">
                                        <span class="pros">Экспресс-доставка</span>
                                    </div>
                                    <div class="icon-pros">
                                        <img :src="call" alt="call" class="tariff-icon">
                                        <span class="pros">Личная поддержка в чате</span>
                                    </div>
                                </div>
                                <span class="card-tariff-price">Цена: от 9 990 &#8376;</span>
                                <button class="choose-tariff">Выбрать тариф</button>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="carousel-item-wrapper">
                            <div class="card-tariff">
                            <span class="card-tariff-title">Про</span>
                            <span class="card-tariff-subtitle">Максимум заботы и результатов</span>
                            <span class="card-tariff-pros">Список преимуществ:</span>
                            <div class="tariff-pros-of-card">
                                <div class="icon-pros">
                                    <img :src="doctorsvg" alt="doctor" class="tariff-icon">
                                    <span class="pros">Консультация со специалистом</span>
                                </div>
                                <div class="icon-pros">
                                    <img :src="pack" alt="pack" class="tariff-icon">
                                    <span class="pros">Курсовая схема на 3 месяца</span>
                                </div>
                                <div class="icon-pros">
                                    <img :src="bar" alt="bar" class="tariff-icon">
                                    <span class="pros">Отчёт по результатам</span>
                                </div>
                                <div class="icon-pros">
                                    <img :src="gift" alt="gift" class="tariff-icon">
                                    <span class="pros">Подарки и бонусы внутри</span>
                                </div>
                            </div>
                                <span class="card-tariff-price">Цена: от 17 990 &#8376;</span>
                                <button class="choose-tariff">Выбрать тариф</button>
                            </div>
                        </div>
                    </div>
                </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </section>
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

        <section class="solve-the-problem">
            <div class="container">
                <div class="title-image">
                    <div class="title-subtitle-v2">
                        <span class="title-page">Какую проблему мы решаем?</span>
                        <span class="subtitle-page">Мы понимаем ваши ежедневные вызовы и предлагаем эффективные решения</span>
                    </div>
                    <div class="image">
                        <img :src="sleep" alt="sleep">
                    </div>
                </div>
                <div class="seven-cards">
                    <div class="upper-cards">
                        <div class="cards green">
                            <div class="vertical green">
                                <span class="vertical-text">VITAX</span>
                            </div>
                            <div class="percentage green">
                                <span class="percentage-text">87%</span>
                            </div>
                            <div class="card-title-subtitle">
                                <span class="title-in-card">Постоянная усталость</span>
                                <span class="subtitle-in-card">С утра уже нет сил, а к вечеру вообще не хочется ничего.</span>
                            </div>
                            <div class="opinions">
                                <span class="opinions-text">2.3K+ людей</span>
                            </div>
                            <div class="more-pop-up green">
                                <span class="more-text">Подробнее</span>
                            </div>
                        </div>
                        <div class="cards blue">
                            <div class="vertical blue">
                                <span class="vertical-text">VITAX</span>
                            </div>
                            <div class="percentage blue">
                                <span class="percentage-text">73%</span>
                            </div>
                            <div class="card-title-subtitle">
                                <span class="title-in-card">Частые простуды</span>
                                <span class="subtitle-in-card">Каждый сквозняк — как вызов. Болеть стало слишком привычно.</span>
                            </div>
                            <div class="opinions">
                                <span class="opinions-text">1.8K+ людей</span>
                            </div>
                            <div class="more-pop-up blue">
                                <span class="more-text">Подробнее</span>
                            </div>
                        </div>
                        <div class="cards purple">
                            <div class="vertical purple">
                                <span class="vertical-text">VITAX</span>
                            </div>
                            <div class="percentage purple">
                                <span class="percentage-text">65%</span>
                            </div>
                            <div class="card-title-subtitle">
                                <span class="title-in-card">Сложный выбор</span>
                                <span class="subtitle-in-card">Всё кажется нужным, но что именно подойдёт — неизвестно.</span>
                            </div>
                            <div class="opinions">
                                <span class="opinions-text">1.5K+ людей</span>
                            </div>
                            <div class="more-pop-up purple">
                                <span class="more-text">Подробнее</span>
                            </div>
                        </div>
                        <div class="cards orange">
                            <div class="vertical orange">
                                <span class="vertical-text">VITAX</span>
                            </div>
                            <div class="percentage orange">
                                <span class="percentage-text">91%</span>
                            </div>
                            <div class="card-title-subtitle">
                                <span class="title-in-card">Нехватка времени</span>
                                <span class="subtitle-in-card">На чтение составов, дозировок и формул просто нет ресурса.</span>
                            </div>
                            <div class="opinions">
                                <span class="opinions-text">2.7K+ людей</span>
                            </div>
                            <div class="more-pop-up orange">
                                <span class="more-text">Подробнее</span>
                            </div>
                        </div>
                    </div>
                    <div class="lower-cards">
                        <div class="wide-cards teal">
                            <div class="vertical teal">
                                <span class="vertical-text">VITAX</span>
                            </div>
                            <div class="percentage teal">
                                <span class="percentage-text">58%</span>
                            </div>
                            <div class="card-title-subtitle">
                                <span class="title-in-wide-card">Проблемы с сердцем</span>
                                <span class="subtitle-in-wide-card">Стресс и нагрузки сказываются на работе сердечно-сосудистой системы.</span>
                            </div>
                            <div class="opinions">
                                <span class="opinions-text">1.2K+ людей</span>
                            </div>
                            <div class="more-pop-up teal">
                                <span class="more-text">Подробнее</span>
                            </div>
                        </div>
                        <div class="wide-cards indigo">
                            <div class="vertical indigo">
                                <span class="vertical-text">VITAX</span>
                            </div>
                            <div class="percentage indigo">
                                <span class="percentage-text">76%</span>
                            </div>
                            <div class="card-title-subtitle">
                                <span class="title-in-wide-card">Ухудшение памяти</span>
                                <span class="subtitle-in-wide-card">Забывчивость и рассеянность мешают работе и личной жизни.</span>
                            </div>
                            <div class="opinions">
                                <span class="opinions-text">1.9K+ людей</span>
                            </div>
                            <div class="more-pop-up indigo">
                                <span class="more-text">Подробнее</span>
                            </div>
                        </div>
                        <div class="wide-cards rose">
                            <div class="vertical rose">
                                <span class="vertical-text">VITAX</span>
                            </div>
                            <div class="percentage rose">
                                <span class="percentage-text">82%</span>
                            </div>
                            <div class="card-title-subtitle">
                                <span class="title-in-wide-card">Плохой сон</span>
                                <span class="subtitle-in-wide-card">Долго засыпаю, часто просыпаюсь, утром чувствую себя разбитым</span>
                            </div>
                            <div class="opinions">
                                <span class="opinions-text">2.1K+ людей</span>
                            </div>
                            <div class="more-pop-up rose">
                                <span class="more-text">Подробнее</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <Popup :isOpen="showPopup" @close="showPopup = false" />
</template>

<script setup>
import Popup from "@/components/modal.vue";
import { ref } from "vue";

const showPopup = ref(false)

import pills from "@/assets/images/MainPage/pills.png";
import sleepy from "@/assets/images/MainPage/sleepy.png";
import sleep from "@/assets/images/MainPage/sleep.png";
import runner from "@/assets/images/MainPage/runner.png";
import hit from "@/assets/images/FourCards/hit.svg";
import thunder from "@/assets/images/FourCards/thunder.svg";
import box from "@/assets/images/FourCards/box.svg";
import dna from "@/assets/images/FourCards/dna.svg";
import orange from "@/assets/images/MainPage/orange.png";
import doctor from "@/assets/images/MainPage/doctor.png";
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

import { onMounted } from "vue";


onMounted(async () => {
    const bootstrap = await import('bootstrap/dist/js/bootstrap.bundle.min.js');
    const MyCarouselElement = document.querySelector('#myCarousel');

    if (MyCarouselElement) {
        new bootstrap.Carousel(MyCarouselElement , {
            interval: 2000,
            touch: false
        });
    }
});
</script>