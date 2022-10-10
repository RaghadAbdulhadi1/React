import "./LoginTemplate.css";
import { FC, useState } from "react";
import { getLocalStorage } from "../../Utils/LocalStorage/LocalStorage";
import { Title } from "../../Atoms/Div/DivStrings";
import FormHeader from "../../Organisms/Shared/FormHeader";
import LoginForm from "../../Organisms/LoginForm/LoginForm";
import loginRequirements from "./LoginStrings";
import Modal from "../../Molecules/Modal/index";

interface LoginTemplateProps {
  handleLinkClick: React.MouseEventHandler<HTMLAnchorElement>;
}

type Values = {
  email: string;
  password: string;
};

type Validator = boolean;

const LoginTemplate: FC<LoginTemplateProps> = (
  props: LoginTemplateProps
): JSX.Element => {
  const [values, setValues] = useState<Values>({
    email: "",
    password: "",
  });

  const [successValidator, setSuccessValidator] = useState<Validator>(false);

  const [emailValidator, setEmailValidator] = useState<Validator>(false);

  const [passwordValidator, setPasswordValidator] = useState<Validator>(false);

  const handleSuccValidation = (): void => {
    setSuccessValidator(!successValidator);
  };

  const handleEmailValidation = (): void => {
    setEmailValidator(!emailValidator);
  };

  const handlePasswordValidation = (): void => {
    setPasswordValidator(!passwordValidator);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const data = getLocalStorage();

    data[values.email] && data[values.password] === values.password
      ? handleSuccValidation()
      : data[values.email]
      ? handlePasswordValidation()
      : handleEmailValidation();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleOnBlur = (
    event: React.FocusEvent<HTMLInputElement>
  ): void => {console.log(event.target.name)};

  const handleOnFocus = (
    event: React.FocusEvent<HTMLInputElement>
  ): void => {console.log(event.target.value)};

  const handleOnInput = (
    event: React.FocusEvent<HTMLInputElement>
  ): void => {console.log(event.target.value)};

  return (
    <div className="login-form">
      <FormHeader formTitle={Title.Login} />
      <LoginForm
        formType={loginRequirements.type}
        handleChange={handleChange}
        handleLinkClick={props.handleLinkClick}
        handleSubmit={handleSubmit}
        inputTypes={[loginRequirements.email, loginRequirements.password]}
        isValidatedEmail={emailValidator}
        isValidatedLogin={successValidator}
        isValidatedPassword={passwordValidator}
        onBlur={handleOnBlur}
        onFocus={handleOnFocus}
        onInput={handleOnInput}
        withIcon={false}
      />
    </div>
  );
};

export default LoginTemplate;
