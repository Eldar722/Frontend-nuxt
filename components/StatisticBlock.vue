<template>
  <div class="statistic-block">
    <span class="number-of-statistics">{{ value }}</span>
    <span class="thing-of-statistics">{{ description }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  value: string;
  description: string;
}>();
</script>