<template>
  <div class="Tabs">
    <div>
      <div class="TabNavList">
        {#each $tabs as tab, index (index)}
          <TabHeader
            index={index}
            title={tab.title}
          />
        {/each}
      </div>
      <TabContent />
    </div>
  </div>
</template>

<script lang="ts">
import type { AppContextType } from "src/utils";

import { getContext } from "svelte";

import TabContent from "./TabContent.svelte";
import TabHeader from "./TabHeader.svelte";

const { tabs } = getContext<AppContextType>('appContext')
</script>

<style>
.TabNavList {
  display: flex;
}
</style>
