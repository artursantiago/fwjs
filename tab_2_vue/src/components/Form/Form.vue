<template>
  <Box title="Tabs" className="BoxTabs">
    <Input
      label="Núm.tabs"
      id="numTabs"
      name="numTabs"
      :value="String(numTabs)"
      :onChange="handleNumTabChange"
      :errorMessage="numTabsErrorMessage"
    />
    <hr />

    <template v-for="(tab, index) in state.formTabs">
      <Input
        label="Título"
        id="title"
        name="title"
        :value="tab.title"
        :onChange="(event) => changeTabField('title', index, (event?.target as any)?.value)"
        :errorMessage="tab.errorMessage?.title"
      />

      <TextArea
        label="Conteúdo"
        id="content"
        name="content"
        :value="tab.content"
        :onChange="(event) => changeTabField('content', index, (event?.target as any)?.value)"
        :errorMessage="tab.errorMessage?.content"
      ></TextArea>
    </template>

    <Button text="Salvar" :action="saveFormTabs"></Button>
  </Box>
</template>

<script setup lang="ts">
import { inject, reactive, ref, watch } from "vue";

import Box from "../Box/Box.vue";
import Button from "../Button/Button.vue";
import Input from "../Input/Input.vue";
import TextArea from "../TextArea/TextArea.vue";
import { generateTabs, validateTabs } from "../../utils";

export type FormTab = {
  title: string;
  content: string;
  errorMessage: {
    title?: string;
    content?: string;
  };
};

let numTabs = ref(0);
let numTabsErrorMessage = ref("");
const state = reactive({
  formTabs: generateTabs(numTabs.value),
});

const { setTabs } = inject("actions") as any;

function saveFormTabs() {
  const { validatedTabs, hasErrors } = validateTabs(state.formTabs);

  if (hasErrors) {
    state.formTabs = validatedTabs;
    return;
  }

  setTabs(state.formTabs);
}

function changeTabField(
  field: "title" | "content",
  index: number,
  value: string
) {
  state.formTabs = state.formTabs.map((tab, i) => {
    if (index === i) {
      return {
        ...tab,
        [field]: value,
      };
    }
    return tab;
  });
}

function handleNumTabChange(event: Event) {
  numTabs.value = Number((event?.target as any)?.value);
}

watch(numTabs, () => {
  if (numTabs.value < 1) {
    numTabsErrorMessage.value = "Não pode ser menor do que 1";
    return;
  }

  state.formTabs = generateTabs(numTabs.value, state.formTabs);
  numTabsErrorMessage.value = "";
});
</script>
