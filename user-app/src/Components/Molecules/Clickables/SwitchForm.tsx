import "./SwitchForm.css";
import { FC } from "react";
import { formSwitchText, linkText } from "../../Utils/LinksUtils/LinksUtils";
import ParagraphLink from "../../Atoms/ParagraphLink/index";

interface SwitchFormProps {
  formType: string;
  handleLinkClick: React.MouseEventHandler<HTMLAnchorElement>;
}

const SwitchForm: FC<SwitchFormProps> = (props): JSX.Element => {
  return (
    <ParagraphLink
      handleLinkClick={props.handleLinkClick}
      innerText={formSwitchText(props.formType)}
      className={"link"}
      href="#"
      anchorInnerText={linkText(props.formType)}
    />
  );
};

export default SwitchForm;
