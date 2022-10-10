import {
  inputTypes,
  feildsPlaceholder,
} from "../../Molecules/InputFeilds/FormFeildStrings";

export const checkPlaceholderType = (type: string): string => {
  return type === inputTypes.email
    ? feildsPlaceholder.email
    : type === inputTypes.password
    ? feildsPlaceholder.password
    : type === inputTypes.username
    ? feildsPlaceholder.username
    : feildsPlaceholder.confirmPassword;
};
