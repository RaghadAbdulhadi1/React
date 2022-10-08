import { FC } from "react";
import Button from "../../Atoms/Button/Button";
import SwitchForm from "../../Molecules/Clickables/SwitchForm";

interface FormFooterProps {
    formType: string;
}
 
const FormFooter: FC<FormFooterProps> = (props): JSX.Element => {
    return (
        <div className={`${props.formType}-button`}>
        <Button className={props.formType} text={props.formType} />
        <SwitchForm formType={props.formType} />
        </div>
    );
}
 
export default FormFooter;
