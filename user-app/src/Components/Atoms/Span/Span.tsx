import { FC } from "react";

interface SpanProps {
  href: string;
  innerText: string;
  spanText: string;
}

const Span: FC<SpanProps> = (props): JSX.Element => {
  return (
    <span>
      {props.spanText}
      <a href={props.href}>{props.innerText}</a>
    </span>
  );
};

export default Span;
