import { FC, memo } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
// import Layout from "../components/layout/layout";

const PrivacyPolicy: FC = memo(() => {
  return (
    // <Layout>
      <Box sx={{
        maxWidth: "1200px",
        margin: "0 auto",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        flexDirection: "column",
        marginBottom: 2,
        paddingLeft: 3,
        paddingRight: 3,
      }}>
        <Box sx={{
          marginBottom: 2,
        }}>
          <Typography variant="h1" sx={{
            fontSize: "2.1rem",
          }}>Privacy Policy</Typography>
          <Typography variant="body1" color="text.secondary">
            At Car Keys Solutions (`we`, `our,` or `us`), we are committed to protecting your privacy in accordance with the UK Data Protection Act, the UK General Data Protection Regulation (UK GDPR), and applicable industry standards, including Google Consent Mode v2. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you visit our website or use our services.
            <br/><br/>
            By using our website, you agree to the terms of this Privacy Policy.
          </Typography>
        </Box>
        <Box>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMore />}
            >
              <Typography variant="h2" sx={{
                display: 'block',
                fontSize: "1.5rem",
              }}>
                Personal Data
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" color="text.secondary">
                We may collect and process personal data when you:
                <br/>
                - Visit our website
                <br/>
                - Register for our services
                <br/>
                - Contact us via forms, email, or phone
                <br/>
                - Interact with us via social media
                <br/><br/>
                The types of personal data we may collect include:
                <br/>
                - Name
                <br/>
                - Email address
                <br/>
                - Phone number
                <br/>
                - Location data (IP address)
                <br/>
                - Any other data provided in communication with us.
                <br/><br/>
                This information is collected solely to provide the requested service within the UK.
                <br/><br/>
                For visitors who do not fill in our contact form or not contact us by email or phone, we automatically collect only non-identifiable information about the visit to our website, including:
                <br/>
                - Browser type and version
                <br/>
                - Operating system
                <br/>
                - Time spent on pages
                <br/>
                - Pages viewed
                <br/>
                - Referring URLs
                <br/>
                - Device information
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMore />}
            >
              <Typography variant="h2" sx={{
                display: 'block',
                fontSize: "1.5rem",
              }}>
                How We Use Your Data
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" color="text.secondary">
                We may use your personal data for the following purposes:
                <br/>
                - Service Delivery: To provide the services you requested.
                <br/>
                - Communication: To respond to your enquiries and send service-related notifications.
                <br/>
                - Website Improvement: To analyse and improve our website’s functionality and user experience.
                <br/>
                - Marketing: To send you promotional content and offers (only with your consent).
                <br/>
                - Compliance: To fulfil legal obligations and maintain the security of our systems.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMore />}
            >
              <Typography variant="h2" sx={{
                display: 'block',
                fontSize: "1.5rem",
              }}>
                Legal Basis for Processing
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" color="text.secondary">
                We process personal data under the following lawful grounds, as required by the UK Data Protection Act:
                <br/>
                - Consent: When you opt-in to receive marketing communications or allow the use of cookies.
                <br/>
                - Contractual Obligation: When processing is necessary to fulfil a contract or agreement with you.
                <br/>
                - Legitimate Interests: When we have a legitimate business reason, such as improving our services or preventing fraud.
                <br/>
                - Legal Compliance: When required by law to process or retain data.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMore />}
            >
              <Typography variant="h2" sx={{
                display: 'block',
                fontSize: "1.5rem",
              }}>
                Sharing Your Information
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" color="text.secondary">
                We will never sell your personal data. However, we may share your information with:
                <br/>
                - Service Providers: Third parties who assist in the operation of our website, analytics, and customer services, ensuring they comply with UK Data Protection Law.
                <br/>
                - Google: For consent and cookie management via Google Consent Mode v2.
                <br/>
                - Legal Authorities: If required by law, to protect our rights or comply with legal obligations.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMore />}
            >
              <Typography variant="h2" sx={{
                display: 'block',
                fontSize: "1.5rem",
              }}>
                Your Rights Under the UK Data Protection Act
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" color="text.secondary">
                You have the following rights regarding your personal data:
                <br/>
                - Right to Access: Request a copy of your personal data held by us.
                <br/>
                - Right to Rectification: Correct inaccurate or incomplete data.
                <br/>
                - Right to Erasure: Request deletion of your data where applicable (`right to be forgotten`).
                <br/>
                - Right to Restrict Processing: Request limits on how we process your data.
                <br/>
                - Right to Data Portability: Request your data in a structured, machine-readable format.
                <br/>
                - Right to Object: Object to processing based on legitimate interests or direct marketing.
                <br/>
                - Right to Withdraw Consent: At any time, where consent was previously given for processing.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMore />}
            >
              <Typography variant="h2" sx={{
                display: 'block',
                fontSize: "1.5rem",
              }}>
                Data Retention 
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" color="text.secondary">
                We will retain your personal data only for as long as necessary to fulfil the purposes outlined in this policy. This includes complying with legal obligations, resolving disputes, and enforcing agreements.
              </Typography>
            </AccordionDetails>
          </Accordion>
  
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMore />}
            >
              <Typography variant="h2" sx={{
                display: 'block',
                fontSize: "1.5rem",
              }}>
                Data Security
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" color="text.secondary">
                We implement appropriate technical and organisational measures to ensure your personal data is secure, including encryption, access controls, and regular security reviews.
              </Typography>
            </AccordionDetails>
          </Accordion>
    
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMore />}
            >
              <Typography variant="h2" sx={{
                display: 'block',
                fontSize: "1.5rem",
              }}>
                Changes to This Privacy Policy
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" color="text.secondary">
                We may update this Privacy Policy to reflect changes in our operations, legal requirements, or regulatory guidance. Any changes will be posted on this page.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    // </Layout>
  );
});

PrivacyPolicy.displayName = "PrivacyPolicy";
export default PrivacyPolicy;