<template>
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
                            <ProgressCard
                                v-for="(step, index) in progressSteps"
                                :key="index"
                                :step-number="step.number"
                                :time-period="step.time"
                                :title="step.title"
                                :subtitle="step.subtitle"
                            />
                        </div>
                    </div>
                    <div class="statistics">
                        <StatisticBlock
                            v-for="(stat, index) in statistics"
                            :key="index"
                            :value="stat.value"
                            :description="stat.description"
                            :class="stat.className"
                        />
                        <div class="cta-statistics">
                            <span class="cta-text">Начните прямо сейчас!</span>
                            <button type="button" class="btn-orange-cta">Выбрать витамины</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>

<script lang="ts" setup>
import ProgressCard from '@/components/ProgressCard.vue';
import StatisticBlock from '@/components/StatisticBlock.vue';

const progressSteps = [
    { 
      number: 1, 
      time: '1-2 недели', 
      title: 'Энергия и бодрость', 
      subtitle: 'Повышение энергии на 40%, улучшение сна' 
    },
    { 
      number: 2, 
      time: '1 месяц', 
      title: 'Сильный иммунитет', 
      subtitle: 'Защита от болезней, здоровая кожа' 
    },
    { 
      number: 3, 
      time: '3 месяца', 
      title: 'Полное преображение', 
      subtitle: 'Оптимальный баланс витаминов' 
    },
];

const statistics = [
    { className: 'health', value: '95%', description: 'УЛУЧШЕНИЕ САМОЧУВСТВИЯ' },
    { className: 'energy', value: '+40%', description: 'БОЛЬШЕ ЭНЕРГИИ' },
    { className: 'immunity', value: '2X', description: 'СИЛЬНЕЕ ИММУНИТЕТ' },
];
</script>