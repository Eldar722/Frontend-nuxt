<template>
  <article class="base-card">
    <span class="card-title custom">{{ title }}</span>
    <span class="card-subtitle custom">{{ subtitle }}</span>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  subtitle: string;
}>();
</script>