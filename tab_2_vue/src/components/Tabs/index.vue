<template>
  <div className="Tabs">
    <div>
      <div className="TabNavList">
        <TabHeader
          v-for="(tab, index) in tabs"
          :index="index"
          :title="tab.title"
        />
      </div>
      <TabContent />
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, computed } from "vue";
import TabContent from "./TabContent.vue";
import TabHeader from "./TabHeader.vue";

const { tabs } = inject("state") as any;
</script>

<style>
.TabNavList {
  display: flex;
}

.TabHeader {
  background: transparent;
  border: none;
  border-bottom: 2px solid transparent;

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

  color: #ccc;
}
.TabHeader.selected {
  color: black;
  border-bottom: 2px solid blue;
}

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
