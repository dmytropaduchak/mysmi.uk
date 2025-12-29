interface Props {
  name: string;
  phone: string;
  digital: boolean;
  postcode: string;
  registration: string;
  services: string[];
}

export default function EmailBookingClient(props: Props) {
  return (
    <div>
      <h2>Personalized Quote for &quot;{props.name}&quot;:</h2>
      <ul>
        <li><strong>Phone Number</strong>: <a href={`tel:${props.phone}`}>{props.phone}</a></li>
        <li><strong>Post Code</strong>: <a href={`https://maps.google.com/maps?q=${props.postcode}`}>{props.postcode}</a></li>
        <li><strong>Registration Number</strong>: <a href={`https://www.carcheck.co.uk/reg?i=${props.registration.toUpperCase()}`}>{props.registration.toUpperCase()}</a></li>
        <li><strong>Type of Service</strong>: {props.services?.join(' ')}</li>
        <li><strong>Key Type</strong>: {props.digital ? 'Keyless Entry (Push-Button Start)' : 'Traditional Key'}</li>
      </ul>
    </div>
  );
}
