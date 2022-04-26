<script lang="ts">
  import { createEventDispatcher } from "svelte"

  export let title: string;
  export let selected: boolean;

const dispatcher = createEventDispatcher<{selection: string}>()

function onClick() {
	dispatcher('selection', title)
}
</script>

    <button
      type="button"
      class="TabHeader"
      class:selected={selected}
      on:click={onClick}
    >
      { title }
    </button>

<style>
      .TabHeader {
        background: #cccccc;
        border: 1px solid #777777;
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
        cursor: pointer;
      }
      .TabHeader.selected {
        background: #aaaaaa;
        font-weight: 700;
      }
</style>