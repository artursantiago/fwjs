import { useState } from "react";

import { TabContent } from "./TabContent";
import { Tab } from "./Tab";

import "./Container.css";

interface ITab {
  title: string;
  content: string;
}

const initalTabsValue = [
  {
    title: "tab 1",
    content: "Texto do primeiro tab",
  },
  {
    title: "tab 2",
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

interface IContainer {
  tabs?: ITab[];
}

export function Container({ tabs: tabsProps = initalTabsValue }: IContainer) {
  const [selectedTab, setSelectedTab] = useState<ITab>();

  function handleClick(index: number) {
    setSelectedTab(tabsProps.at(index));
  }

  return (
    <div className="Container">
      <nav className="TabList">
        {tabsProps.map((tab, index) => (
          <Tab
            key={tab.title}
            index={index}
            title={tab.title}
            selected={selectedTab?.title === tab.title}
            onClick={handleClick}
          />
        ))}
      </nav>

      <TabContent content={selectedTab?.content} />
    </div>
  );
}
