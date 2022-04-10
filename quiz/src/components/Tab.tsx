import "./Tab.css";

interface TabProps {
  index: number;
  selected?: boolean;
  title: string;
  onClick: (index: number) => void;
}

export function Tab({ index, selected, title, onClick }: TabProps) {
  const classNames = `Tab ${selected ? "selected" : ""}`;

  return (
    <button className={classNames} type="button" onClick={() => onClick(index)}>
      {title}
    </button>
  );
}
