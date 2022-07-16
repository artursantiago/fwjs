<template>
  <p class="TabContent">{{ selectedTab?.content }}</p>
</template>

<script setup lang="ts">
import { inject } from "vue";

const { selectedTab } = inject("state") as any;
</script>
