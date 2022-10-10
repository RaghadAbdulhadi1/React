import { FC } from "react";
import { ReactComponent as EmailIcon } from "../../Assets/Icons/envelope-solid.svg";
import { ReactComponent as PasswordIcon } from "../../Assets/Icons/shield-halved-solid.svg";
import { ReactComponent as UserNamedIcon } from "../../Assets/Icons/user-solid.svg";
import { IconSVG, IconWidth } from "./IconStrings";

interface IconProps {
  className: string;
}

const Icon: FC<IconProps> = (props: IconProps): JSX.Element => {
  return props.className === IconSVG.password ||
    props.className === IconSVG.confirmPassword ? (
    <PasswordIcon width={IconWidth} />
  ) : props.className === IconSVG.email ? (
    <EmailIcon width={IconWidth} />
  ) : (
    <UserNamedIcon width={IconWidth} />
  );
};

export default Icon;
