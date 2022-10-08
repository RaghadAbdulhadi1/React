import { FC } from "react";
import Paragraph from "../../Atoms/Paragraph/Paragraph";
import { VALIDATION_CONTENT } from "./LoginValidatorStrings";
import "./LoginValidators.css";

interface LoginValidatorProps {
  isValidatedLogin: boolean;
  isValidatedEmail: boolean;
  isValidatedPassword: boolean;
}

const LoginValidator: FC<LoginValidatorProps> = (props) => {
  return (
    <div className="validationContent login-validation">
      <Paragraph
        className={props.isValidatedLogin ? "success-succ" : "success-failure"}
        innerText={VALIDATION_CONTENT["LOGGED_IN_SUCCESS"]}
      />
      <Paragraph
        className={props.isValidatedPassword ? "success-succ" : "password-failure"}
        innerText={VALIDATION_CONTENT["PASSWORD_CHECK"]}
      />
      <Paragraph
        className={props.isValidatedEmail ? "success-succ" : "user-failure"}
        innerText={VALIDATION_CONTENT["EMAIL_ADDRESS_CHECK"]}
      />
    </div>
  );
};

export default LoginValidator;
