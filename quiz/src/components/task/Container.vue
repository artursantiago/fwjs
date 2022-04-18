<template>
  <div class="Container">
    <div class="TabList">
      <TabHeader
        v-for="(tab, index) in tabs"
        :key="index"
        :title="tab.title"
        :selected="state?.selectedTab?.title === tab.title"
        @onSelect="select"
      />
    </div>
    <TabContent :content="state?.selectedTab?.content" />
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, computed } from "vue";
import TabContent from "./TabContent.vue";
import TabHeader from "./TabHeader.vue";

type Tab = {
  title: string;
  content: string;
};

const tabs: Tab[] = [
  {
    title: "tab 1",
    content: "Conteúdo da tab 1",
  },
  {
    title: "tab 2",
    content: "Conteúdo da tab 2",
  },
  {
    title: "tab 3",
    content: "Conteúdo da tab 3",
  },
  {
    title: "tab 4",
    content: "Conteúdo da tab 4",
  },
];

const state = reactive({
  selectedTab: {},
});

function select(title: string) {
  const newSelectedTab = tabs.find((tab) => title === tab.title) || {};
  state.selectedTab = newSelectedTab;
}
</script>

<style scoped>
.Container {
  max-width: 514px;
  min-width: 430px;
  width: 100%;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.TabList {
  display: flex;
  justify-content: space-between;
}
</style>
