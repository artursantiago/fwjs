<Box title="Tabs" className="BoxTabs">
  <Input
    label="Núm.tabs"
    id="numTabs"
    name="numTabs"
    value={String($numTabs)}
    on:Change={handleNumTabChange}
    errorMessage={numTabsErrorMessage}
  />
  <hr />

  {#each formTabs as tab, index (index)}
    <template>
      <Input
        label="Título"
        id="title"
        name="title"
        value={tab.title}
        on:Change={(event) => changeTabField('title', index, event.detail)}
        errorMessage={tab.errorMessage?.title}
      />

      <TextArea
        label="Conteúdo"
        id="content"
        name="content"
        value={tab.content}
        on:Change={(event) => changeTabField('content', index, event.detail)}
        errorMessage={tab.errorMessage?.content}
      ></TextArea>
    </template>
  {/each}
  

  <Button text="Salvar" on:action={saveFormTabs}></Button>
</Box>

<script lang="ts">
import Box from "../Box/Box.svelte";
import Button from "../Button/Button.svelte";
import Input from "../Input/Input.svelte";
import TextArea from "../TextArea/TextArea.svelte";
import { AppContextType, generateTabs, validateTabs } from "../../utils";
import { getContext } from "svelte";
import { writable } from "svelte/store";

let numTabs = writable(0);
let numTabsErrorMessage = "";
let formTabs = generateTabs(0)

const {setTabs} = getContext<AppContextType>('appContext')

function saveFormTabs() {
  const { validatedTabs, hasErrors } = validateTabs(formTabs);

  if (hasErrors) {
    formTabs = validatedTabs;
    return;
  }

  console.log(validatedTabs, hasErrors)

  setTabs(formTabs);
}

function changeTabField(
  field: "title" | "content",
  index: number,
  value: string
) {
  console.log(field, index, value)
  formTabs = formTabs.map((tab, i) => {
    if (index === i) {
      return {
        ...tab,
        [field]: value,
      };
    }
    return tab;
  });
}

function handleNumTabChange(event: any) {
  console.log(handleNumTabChange, event)
  numTabs.set(Number(event.detail))
}

numTabs.subscribe(() => {
  console.log(formTabs)
  if ($numTabs < 1) {
    numTabsErrorMessage = "Não pode ser menor do que 1";
    return;
  }

  formTabs = generateTabs($numTabs, formTabs);
  numTabsErrorMessage = "";
})
</script>
