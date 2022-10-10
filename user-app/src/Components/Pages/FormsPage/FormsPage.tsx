import "./FormsPage.css";
import { FC, useState } from "react";
import LoginTemplate from "../../Templates/LoginTemplate/LoginTemplate";
import RegisterTemplate from "../../Templates/RegisterTemplate/RegisterTemplate";
import Modal from "../../Molecules/Modal/index";

const FormsPage: FC = (): JSX.Element => {
  const [active, setActive] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  const handleLinkClick = (): void => setActive((active): boolean => !active);

  const handleMClick = (): void => {
    setOpenModal(!openModal)
  }

  const handleExitClick = (): void => {
    setOpenModal(!openModal)
  }


  return (
    <>
    <div className={`forms-container ${active ? "" : "active"}`}>
      <div className="forms">
        <LoginTemplate handleLinkClick={handleLinkClick} />
        <RegisterTemplate handleLinkClick={handleLinkClick} handleMClick={handleMClick} />
      </div>
    </div>
      {openModal && <Modal handleExitClick={handleExitClick}/> }
    </>

  );
};

export default FormsPage;
