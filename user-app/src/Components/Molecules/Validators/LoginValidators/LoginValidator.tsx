import "./LoginValidators.css";
import { FC } from "react";
import { VALIDATION_CONTENT } from "./LoginValidatorStrings";
import Paragraph from "../../../Atoms/Paragraph";

interface LoginValidatorProps {
  isValidatedEmail: boolean;
  isValidatedLogin: boolean;
  isValidatedPassword: boolean;
}

const LoginValidator: FC<LoginValidatorProps> = (props): JSX.Element => {
  return (
    <div className="validation-content">
      <Paragraph
        className={props.isValidatedLogin ? "success-succ" : "success-failure"}
        innerText={VALIDATION_CONTENT["LOGGED_IN_SUCCESS"]}
      />
      <Paragraph
        className={
          props.isValidatedPassword ? "success-succ" : "password-failure"
        }
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
