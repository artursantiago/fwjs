import "./Tab.css";

interface TabProps {
  index: number;
  selected?: boolean;
  title: string;
  variant?: "contained" | "outlined";
  onClick: (index: number) => void;
}

export function Tab({
  index,
  selected,
  title,
  onClick,
  variant = "contained",
}: TabProps) {
  const classNames = `Tab ${selected ? "selected" : ""} ${variant}`;

  return (
    <button className={classNames} type="button" onClick={() => onClick(index)}>
      {title}
    </button>
  );
}
