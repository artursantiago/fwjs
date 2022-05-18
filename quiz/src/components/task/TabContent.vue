<template>
  <p :class="customClass">{{ content || DEFAULT_CONTENT }}</p>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props =
  defineProps<{
    content?: string;
    variant?: "contained" | "outlined";
  }>();

const customClass = computed(
  () => `TabContent ${props.variant || "contained"}`
);

const DEFAULT_CONTENT = "Selecione uma tab...";
</script>

<style scoped>
.TabContent {
  background: #f0f0f0;
  border: 1px solid #aaaaaa;
  box-sizing: border-box;
  border-radius: 10px;
  min-height: 130px;
  padding: 24px;

  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
}

.TabContent.outlined {
  background: transparent;
  border: 1px solid #aaaaaa;
}
</style>
