import "./FormFeild.css";
import { checkPlaceholderType } from "../../Utils/InputUtils/InputUtils";
import { FC } from "react";
import Icon from "../../Atoms/Icon/index";
import Input from "../../Atoms/Input/index";

interface FormFeildProps {
  formType: string;
  inputType: string;
  onBlur: React.FocusEventHandler<HTMLInputElement> | undefined;
  onChangeHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: React.FocusEventHandler<HTMLInputElement> | undefined;
  onInput: React.FormEventHandler<HTMLInputElement> | undefined;
  withIcon: boolean;
}

const FormFeild: FC<FormFeildProps> = (props: FormFeildProps): JSX.Element => {
  return (
    <div className="input-feild">
      <Input
        changeHandler={props.onChangeHandler}
        className={`${props.formType}-${props.inputType}`}
        onBlur={props.onBlur}
        onFocus={props.onFocus}
        onInput={props.onInput}
        placeholder={checkPlaceholderType(props.inputType)}
        type={props.inputType}
      />
      {props.withIcon && <Icon className={props.inputType} />}
    </div>
  );
};

export default FormFeild;
