import { FC } from "react";
import LoginTemplate from "../../Templates/LoginTemplate/LoginTemplate";
import RegisterTemplate from "../../Templates/RegisterTemplate/RegisterTemplate";
import "./FormsPage.css";

interface FormsPageProps {}

const FormsPage: FC<FormsPageProps> = () => {
  return (
    <div className="forms-container">
      <div className="forms">
        <LoginTemplate />
        <RegisterTemplate />
      </div>
    </div>
  );
};

export default FormsPage;
