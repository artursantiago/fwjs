import { useTabContext } from "../../context/TabContext";

type TabHeaderProps = {
  title: string;
  index: number;
};

export function TabHeader({ title, index }: TabHeaderProps) {
  const { selectedTabIndex, onTabChange } = useTabContext();
  const selected = selectedTabIndex === index;

  const classNames = `TabHeader ${selected ? "selected" : ""}`;

  return (
    <div>
      <button
        className={classNames}
        type="button"
        onClick={() => onTabChange(index)}
      >
        {title}
      </button>
    </div>
  );
}
