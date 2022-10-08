import { FC } from "react";
import { Title } from "../../Atoms/Div/DivStrings";
import FormHeader from "../../Organisms/Shared/FormHeader";
// import RegisterForm from "../../Organisms/RegisterForm/RegisterForm";
// import registerRequirements from "./RegisterStrings";
import "./RegisterTemplate.css";

const RegisterTemplate: FC = (): JSX.Element => {
  return (
    <div className="register-form">
      <FormHeader formTitle={Title.Register} />
      {/* <RegisterForm
        formType={registerRequirements.type}
        inputTypes={[
          registerRequirements.email,
          registerRequirements.username,
          registerRequirements.password,
          registerRequirements.confirmPassword,
        ]}
        withIcon={false}
      /> */}
    </div>
  );
};

export default RegisterTemplate;
