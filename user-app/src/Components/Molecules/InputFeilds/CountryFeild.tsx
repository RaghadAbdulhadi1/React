import "./CountryFeild.css";
import { FunctionComponent } from "react";
import COUNTRY_CHOICES from "../../Atoms/Option/OptionFeildStrings";
import Option from "../../Atoms/Option/index";

const CountryFeild: FunctionComponent = () => {
  return (
    <select className="country-choices">
      {COUNTRY_CHOICES.map((country): JSX.Element => {
        return <Option key={country} innerText={country} />;
      })}
      ;
    </select>
  );
};

export default CountryFeild;
