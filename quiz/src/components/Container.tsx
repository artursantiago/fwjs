import { useState } from "react";

import "./Container.css";
import { TabContent } from "./TabContent";
import { Tab } from "./Tab";

interface ITab {
  title: string;
  content: string;
}

const tabs = [
  {
    title: "tab 1",
    content: "Texto do primeiro tab",
  },
  {
    title: "tab 3",
    content: "Texto do segundo tab",
  },
  {
    title: "tab 3",
    content: "Texto do terceiro tab",
  },
  {
    title: "tab 4",
    content: "Texto do quarto tab",
  },
];

export function Container() {
  const [selectedTab, setSelectedTab] = useState<ITab>();

  function handleClick(index: number) {
    setSelectedTab(tabs.at(index));
  }

  return (
    <>
      {tabs.map((tab, index) => (
        <Tab
          key={tab.title}
          index={index}
          title={tab.title}
          selected={selectedTab?.title === tab.title}
          onClick={handleClick}
        />
      ))}

      <TabContent content={selectedTab?.content} />
    </>
  );
}
