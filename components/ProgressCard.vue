<template>
  <div class="default-progress-card">
    <div class="inner-circle">
      <span class="number-in-circle">{{ stepNumber }}</span>
    </div>
    <div class="progress-time">
      <span class="progress-time-text">{{ timePeriod }}</span>
    </div>
    <div class="title-subtitle-pc">
      <span class="title-progress-card">{{ title }}</span>
      <span class="subtitle-progress-card">{{ subtitle }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  stepNumber: number;
  timePeriod: string;
  title: string;
  subtitle: string;
}>();
</script>