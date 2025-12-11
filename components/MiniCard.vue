<template>
  <article class="mini-base-card">
    <span class="mini-card-title">{{ title }}</span>
    <span class="mini-card-subtitle">{{ subtitle }}</span>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  subtitle: string;
}>();
</script>