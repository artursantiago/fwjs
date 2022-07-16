import { useState, useEffect } from "react";
import { Box } from "./components/Box/Box.component";
import { Button } from "./components/Button/Button.component";
import { Input } from "./components/Input/Input.component";
import { TextArea } from "./components/TextArea/TextArea.component";
import { Tab, useTabContext } from "./context/TabContext";
import { generateTabs, validateTabs } from "./utils";

export type FormTab = Tab & {
  errorMessage: {
    title?: string;
    content?: string;
  };
};

export function TabsForm() {
  const [numTabs, setNumTabs] = useState(1);
  const [numTabsErrorMessage, setNumTabsErrorMessage] = useState<string>();
  const [formTabs, setFormTabs] = useState<FormTab[]>(generateTabs(numTabs));
  const { setTabs } = useTabContext();

  function saveFormTabs() {
    const { validatedTabs, hasErrors } = validateTabs(formTabs);

    if (hasErrors) {
      setFormTabs(validatedTabs);
      return;
    }

    setTabs(formTabs);
  }

  function changeTabField(
    field: "title" | "content",
    index: number,
    value: string
  ) {
    setFormTabs((old) =>
      old.map((tab, i) => {
        if (index === i) {
          return {
            ...tab,
            [field]: value,
          };
        }
        return tab;
      })
    );
  }

  useEffect(() => {
    if (numTabs < 1) {
      setNumTabsErrorMessage("Não pode ser menor do que 1");
      return;
    }

    setFormTabs((old) => generateTabs(numTabs, old));
    setNumTabsErrorMessage(undefined);
  }, [numTabs]);

  return (
    <Box title="Tabs" className="BoxTabs">
      <Input
        label="Núm.tabs"
        id="numTabs"
        name="numTabs"
        value={String(numTabs)}
        onChange={(event) => {
          setNumTabs(Number(event.target.value));
        }}
        errorMessage={numTabsErrorMessage}
      />
      <hr />

      {formTabs.map((tab, index) => (
        <>
          <Input
            label="Título"
            id="title"
            name="title"
            value={tab.title}
            onChange={(event) =>
              changeTabField("title", index, event?.target.value)
            }
            errorMessage={tab.errorMessage?.title}
          />
          <TextArea
            label="Conteúdo"
            id="content"
            name="content"
            value={tab.content}
            onChange={(event) =>
              changeTabField("content", index, event?.target.value)
            }
            errorMessage={tab.errorMessage?.content}
          />
        </>
      ))}

      <Button text="Salvar" action={saveFormTabs} />
    </Box>
  );
}
