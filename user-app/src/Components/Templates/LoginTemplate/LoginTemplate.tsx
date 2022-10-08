import "./LoginTemplate.css";
import { FC, useState } from "react";
import { Title } from "../../Atoms/Div/DivStrings";
import FormHeader from "../../Organisms/Shared/FormHeader";
import LoginForm from "../../Organisms/LoginForm/LoginForm";
import loginRequirements from "./LoginStrings";
import getLocalStorage from "../../Utils/LocalStorage/LocalStorage";

const LoginTemplate: FC = (): JSX.Element => {
  type Values = {
    email: string;
    password: string;
  };

  type Validator = boolean;

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

  return (
    <div className="login-form">
      <FormHeader formTitle={Title.Login} />
      <LoginForm
        formType={loginRequirements.type}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        inputTypes={[loginRequirements.email, loginRequirements.password]}
        withIcon={false}
        isValidatedLogin={successValidator}
        isValidatedEmail={emailValidator}
        isValidatedPassword={passwordValidator}
      />
    </div>
  );
};

export default LoginTemplate;
