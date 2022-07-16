<template>
  <div class="TextAreaContainer">
    <label :for="id">{{ label }}</label>
    <textarea
      :id="id"
      :name="name"
      :value="value"
      @input="onChange($event)"
    ></textarea>
    <span v-if="!!errorMessage" class="errorMessage">{{ errorMessage }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  id: string;
  name: string;
  label: HTMLElement | string;
  errorMessage?: string;
  value?: string;
  onChange: (payload: Event) => void;
}>();
</script>

<style>
.TextAreaContainer span {
  display: block;
  color: red;
  font-size: 12px;
}
</style>
