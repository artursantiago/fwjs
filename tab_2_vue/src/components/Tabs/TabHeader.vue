<template>
  <div>
    <button :class="className" type="button" @click="handleOnClick">
      {{ title }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { inject, computed } from "vue";

const { title, index } = defineProps<{
  title: string;
  index: number;
}>();

const { selectedTabIndex } = inject("state") as any;
const { onTabChange } = inject("actions") as any;

const className = computed(
  () => `TabHeader ${selectedTabIndex.value === index ? "selected" : ""}`
);

function handleOnClick() {
  onTabChange(index);
}
</script>

<style>
.InputContainer span {
  display: block;
  color: red;
  font-size: 12px;
}
</style>
