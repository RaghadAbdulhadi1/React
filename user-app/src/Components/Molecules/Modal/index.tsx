import { FC, useState } from "react";
import Button from "../../Atoms/Button";
import Header from "../../Atoms/Header";
import Paragraph from "../../Atoms/Paragraph";
import "./Modal.css";
import {
  termsAndCondtionsText,
  termsAndCondtionsRejectionMessage,
  termsAndCondtionsTitle,
} from "./ModalStrings";

interface ModalProps {
  handleExitClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const Modal: FC<ModalProps> = (props): JSX.Element => {
  const [reject, setReject] = useState(false);

  return (
    <div className="modal-background">
      <div className="modal-container">
        <Button handleClick={props.handleExitClick} id="x" text="X" />
        <div className="terms-and-conditions">
          <Header
            className={"modal-title"}
            innerText={termsAndCondtionsTitle}
          />
        </div>
        <div>
          <Paragraph className="terms-text" innerText={termsAndCondtionsText} />
        </div>
        <div className="footer">
          <Button
            handleClick={props.handleExitClick}
            className="accept"
            text="Accept"
            id={""}
          />
          <Button
            handleClick={(): void => setReject(!reject)}
            className="reject"
            text="Reject"
          />
        </div>
        {reject && (
          <Paragraph
            className="reject-text"
            innerText={termsAndCondtionsRejectionMessage}
          />
        )}
      </div>
    </div>
  );
};

export default Modal;
