import React, { FC } from "react";

interface InputProps {
  changeHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className: string;
  onBlur: React.FocusEventHandler<HTMLInputElement> | undefined;
  onFocus: React.FocusEventHandler<HTMLInputElement> | undefined;
  onInput: React.FormEventHandler<HTMLInputElement> | undefined;
  placeholder: string;
  type: string;
}

const Input: FC<InputProps> = (props): JSX.Element => {
  return (
    <input
      className={`${props.className}`}
      name={props.type}
      onBlur={props.onBlur}
      onChange={props.changeHandler}
      onFocus={props.onFocus}
      onInput={props.onInput}
      placeholder={props.placeholder}
      type={props.type}
    ></input>
  );
};

export default Input;
