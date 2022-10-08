import { checkPlaceholderType } from "../../Utils/InputUtils/InputUtils";
import { FC } from "react";
import Icon from "../../Atoms/Icon/Icon";
import Input from "../../Atoms/Input/Input";
import "./FormFeild.css";

interface FormFeildProps {
  formType: string;
  inputType: string;
  withIcon: boolean;
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormFeild: FC<FormFeildProps> = (props: FormFeildProps): JSX.Element => {
  return (
    <div className="input-feild">
      <Input
        className={`${props.formType}-${props.inputType}`}
        placeholder={checkPlaceholderType(props.inputType)}
        type={props.inputType}
        changeHandler={props.onChangeHandler}
      />
      {props.withIcon && <Icon className={props.inputType} />}
    </div>
  );
};

export default FormFeild;
