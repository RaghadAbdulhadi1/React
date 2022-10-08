import React, { FC } from "react";

interface InputProps {
  className: string;
  placeholder: string;
  type: string;
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = (props): JSX.Element => {
  return (
    <input
      className={`${props.className}`}
      placeholder={props.placeholder}
      type={props.type}
      name={props.type}
      onChange={props.changeHandler}
    ></input>
  );
};

export default Input;
