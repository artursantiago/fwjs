import "./TabContent.css";

interface TabContentProps {
  content?: string;
}

export function TabContent({ content }: TabContentProps) {
  const classNames = `TabContent`;
  return <p className={classNames}>{content ?? "Selecione uma tab"}</p>;
}
