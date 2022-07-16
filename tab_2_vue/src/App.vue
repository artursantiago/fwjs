<template>
  <AppProvider>
    <div className="App">
      <TabsForm />

      <Box title="Conteúdo" className="BoxContent">
        <Tabs />
      </Box>
    </div>
  </AppProvider>
</template>

<script setup lang="ts">
import Box from "./components/Box/Box.vue";
import Tabs from "./components/Tabs/index.vue";
import TabsForm from "./components/Form/Form.vue";
import AppProvider from "./components/AppProvider/AppProvider.vue";
</script>

<style>
@import "./App.css";
</style>
