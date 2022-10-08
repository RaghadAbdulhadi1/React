import { FC } from "react";
import { SPAN_STRINGS } from "../../Atoms/Span/SpanStrings";
import Span from "../../Atoms/Span/Span";

const TextLink: FC = (): JSX.Element => {
  return (
    <Span
      href="#"
      innerText={SPAN_STRINGS.TERMS_AND_CONDITIONS}
      spanText={SPAN_STRINGS.REGISTER_CONFIRM_LINK}
    />
  );
};

export default TextLink;
