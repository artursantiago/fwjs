import { useTabContext } from "../../context/TabContext";
import { TabContent } from "./TabContent.component";
import { TabHeader } from "./TabHeader.component";
import "./Tabs.styles.css";

export function Tabs() {
  const { tabs } = useTabContext();

  return (
    <div className="Tabs">
      <div>
        <div className="TabNavList">
          {tabs?.map((tab, index) => (
            <TabHeader index={index} title={tab.title} />
          ))}
        </div>

        <TabContent />
      </div>
    </div>
  );
}
