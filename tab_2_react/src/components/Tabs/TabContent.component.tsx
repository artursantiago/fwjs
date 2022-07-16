import { useTabContext } from "../../context/TabContext";

export function TabContent() {
  const { selectedTab } = useTabContext();
  return <p className="TabContent">{selectedTab?.content}</p>;
}
