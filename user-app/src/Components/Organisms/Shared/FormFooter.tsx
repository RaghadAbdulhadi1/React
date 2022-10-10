import { FC } from "react";
import Button from "../../Atoms/Button";
import SwitchForm from "../../Molecules/Clickables/SwitchForm";
import TextLink from "../../Molecules/Clickables/TextLink";

interface FormFooterProps {
  formType: string;
  handleLinkClick: React.MouseEventHandler<HTMLAnchorElement>;
  textLink: boolean;
  handleMClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

const FormFooter: FC<FormFooterProps> = (props): JSX.Element => {
  return (
    <div className={`${props.formType}-button`}>
      <Button id={"form-buttons"} className={`${props.formType}-B`} text={props.formType} />
      <div>
        <SwitchForm
          formType={props.formType}
          handleLinkClick={props.handleLinkClick}
        />
        {props.textLink && <TextLink handleMClick={props.handleMClick}/>}
      </div>
    </div>
  );
};

export default FormFooter;
