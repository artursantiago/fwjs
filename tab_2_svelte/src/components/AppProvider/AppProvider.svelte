<template>
  <slot></slot>
</template>

<script lang="ts">
import { writable, get, Writable } from "svelte/store";
import { setContext } from "svelte";
import type { Tab } from "src/utils";

const initialTabsValue: Tab[] = [
  {
    content: "Sem Conteúdo",
    title: "Tab",
  },
];

const tabs = writable(initialTabsValue);
const selectedTabIndex = writable(0);

function onTabChange(index: number) {
  selectedTabIndex.set(index);
}

function setTabs(newTabs: Tab[]) {
  console.log('setTabs', newTabs)
  tabs.set(newTabs);
}

setContext("appContext", {
  tabs,
  selectedTabIndex,
  onTabChange,
  setTabs,
});

tabs.subscribe(() => {
  selectedTabIndex.set(0);
});
</script>