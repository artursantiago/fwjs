<template>
  <slot></slot>
</template>

<script setup lang="ts">
import { provide, reactive, computed, watch, ref } from "vue";

export type Tab = {
  title: string;
  content: string;
};

const initialTabsValue: Tab[] = [
  {
    content: "Sem Conteúdo",
    title: "Tab",
  },
];

const state = reactive({
  tabs: initialTabsValue,
  selectedTabIndex: 0,
});

const selectedTab = computed(
  () => state.tabs.filter((_, index) => index === state.selectedTabIndex)?.[0]
);

function onTabChange(index: number) {
  state.selectedTabIndex = index;
}

function setTabs(newTabs: Tab[]) {
  state.tabs = newTabs;
}

provide("state", {
  tabs: computed(() => state.tabs),
  selectedTabIndex: computed(() => state.selectedTabIndex),
  selectedTab,
});
provide("actions", {
  onTabChange,
  setTabs,
});

watch(
  () => state.tabs,
  () => {
    state.selectedTabIndex = 0;
  }
);
</script>

<style></style>
