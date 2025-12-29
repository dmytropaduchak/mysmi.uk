import { Link, Text, Preview, Section, Body, Container, Row, Column } from "@react-email/components";
import { Html } from "@react-email/html";
import { Head } from "@react-email/head";
import { Font } from "@react-email/font";

interface Props {
  data: any;
}

const styleHeaderLink = {
  color: "#6f6f6f",
  textDecoration: "none",
  fontWeight: 100,
};

const styleStrong = {
  fontWeight: 500,
};

const styleBody = {
  fontSize: "1rem",
  lineHeight: 1.5,
};

const styleSection = {
  marginTop: "16px",
  marginBottom: "16px",
};

const styleText = {
  color: "#6f6f6f",
  fontSize: "1rem",
  fontWeight: 100,
  marginBottom: "8px",
};

const styleLabel = {
  color: "#6f6f6f",
  fontWeight: 500,
};

const styleFooterText = {
  fontSize: "0.75rem",
  lineHeight: "1.66",
  color: "#6f6f6f",
  margin: 0,
  marginTop: "16px",
};

const styleButton = {
  border: "1px solid #e9853dff",
  padding: "8px 25px",
  borderRadius: "64px",
  fontSize: "1rem",
  fontWeight: 100,
  textDecoration: "none",
  display: "inline-block",
  marginTop: "12px",
};

const styleAcceptButton = {
  ...styleButton,
  color: "#e9853dff",
  border: "1px solid #e9853dff",
};

const styleCancelButton = {
  ...styleButton,
  color: "#6f6f6f",
  border: "1px solid #6f6f6f",
};

export default function EmailBookingAdmin({ data }: Props) {
const acceptUrl = `https://mysmi.uk/booking/${data?.id}/?status=accept`;
const cancelUrl = `https://mysmi.uk/booking/${data?.id}/?status=cancel`;
  return (
    <Html lang="en">
      <Head>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily={["Helvetica", "Arial", "sans-serif"]}
          webFont={{
            url: "https://fonts.googleapis.com/css2?family=Roboto:wght@100;500&display=swap",
            format: "woff2",
          }}
          fontWeight={100}
          fontStyle="normal"
        />
      </Head>

      <Body style={styleBody}>
        <Preview>🚗🔑 Car Locksmith Service Booking #{data?.id}</Preview>

        <Container>
          <Section>
            <Link style={styleHeaderLink} href="https://mysmi.uk">
              mySMI.uk
            </Link>
          </Section>

          <Section style={styleSection}>
            <Text style={styleText}>
              <strong style={styleStrong}>🛠 Car Locksmith Service Booking Request</strong>
            </Text>
          </Section>

          <Section style={styleSection}>
            <Text style={styleText}>
              <span style={styleLabel}>Name:</span> {data?.name}
            </Text>
            <Text style={styleText}>
              <span style={styleLabel}>Phone:</span>{" "}
              <Link href={`tel:${data?.phone}`}>{data?.phone}</Link>
            </Text>
            <Text style={styleText}>
              <span style={styleLabel}>Email:</span>{" "}
              <Link href={`mailto:${data?.email}`}>{data?.email}</Link>
            </Text>
            <Text style={styleText}>
              <span style={styleLabel}>Post Code:</span>{" "}
              <Link href={`https://maps.google.com/maps?q=${data?.postcode}`}>
                {data?.postcode}
              </Link>
            </Text>
            <Text style={styleText}>
              <span style={styleLabel}>Registration:</span>{" "}
              <Link
                href={`https://www.carcheck.co.uk/reg?i=${data?.registration.toUpperCase()}`}
              >
                {data?.registration.toUpperCase()}
              </Link>
            </Text>
            <Text style={styleText}>
              <span style={styleLabel}>Service:</span>{" "}
              {data?.services?.join(", ") || "—"}
            </Text>
            <Text style={styleText}>
              <span style={styleLabel}>Key Type:</span>{" "}
              {data?.ignitionType}
            </Text>
          </Section>

          <Section style={styleSection}>
            <Link style={styleButton} href={`tel:${data?.phone}`}>
              Call Client
            </Link>
            &nbsp;&nbsp;
            <Link
              style={styleButton}
              href={`https://wa.me/${data?.phone}`}
            >
              WhatsApp
            </Link>
          </Section>

          <Section style={styleSection}>
            <Text style={styleText}>
              Please review the booking and choose an action:
            </Text>

            <Link style={styleAcceptButton} href={acceptUrl}>
              ✅ Accept Booking
            </Link>

            &nbsp;&nbsp;

            <Link style={styleCancelButton} href={cancelUrl}>
              ❌ Cancel Booking
            </Link>
          </Section>

          <Section>
            <Row>
              <Column align="left">
                <Text style={styleFooterText}>
                  © {new Date().getFullYear()} mySMI.uk
                </Text>
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};
