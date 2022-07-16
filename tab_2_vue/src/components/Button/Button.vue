<template>
  <button :class="'Button'" @click="action" type="button">
    {{ text }}
  </button>
</template>

<script setup lang="ts">
defineProps<{
  text?: string;
  action?: () => void;
}>();
</script>

<style>
.Button {
  padding: 8px;
  background: #7b61ff;
  color: white;
  border: none;
}
</style>
