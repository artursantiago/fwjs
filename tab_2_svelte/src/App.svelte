<template>
  <AppProvider>
  <div class="App">
    <TabsForm />

    <Box title="Conteúdo" className="BoxContent">
      <Tabs />
    </Box>
  </div>
  </AppProvider>
</template>

<script lang="ts">
import Box from "./components/Box/Box.svelte";
import Tabs from "./components/Tabs/index.svelte";
import AppProvider from "./components/AppProvider/AppProvider.svelte";
import TabsForm from "./components/Form/Form.svelte";
</script>

<style>
@import "./App.css";
</style>
