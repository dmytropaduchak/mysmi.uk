import { FC } from "react";

interface TemplateProps {
  message: string;
  email: string;
}

export const TemplateEmail: FC<Readonly<TemplateProps>> = (props) => (
  <div>
    {props.message}
  </div>
);

TemplateEmail.displayName = "TemplateEmail";
export default TemplateEmail;