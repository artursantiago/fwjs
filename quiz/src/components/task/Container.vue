<template>
  <div class="Container">
    <div class="TabList">
      <TabHeader
        v-for="(tab, index) in tabsWithDefault"
        :key="index"
        :title="tab.title"
        :variant="tab.variant"
        :selected="state.selectedTab.title === tab.title"
        @onSelect="select"
      />
    </div>
    <TabContent
      :content="state.selectedTab.content"
      :variant="state.selectedTab.variant"
    />
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import TabContent from "./TabContent.vue";
import TabHeader from "./TabHeader.vue";

type Tab = {
  title: string;
  content: string;
  variant?: "contained" | "outlined";
};

const props =
  defineProps<{
    tabs?: Tab[];
  }>();

const initialTabsValue: Tab[] = [
  {
    title: "tab 1",
    content: "Conteúdo da tab 1",
    variant: "outlined",
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

const tabsWithDefault = props.tabs || initialTabsValue;

const state: { selectedTab: Tab } = reactive({
  selectedTab: {
    content: "",
    title: "",
  },
});

function select(title: string) {
  const newSelectedTab = tabsWithDefault.find((tab) => title === tab.title);
  state.selectedTab = newSelectedTab || {
    content: "",
    title: "",
  };
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
