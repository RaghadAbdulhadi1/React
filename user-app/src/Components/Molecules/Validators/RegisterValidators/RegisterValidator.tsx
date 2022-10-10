import { FC } from "react";
import {
  VALIDATION_CONTENT,
  VALIDATION_TITLE,
} from "./RegisterValidatorStrings";
import Header from "../../../Atoms/Header";
import Paragraph from "../../../Atoms/Paragraph";

type Input = "email" | "userName" | "password" | "confirmPassword";

interface RegisterValidatorProps {
  className: string;
  headerClassName: string;
  id?: string;
  inputType: Input;
  isHeader: boolean;
  isValidated: boolean;
  isValidatedCapitalLetters?: boolean;
  isValidatedCharacters?: boolean;
  isValidatedConfirmPassword?: boolean;
  isValidatedEmail?: boolean;
  isValidatedNumbers?: boolean;
  onContainer: boolean;
}

const RegisterValidator: FC<RegisterValidatorProps> = (props): JSX.Element => {

  const validators = {
    userName: (
      <>
        <Header
          className={""}
          innerText={VALIDATION_TITLE.USER_NAME_CHECK}
        />
        <Paragraph
          className={props.isValidated ? "valid" : "invalid"}
          id={props.id}
          innerText={VALIDATION_CONTENT.USER_NAME_CHECK}
        />
      </>
    ),
    email: (
      <>
        <Header
          className={""}
          innerText={VALIDATION_TITLE.EMAIL_ADDRESS_CHECK}
        />
        <Paragraph
          className={props.isValidatedEmail ? "valid" : "invalid"}
          id={props.id}
          innerText={VALIDATION_CONTENT.EMAIL_ADDRESS_CHECK}
        />
      </>
    ),
    password: (
      <>
        <Header
          className={""}
          innerText={VALIDATION_TITLE.PASSWORD_CHECK}
        />
        <Paragraph
          className={props.isValidatedCapitalLetters ? "valid" : "invalid"}
          id={props.id}
          innerText={VALIDATION_CONTENT.PASSWORD_CHECK.CAPITAL_LETTER_CHECK}
        />
        <Paragraph
          className={props.isValidatedCharacters ? "valid" : "invalid"}
          id={props.id}
          innerText={VALIDATION_CONTENT.PASSWORD_CHECK.CHARCHTERS_CHECK}
        />
        <Paragraph
          className={props.isValidatedNumbers ? "valid" : "invalid"}
          id={props.id}
          innerText={VALIDATION_CONTENT.PASSWORD_CHECK.NUMBERS_CHECK}
        />
        <Paragraph
          className={props.isValidatedCapitalLetters ? "valid" : "invalid"}
          id={props.id}
          innerText={VALIDATION_CONTENT.PASSWORD_CHECK.SMALL_LETTER_CHECK}
        />
      </>
    ),
    confirmPassword: (
      <Paragraph
        className={props.isValidatedConfirmPassword ? "valid" : "invalid"}
        id={props.id}
        innerText={VALIDATION_CONTENT.CONFIRM_PASSWORD_CHECK}
      />
    ),
  };

  return (
    <div className={`username-validation ${props.className}`}>
      {validators[props.inputType]}
    </div>
  );
};

export default RegisterValidator;
