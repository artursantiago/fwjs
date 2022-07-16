import "./Box.styles.css";

type BoxProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

export function Box(props: BoxProps) {
  return (
    <section className={`Box ${props.className}`}>
      <header>{props.title}</header>
      {props.children}
    </section>
  );
}
