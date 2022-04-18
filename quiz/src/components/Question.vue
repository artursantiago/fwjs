<template>
  <h1>{{ statement }}</h1>
  <button v-for="option in options" :key="option" @click="select" type="button">
    {{ option }}
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  statement: string;
  options: string[];
}>();

const emit = defineEmits<{
  onSelection: (e: string, index: number) => void;
}>();

function select(e) {
  emit("onSelection", e);
}
</script>
