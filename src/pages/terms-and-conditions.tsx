import { FC, memo} from "react";
import { Typography, Box, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import Layout from "../components/layout/layout";

const TermsAndConditions: FC = memo(() => {
  return (
    <Layout>
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
          }}>Terms And Conditions</Typography>
          <Typography variant="body1" color="text.secondary">
            - The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and any or all Agreements: `Client`, `You`, and `Your` refer to you, the person accessing this website and accepting the Company`s terms and conditions. `The Company`, `Ourselves`, `We`, `Our` and `Us`, refers to our Company. `Party`, `Parties`, or `Us`, refers to both the Client and ourselves, or either the Client or ourselves.
            <br/>
            - All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client most appropriately, whether by formal meetings of a fixed duration or any other means, for the express purpose of meeting the Client`s needs in respect of provision of the Company`s stated services/products, following and subject to, prevailing law of.
            <br/>
            - Any use of the above terminology or other words in the singular, plural, capitalisation and he/she or they are taken as interchangeable and therefore as referring to the same.
            <br/>
            - All auto locksmith work, services, and invoices provided by Car Keys Solutions are subject to these terms and conditions. We reserve the right to change, update and amend at any time without notice.
            <br/>
            - Please read these terms and conditions carefully, as they are binding on You and Us, and a contract will come into existence when you accept an estimate or quote for the Services that We provide to You. If You have any questions or if any of these terms and conditions are not acceptable to You, please contact us.
            <br/>
            - Car Keys Solutions reserves the right (in our sole and absolute discretion) to refuse to provide locksmith services to You (including installation of Your materials).
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
                Our Liability to You
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" color="text.secondary">
                - We will take all reasonable care to avoid and minimise the damage being caused to Your vehicle in the course of Us providing the Services. To avoid doubt, we shall have no responsibility for making good any such damage that occurs or for any cleaning or other associated costs linked to such damage.
                <br/>
                - We will not be liable for any damage resulting from aftermarket modifications, previous work-related malfunctions, or due to vehicle issues.
                <br/>
                - We will not be liable to You for loss or damage due to the Contract unless We cause death or injury through Our negligence.
                <br/>
                - If you are a consumer, we will not be responsible under this Contract for any loss or damage related to your businesses. Nothing in these Terms will affect Your right to bring legal action.
                <br/>
                - All parts supplied by Us and all materials used in carrying out the Services shall remain Our property until payment is received from You in full.
                <br/>
                - All parts and all materials used by Us in carrying out the Services are purchased from registered UK and overseas suppliers.
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
                Your Personal Information and How we may use it
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" color="text.secondary">
                - We may request specific information from You before commencing Services, for example, proof of Your identity and proof that You are entitled to authorise the carrying out of the Services. If You are unable or unwilling to provide such information to Us, We may refuse to provide Services.
                <br/>
                - We will use the personal information You provide to Us to (i) Provide the Services, (ii) process Your payment for such Services, and (iii) inform You about similar products or services that We provide, but You may stop receiving these at any time by contacting Us.
                <br/>
                - You agree that We may pass Your personal information to credit reference agencies and that they may keep a record of any search they do. We will not give Your data to any other third party.
                <br/>
                - Phone calls may be recorded for quality and training purposes.
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
                Price and Payment
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" color="text.secondary">
                - The price of our Services will be set out on the invoice overleaf alongside the box marked `Total`. Such price includes VAT or otherwise stated.
                <br/>
                - The price of Our Services will include labour and any materials used in connection with the provision of the Services.
                <br/>
                - Pricing on the website (including Services and materials) refers to working hours. It can be subject to change on-site depending on the time, service area, workload and stock price of materials.
                <br/>
                - Scheduled (booked) services can be subject to a booking deposit of £120 or more when the quote exceeds 150 GBP.
                <br/>
                - Any estimate or quote which We provide to You by email, text or orally shall be capable of amendment by Us in the event (i) that We determine additional labour time and/or materials are required to complete the Services which we did not anticipate at the time the original estimate was provided to You or (ii) of a manifest error in respect of the original estimate.
                <br/>
                - Additional charges may apply if the customer`s vehicle has aftermarket modifications, pre-existing malfunctions, or issues arising from previous work.
                <br/>
                - We DO NOT provide discounts for not meeting the estimates (time of arrival, labour time and/or price of materials).
                <br/>
                - When a specific part must be custom-ordered for your vehicle to fulfil your service request, a deposit equal to the minimum of the part`s value will be mandatory.
                <br/>
                - Car Keys Solutions accepts Cash, Debit or Credit Cards and Bank transfers.
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
                Booking and Cancellation
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" color="text.secondary">
                - When Car Keys Solutions schedules a job for You, the job is assigned to an auto locksmith within Our Company in minutes. Therefore, if the job is cancelled after being booked or upon arriving at the location where You requested the Services to be performed, You shall be obliged to pay a cancellation fee.
                <br/>
                - If you cancel the job within 60 minutes of booking it, you shall be obliged to pay a cancellation fee of £60, including VAT. Cancellation after sixty minutes of securing the job until our locksmith or Contractors arrive at your location equals £120, including VAT.
                <br/>
                - Once We`ve arrived at your site and begun to provide the Services, You may cancel the Contract for our Services, provided that You shall remain liable for the total amount of the price set out on the invoice.
                <br/>
                - A £120 charge also applies if our technician or Contractor arrives at your location and the service you request cannot be completed due to other vehicle issues, incorrect service requests or incorrect or defective parts supplied by You.
                <br/>
                - Cancellation charges are payable on the day of cancellation.
                <br/>
                - If You ask to reschedule the agreed job rather than cancel for a later date no longer than 14 working days ahead and give at least 24 hours notice, You will not incur any additional fees.
                <br/>
                - Scheduled jobs may only be rescheduled only one time.
                <br/>
                - When cancelling your order after the deposit has been submitted to place a part order for your vehicle to supply you with the service requested, no refunds will be issued, as the part is to be ordered specially for your car.
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
                Warranty
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" color="text.secondary">
                In the unlikely event that there is any defect with the Services or parts supplied and fitted by Us and such deficiency manifests itself in the twelve (12) month period following completion of the Services, please tell Us as soon as reasonably possible and give Us a reasonable opportunity to inspect and repair such defect or to replace any defective part as appropriate.
                <br/><br/>
                If a defect is reported to Us in the twelve (12) month period following completion of the Services and upon our inspection of the matter, such fault is found to be genuine (and not the result of deliberate or negligent damage), We will use every effort to repair or fix the defect as soon as reasonably possible during working hours. You will not have to pay for Us to rectify the fault in the Services under this section.
                <br/><br/>
                If the defect results from deliberate or negligent damage, we have the right to charge the total amount for repair.
                <br/><br/>
                Some services have a different warranty period, which will be specified in the estimate or invoice.
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
                Legal Conditions
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" color="text.secondary">
                The Contract is governed by English law.
                <br/><br/>
                You cannot transfer the legal rights to this Contract without Our written permission. We may transfer any part of this Contract, but Your rights and obligations under this Contract will remain unaffected. If We transfer any of the rights and obligations under this Contract to another company, the expression `We` or `Our` will include that other Company for this Contract.
                <br/><br/>
                If we need to serve a notice under this Contract, we will send it to the address on your invoice. You must serve any notices to us at the address below.
                <br/><br/>
                Suppose any term of this Contract is held by the courts or any other legal or regulatory body to be invalid or unenforceable. In that case, the rest of the terms of the Contract shall not be affected by such invalidity or unenforceability.
                <br/><br/>
                If You breach any contract between Us and We fail to enforce the provisions of the Contract, Our failure or silence should not be understood by You that We are giving up on Our rights and remedies.
                <br/><br/>
                If either We or You do give up on Our rights and remedies on one occasion, that does not mean that We or You are doing so in respect of any other rights or remedies We may have.
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
                How to solve a problem
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" color="text.secondary">
                If you have a problem with your vehicle or the service you have received, please ask for our customer care representative. If you feel we still need to resolve your issue, you can use our conciliation service, provided by RAC and detailed in the RAC code of conduct. 
                <br/><br/>
                If You want to ask Us anything about this document or the Services We are performing for You, or if You want to make a complaint, please get in touch with us via Our website. You can contact Car Keys Solutions by telephone at +447516000030, by emailing us at contact@mysmi.uk, or by writing a letter.
                <br/><br/>
                These Terms & Conditions are our key terms of business; for comprehensive details, please ask to see the `RAC Customer Charter & Code of Conduct Booklet`. Nothing in these terms will affect your statutory rights.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    </Layout>
  )
});


TermsAndConditions.displayName = "TermsAndConditions";
export default TermsAndConditions;