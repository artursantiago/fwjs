import type { Ref } from "vue";

type FormTab = {
  title: string;
  content: string;
  errorMessage: {
    title?: string;
    content?: string;
  };
};

function createTab(prop?: Partial<FormTab>): FormTab {
  return {
    content: "",
    title: "",
    errorMessage: {},
  };
}

export function generateTabs(
  numTabs: number,
  previousTabs: FormTab[] = []
): FormTab[] {
  let newTabs = [...previousTabs];

  const remainingTabs = numTabs - newTabs.length;

  if (remainingTabs >= 0) {
    newTabs = [
      ...newTabs,
      ...Array.from({ length: remainingTabs }).map(() => {
        const newTab = createTab();
        return newTab;
      }),
    ];

    return newTabs;
  }

  return newTabs.slice(0, numTabs);
}

export function validateTabs(formTabs: FormTab[]) {
  let hasErrors = false;
  const validatedTabs = formTabs.map((tab) => {
    const newTab: FormTab = { ...tab, errorMessage: {} };
    if (!tab.title) {
      newTab.errorMessage.title = "É necessário informar o título da aba";
      hasErrors = true;
    }
    if (!tab.content) {
      newTab.errorMessage.content = "É necessário informar o conteúdo da aba";
      hasErrors = true;
    }

    return newTab;
  });

  return { hasErrors, validatedTabs };
}
