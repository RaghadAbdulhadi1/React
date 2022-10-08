import { FC } from "react";
import FormFeild from "../../Molecules/InputFeilds/FormFeild";
import "./LoginForm.css";
import LoginValidator from "../../Molecules/Validators/LoginValidator";
import FormFooter from "../Shared/FormFooter";

interface LoginFormProps {
  formType: string;
  handleSubmit: React.FormEventHandler;
  inputTypes: string[];
  withIcon: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isValidatedLogin: boolean;
  isValidatedEmail: boolean;
  isValidatedPassword: boolean;
}

const LoginForm: FC<LoginFormProps> = (props): JSX.Element => {
  return (
    <form onSubmit={props.handleSubmit} className={props.formType}>
      {props.inputTypes.map((inputType): JSX.Element => {
        return (
          <FormFeild
          key={inputType}
            onChangeHandler={props.handleChange}
            formType={props.formType}
            inputType={inputType}
            withIcon={true}
          />
        );
      })}
      <FormFooter formType={props.formType} />
      <LoginValidator 
        isValidatedLogin={props.isValidatedLogin} isValidatedEmail={props.isValidatedEmail} isValidatedPassword={props.isValidatedPassword}
      />

    </form>
  );
};

export default LoginForm;
