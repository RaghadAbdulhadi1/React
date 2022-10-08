import { FC } from "react";
// import Button from "../../Atoms/Button/Button";
import Country from "../../Molecules/InputFeilds/CountryFeild";
// import FormFeild from "../../Molecules/InputFeilds/FormFeild";
import GenderFeild from "../../Molecules/InputFeilds/GenderFeild";
// import SwitchForm from "../../Molecules/Clickables/SwitchForm";
import TextLink from "../../Molecules/Clickables/TextLink";
// import FormFooter from "../Shared/FormFooter";

interface RegisterFormProps {
  formType: string;
  inputTypes: string[];
  withIcon: boolean;
}

const RegisterForm: FC<RegisterFormProps> = (
  props: RegisterFormProps
): JSX.Element => {
  return (
    <form className={props.formType}>
      {/* {props.inputTypes.map((inputType): JSX.Element => {
        return (
          <FormFeild
            key={inputType}
            formType={props.formType}
            inputType={inputType}
            withIcon={true}
          />
        );
      })} */}
      <Country />
      <GenderFeild />
      {/* <FormFooter formType={props.formType} /> */}
      <TextLink />
    </form>
  );
};

export default RegisterForm;
