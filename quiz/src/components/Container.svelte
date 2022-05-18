<script lang="ts">
import TabHeader from './TabHeader.svelte'
import TabContent from './TabContent.svelte'

type Tab = {
  title: string;
  content: string;
  variant?: 'contained' | 'outlined';
}

  export let tabs: Tab[] = [
    {
      title: "tab 1",
      content: "Conteúdo da tab 1"
    },
    {
      title: "tab 2",
      content: "Conteúdo da tab 2"
    },
    {
      title: "tab 3",
      content: "Conteúdo da tab 3"
    },
    {
      title: "tab 4",
      content: "Conteúdo da tab 4"
    }
  ];

  let selectedTab: Tab = {
    title: '',
    content: '',
    variant: 'contained'
  };

  function select(event: CustomEvent<string>) {
    const title = event.detail
    const newSelectedTab = tabs.find((tab) => title === tab.title);
    selectedTab = newSelectedTab || {
    title: '',
    content: '',
    variant: 'contained'
  };
  }
</script>



<main class="Container">
  <div class="TabList">
      {#each tabs as tab (tab.title)}
      <TabHeader
        title={tab.title}
        selected={selectedTab.title === tab.title}
        variant={tab.variant}
        on:selection={e => select(e)}
      ></TabHeader>
      {/each}
    </div>
  <TabContent content={selectedTab.content} variant={selectedTab.variant}> </TabContent>
</main>

<style>
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