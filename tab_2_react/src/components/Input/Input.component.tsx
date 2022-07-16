import "./Input.styles.css";

type InputProps = {
  id: string;
  name: string;
  label: React.ReactNode;
  errorMessage?: string;
  value?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

export function Input({
  id,
  name,
  label,
  errorMessage,
  value,
  onChange,
}: InputProps) {
  return (
    <div className="InputContainer">
      <label htmlFor={id}>{label}</label>
      <input id={id} name={name} value={value} onChange={onChange} />
      {errorMessage && <span className="errorMessage">{errorMessage}</span>}
    </div>
  );
}
