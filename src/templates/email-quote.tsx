import { FC } from "react";

interface TemplateProps {
  name: string;
  phone: string;
  digital: boolean;
  postcode: string;
  registration: string;
  services: string[];
}

export const TemplateEmail: FC<Readonly<TemplateProps>> = (props) => (
  <div>
    <h1>Personalized Quote for `{props.name}`</h1>
    <ul>
      <li><strong>Phone Number</strong>: <a href={`tel:${props.phone}`}>{props.phone}</a></li>
      <li><strong>Post Code</strong>: <a href={`https://maps.google.com/maps?q=${props.postcode}`}>{props.postcode}</a></li>
      <li><strong>Registration Number</strong>: {props.registration.toUpperCase()}</li>
      <li><strong>Type of Service</strong>: {props.services?.join(' ')}</li>
      <li><strong>Key Type</strong>: {props.digital ? 'Keyless Entry (Push-Button Start)' : 'Traditional Key'}</li>
    </ul>
  </div>
);

TemplateEmail.displayName = "TemplateEmail";
export default TemplateEmail;