<template>
  <div>
    <button class={className} type="button" on:click={handleOnClick}>
      { title }
    </button>
  </div>
</template>

<script lang="ts">
import type { AppContextType } from "src/utils";

import { getContext } from "svelte"

export let title: string = ""
export let index: number

const {selectedTabIndex, onTabChange} = getContext<AppContextType>('appContext')

$: className = `TabHeader ${$selectedTabIndex === index ? "selected" : ""}`

function handleOnClick() {
  	onTabChange(index)
}
</script>

<style>
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
</style>
