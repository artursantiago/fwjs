import "./TabContent.css";

interface TabContentProps {
  content?: string;
  variant?: "contained" | "outlined";
}

export function TabContent({
  content,
  variant = "contained",
}: TabContentProps) {
  const classNames = `TabContent ${variant}`;
  return <p className={classNames}>{content ?? "Selecione uma tab"}</p>;
}
