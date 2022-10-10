import { FC } from "react";
import "./Span.css";
interface SpanProps {
  href: string;
  innerText: string;
  spanText: string;
  handleMClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

const Span: FC<SpanProps> = (props): JSX.Element => {
  return (
    <span>
      {props.spanText}
      <a href={props.href} onClick={props.handleMClick}>{props.innerText}</a>
    </span>
  );
};

export default Span;
