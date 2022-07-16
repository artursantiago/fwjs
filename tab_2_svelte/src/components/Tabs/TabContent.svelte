<template>
  <p class="TabContent">{ selectedTab?.content }</p>
</template>

<script lang="ts">
import type { AppContextType } from "src/utils";
import { getContext } from "svelte";

const {tabs, selectedTabIndex} = getContext<AppContextType>('appContext')

$: selectedTab = $tabs.filter(
  (_, index) => index === $selectedTabIndex
)?.[0];

</script>

<style>
  .TabContent {
  box-sizing: border-box;
  border-radius: 10px;
  min-height: 130px;
  padding: 0 24px;

  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
}
</style>