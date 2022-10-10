import { FC } from "react";
import Div from "../../Atoms/Div/index";
import LineBreak from "../../Atoms/LineBreak/index";

interface FormHeaderProps {
  formTitle: string;
}

const FormHeader: FC<FormHeaderProps> = (props): JSX.Element => {
  return (
    <>
      <Div className="title" innerText={props.formTitle} />
      <LineBreak />
    </>
  );
};

export default FormHeader;
