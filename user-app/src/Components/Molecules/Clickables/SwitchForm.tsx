import { FC } from "react";
import ParagraphLink from "../../Atoms/ParagraphLink/ParagraphLink";
import { formSwitchText, linkText } from "../../Utils/LinksUtils/LinksUtils";
import "./SwitchForm.css";

interface SwitchFormProps {
  formType: string;
}

const SwitchForm: FC<SwitchFormProps> = (props): JSX.Element => {
  return (
    <ParagraphLink
      innerText={formSwitchText(props.formType)}
      className={"link"}
      href="#"
      anchorInnerText={linkText(props.formType)}
    />
  );
};

export default SwitchForm;
