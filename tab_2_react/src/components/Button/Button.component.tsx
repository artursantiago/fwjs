import "./Button.styles.css";

type ButtonProps = {
  text: string;
  action: () => void;
};

export function Button(props: ButtonProps) {
  return (
    <button className="Button" onClick={props.action} type="button">
      {props.text}
    </button>
  );
}
