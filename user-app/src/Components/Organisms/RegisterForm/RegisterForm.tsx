import "./RegisterForm.css";
import { FC } from "react";
import Country from "../../Molecules/InputFeilds/CountryFeild";
import FormFeild from "../../Molecules/InputFeilds/FormFeild";
import FormFooter from "../Shared/FormFooter";
import GenderFeild from "../../Molecules/InputFeilds/GenderFeild";
import RegisterValidator from "../../Molecules/Validators/RegisterValidators/RegisterValidator";

interface RegisterFormProps {
  formType: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleLinkClick: React.MouseEventHandler<HTMLAnchorElement>;
  handleSubmit: React.FormEventHandler;
  inputTypes: string[];
  onBlur: React.FocusEventHandler<HTMLInputElement> | undefined;
  onFocus: React.FocusEventHandler<HTMLInputElement> | undefined;
  onInput: React.FormEventHandler<HTMLInputElement> | undefined;
  withIcon: boolean;
  isValidated: boolean;
  onValidate: string;
  handleMClick: React.MouseEventHandler<HTMLAnchorElement>;
}

const RegisterForm: FC<RegisterFormProps> = (
  props: RegisterFormProps
): JSX.Element => {
  return (
    <form className={props.formType} onSubmit={props.handleSubmit}>
      {props.inputTypes.map((inputType): JSX.Element => {
        return (
          <FormFeild
            formType={props.formType}
            inputType={inputType}
            key={inputType}
            onBlur={props.onBlur}
            onChangeHandler={props.handleChange}
            onFocus={props.onFocus}
            onInput={props.onInput}
            withIcon={true}
          />
        );
      })}
      <Country />
      <GenderFeild />
      <FormFooter
        formType={props.formType}
        handleLinkClick={props.handleLinkClick}
        textLink={true}
        handleMClick={props.handleMClick}
      />
      <RegisterValidator
        className={`${props.onValidate}`}
        headerClassName={"validationHeader"}
        isHeader={true}
        isValidated={props.isValidated}
        onContainer={true}
        id={"small-letters"}
        inputType={"password"}
      />
    </form>
  );
};

export default RegisterForm;
