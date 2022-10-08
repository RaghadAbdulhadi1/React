import { FunctionComponent } from "react";
import COUNTRY_CHOICES from "../../Atoms/Option/OptionFeildStrings";
import Option from "../../Atoms/Option/Option";
import "./CountryFeild.css";


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
