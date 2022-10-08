import { FC } from "react";
import "./Div.css";

interface DivProps {
  className: string;
  innerText?: string;
}

const Div: FC<DivProps> = (props): JSX.Element => {
  return <div className={props.className}>{props.innerText}</div>;
};

export default Div;
