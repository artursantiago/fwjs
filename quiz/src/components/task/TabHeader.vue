<template>
  <button type="button" :class="customClass" @click="select(title)">
    {{ title }}
  </button>
</template>

<script setup lang="ts">
import { reactive, ref, computed } from "vue";
const props = defineProps<{
  title: string;
  selected: boolean;
}>();

const customClass = computed(
  () => `TabHeader ${props.selected ? "selected" : ""}`
);

const emit = defineEmits<{
  onSelect: (title: string) => void;
}>();

function select(title: string) {
  emit("onSelect", title);
}
</script>

<style scoped>
.TabHeader {
  background: #cccccc;
  border: 1px solid #777777;
  box-sizing: border-box;
  border-radius: 3px;
  padding: 4px 24px;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
  cursor: pointer;
}
.TabHeader.selected {
  background: #aaaaaa;
  font-weight: 700;
}
</style>
