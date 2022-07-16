import "./TextArea.styles.css";

type TextAreaProps = {
  id: string;
  name: string;
  label: React.ReactNode;
  errorMessage?: string;
  value?: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement> | undefined;
};

export function TextArea({
  id,
  name,
  label,
  errorMessage,
  value,
  onChange,
}: TextAreaProps) {
  return (
    <div className="TextAreaContainer">
      <label htmlFor={id}>{label}</label>
      <textarea id={id} name={name} value={value} onChange={onChange} />
      {errorMessage && <span className="errorMessage">{errorMessage}</span>}
    </div>
  );
}
