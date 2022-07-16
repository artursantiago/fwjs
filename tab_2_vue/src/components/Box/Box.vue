<template>
  <section :class="customClass">
    <header>{{ title }}</header>
    <slot></slot>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";

const { className } = defineProps<{
  title?: string;
  className?: string;
}>();

const customClass = computed(() => `Box ${className}`);
</script>

<style>
.Box {
  padding: 16px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  min-width: 400px;
  min-height: 400px;
}

.Box header {
  padding: 8px 0;
  font-size: 18px;
}
</style>
