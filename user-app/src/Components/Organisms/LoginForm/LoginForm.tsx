import "./LoginForm.css";
import { FC } from "react";
import FormFeild from "../../Molecules/InputFeilds/FormFeild";
import FormFooter from "../Shared/FormFooter";
import LoginValidator from "../../Molecules/Validators/LoginValidators/LoginValidator";

interface LoginFormProps {
  formType: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleLinkClick: React.MouseEventHandler<HTMLAnchorElement>;
  handleSubmit: React.FormEventHandler;
  inputTypes: string[];
  isValidatedEmail: boolean;
  isValidatedLogin: boolean;
  isValidatedPassword: boolean;
  onBlur: React.FocusEventHandler<HTMLInputElement> | undefined;
  onFocus: React.FocusEventHandler<HTMLInputElement> | undefined;
  onInput: React.FormEventHandler<HTMLInputElement> | undefined;
  withIcon: boolean;
}

const LoginForm: FC<LoginFormProps> = (props): JSX.Element => {
  return (
    <form onSubmit={props.handleSubmit} className={props.formType}>
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
      <FormFooter
        formType={props.formType}
        handleLinkClick={props.handleLinkClick}
        textLink={false}
      />
      <LoginValidator
        isValidatedEmail={props.isValidatedEmail}
        isValidatedLogin={props.isValidatedLogin}
        isValidatedPassword={props.isValidatedPassword}
      />
    </form>
  );
};

export default LoginForm;
