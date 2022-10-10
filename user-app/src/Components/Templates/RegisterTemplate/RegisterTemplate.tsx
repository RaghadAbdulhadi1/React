import "./RegisterTemplate.css";
import { FC, useState } from "react";
import { Title } from "../../Atoms/Div/DivStrings";
import FormHeader from "../../Organisms/Shared/FormHeader";
import RegisterForm from "../../Organisms/RegisterForm/RegisterForm";
import registerRequirements from "./RegisterStrings";
import { validateUsername } from "../../Utils/Validators/Validators";

interface RegisterTemplateProps {
  handleLinkClick: React.MouseEventHandler<HTMLAnchorElement>;
  handleMClick:React.MouseEventHandler<HTMLAnchorElement>;
}

const RegisterTemplate: FC<RegisterTemplateProps> = (
  props: RegisterTemplateProps
): JSX.Element => {
  const handleSubmit = (): void => {
    // console.log("RegisterTemplate");
  };

  const handleChange = (): void => {
    // console.log("RegisterTemplate");
  };

  const [input, setInput] = useState("");
  const [onValidater, setOnValidate] = useState(false);

  const handleOnBlur = (): void => {
    setOnValidate(!onValidater);
  };

  const handleOnFocus = (): void => {
    setOnValidate(!onValidater);
  };

  const handleOnInput = (event: React.FocusEvent<HTMLInputElement>): void => {
    setInput(event.target.name);
    console.log(input);
  };

  return (
    <>
    <div className="register-form">
      <FormHeader formTitle={Title.Register} />
      <RegisterForm
        onValidate={onValidater? "onUserValidation" : ""}
        isValidated={validateUsername(input)}
        onBlur={handleOnBlur}
        onFocus={handleOnFocus}
        onInput={handleOnInput}
        formType={registerRequirements.type}
        handleChange={handleChange}
        handleLinkClick={props.handleLinkClick}
        handleSubmit={handleSubmit}
        inputTypes={[
          registerRequirements.email,
          registerRequirements.username,
          registerRequirements.password,
          registerRequirements.confirmPassword,
        ]}
        withIcon={false}
        handleMClick={props.handleMClick}
      />
    </div>
    </>
  );
};

export default RegisterTemplate;
