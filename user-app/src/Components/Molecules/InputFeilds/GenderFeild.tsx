import "./GenderFeild.css";
import { FunctionComponent } from "react";
import Radio from "../../Atoms/Radio/index";
import RadioChoices from "../../Atoms/Radio/RadioStrings";

const GenderFeild: FunctionComponent = (): JSX.Element => {
  const FEMALE = RadioChoices.Female;
  const MALE = RadioChoices.Male;

  return (
    <div className="gender-choices">
      <Radio name={FEMALE} innerText={FEMALE} />
      <Radio name={MALE} innerText={MALE} />
    </div>
  );
};

export default GenderFeild;
