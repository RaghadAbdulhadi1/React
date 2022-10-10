import { FC } from "react";
import "./Button.css";

interface ButtonProps {
  handleClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  className?: string;
  text: string;
  id?: string;
}

const Button: FC<ButtonProps> = (props): JSX.Element => {
  return (
    <div className={`${props.text}-${props.className}`}>
      <button type="submit" onClick={props.handleClick} id={props.id}>{props.text}</button>
    </div>
  );
};

export default Button;
