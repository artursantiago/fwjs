<template>
  <div class="TextAreaContainer">
    <label for={id}>{label}</label>
    <textarea id={id} name={name} value={value} on:input={onChange} />
    {#if !!errorMessage}
      <span class="errorMessage">
        {errorMessage}
      </span>
    {/if}
  </div>
</template>

<script lang="ts">
  import { createEventDispatcher } from "svelte"

  export let id: string;
  export let name: string;
  export let label: HTMLElement | string; // 
  export let errorMessage: string;
  export let value: string;


  const dispatcher = createEventDispatcher<{Change: any}>()

  const onChange = (event) => {
    dispatcher('Change', event.target.value)
  }
</script>

<style>
.TextAreaContainer span {
  display: block;
  color: red;
  font-size: 12px;
}
</style>
