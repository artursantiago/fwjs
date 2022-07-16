<template>
  <button class={'Button'} on:click={onClick} type="button">
    {text}
  </button>
</template>

<script lang="ts">
  import { createEventDispatcher } from "svelte"

  export let text: string

  const dispatcher = createEventDispatcher<{action: string}>()

function onClick() {
	dispatcher('action')
}
</script>

<style>
.Button {
  padding: 8px;
  background: #7b61ff;
  color: white;
  border: none;
}
</style>
