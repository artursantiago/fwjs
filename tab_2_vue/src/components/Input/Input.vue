<template>
  <div className="InputContainer">
    <label :for="id">{{ label }}</label>
    <input :id="id" :name="name" :value="value" @input="onChange($event)" />
    <span v-if="!!errorMessage" className="errorMessage">{{
      errorMessage
    }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  id: string;
  name: string;
  label: HTMLElement | string; // any
  errorMessage?: string;
  value?: string;
  onChange: (payload: Event) => void;
}>();
</script>

<style>
.InputContainer span {
  display: block;
  color: red;
  font-size: 12px;
}
</style>
