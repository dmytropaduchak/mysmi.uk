import { FC, memo } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Box, Link, Typography } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
// import Layout from "../components/layout/layout";

const CookiePolicy: FC = memo(() => {
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
          }}>Cookie Policy</Typography>
          <Typography variant="body1" color="text.secondary">
            This Cookie Policy explains what cookies are and how we use them, the types of cookies we use i.e, the information we collect using cookies and how that information is used, and how to manage the cookie settings.
            <br/>
            <br/>
            Cookies are small text files that are used to store small pieces of information. They are stored on your device when the website is loaded on your browser. These cookies help us make the website function properly, make it more secure, provide better user experience, and understand how the website performs and to analyze what works and where it needs improvement.
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
                How do we use cookies?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" color="text.secondary">
                As most of the online services, our website uses first-party and third-party cookies for several purposes. First-party cookies are mostly necessary for the website to function the right way, and they do not collect any of your personally identifiable data.
                <br/><br/>
                The third-party cookies used on our website are mainly for understanding how the website performs, how you interact with our website, keeping our services secure, providing advertisements that are relevant to you, and all in all providing you with a better and improved user experience and help speed up your future interactions with our website.
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
                Manage cookie preferences
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" color="text.secondary">
                Different browsers provide different methods to block and delete cookies used by websites. You can change the settings of your browser to block/delete the cookies. Listed below are the links to the support documents on how to manage and delete cookies from the major web browsers.
                <br/><br/>
                <Link href="https://support.google.com/accounts/answer/32050">Chrome Support documents</Link>
                <br/>
                <Link href="https://support.apple.com/en-in/guide/safari/sfri11471/mac">Safari Support documents</Link>
                <br/>
                <Link href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox?redirectslug=delete-cookies-remove-info-websites-stored&redirectlocale=en-US">Firefox Support documents</Link>
                <br/>
                <Link href="https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc">Microsoft Edge Support documents</Link>
                <br/><br/>
                If you are using any other web browser, please visit your browser’s official support documents.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    // </Layout>
  );
});

CookiePolicy.displayName = "CookiePolicy";
export default CookiePolicy;