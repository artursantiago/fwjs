import React, { createContext, useContext, useEffect, useState } from "react";

export type Tab = {
  title: string;
  content: string;
};

type TabContextType = {
  tabs?: Tab[];
  selectedTabIndex: number;
  selectedTab?: Tab;
  onTabChange: (index: number) => void;
  setTabs: React.Dispatch<React.SetStateAction<Tab[]>>;
};

const initialTabsValue: Tab[] = [
  {
    content: "Sem Conteúdo",
    title: "Tab",
  },
];

const TabContext = createContext<TabContextType>({} as TabContextType);

type TabProviderProps = {
  children?: React.ReactNode | undefined;
};

export function TabProvider({ children }: TabProviderProps) {
  const [tabs, setTabs] = useState(initialTabsValue);
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const selectedTab = tabs.find((_, index) => index === selectedTabIndex);

  function onTabChange(index: number) {
    setSelectedTabIndex(index);
  }

  useEffect(() => {
    setSelectedTabIndex(0);
  }, [tabs]);

  return (
    <TabContext.Provider
      value={{
        selectedTab,
        selectedTabIndex,
        tabs,
        onTabChange,
        setTabs,
      }}
    >
      {children}
    </TabContext.Provider>
  );
}

export function useTabContext() {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error("useTabContext must be used inside a TabProvider");
  }
  return context;
}
